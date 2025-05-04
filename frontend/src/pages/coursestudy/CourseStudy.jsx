import React, { useEffect } from "react";
import "./coursestudy.css";
import { Link, useNavigate, useParams } from "react-router-dom";
import { CourseData } from "../../context/CourseContext";
import { server } from "../../main";

const CourseStudy = ({ user }) => {
  const params = useParams();
  const { fetchCourse, course } = CourseData();
  const navigate = useNavigate();

  if (user && user.role !== "admin" && !user.subscription.includes(params.id))
    return navigate("/");

  useEffect(() => {
    fetchCourse(params.id);
  }, []);

  return (
    <>
      {course && (
        <div className="course-study-container">
          <div className="course-card1">
            <img
              src={`${server}/${course.image}`}
              alt={course.title}
              className="course-image1"
            />
            <div className="course-content">
              <h2 className="course-title">{course.title}</h2>
              <p className="course-description">{course.description}</p>
              <p className="course-info">By: {course.createdBy}</p>
              <p className="course-info">Duration: {course.duration} weeks</p>
              <Link to={`/lectures/${course._id}`} className="lecture-button">
                Go to Lectures
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CourseStudy;
