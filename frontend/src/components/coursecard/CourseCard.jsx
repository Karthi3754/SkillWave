import React from "react";
import "./courseCard.css";
import { server } from "../../main";
import { UserData } from "../../context/UserContext";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import axios from "axios";
import { CourseData } from "../../context/CourseContext";

const CourseCard = ({ course }) => {
  const navigate = useNavigate();
  const { user, isAuth } = UserData();
  const { fetchCourses } = CourseData();

  const deleteHandler = async (id) => {
    if (confirm("Are you sure you want to delete this course")) {
      try {
        const { data } = await axios.delete(`${server}/api/course/${id}`, {
          headers: {
            token: localStorage.getItem("token"),
          },
        });

        toast.success(data.message);
        fetchCourses();
      } catch (error) {
        toast.error(error.response.data.message);
      }
    }
  };
  
  return (
    <div className="course-card">
      <div className="course-card__image">
        <img src={`${server}/${course.image}`} alt="" className="course-image" />
        <div className="course-card__price">₹{course.price}</div>
      </div>
      <div className="course-card__content">
        <h3 className="course-card__title">{course.title}</h3>
        <div className="course-card__meta">
          <span className="course-card__instructor">{course.createdBy}</span>
          <span className="course-card__duration">{course.duration} weeks</span>
        </div>
        
        <div className="course-card__actions">
          {isAuth ? (
            <>
              {user && user.role !== "admin" ? (
                <>
                  {user.subscription.includes(course._id) ? (
                    <button 
                      onClick={() => navigate(`/course/study/${course._id}`)}
                      className="course-card__btn course-card__btn--primary"
                    >
                      Study Now
                    </button>
                  ) : (
                    <button 
                      onClick={() => navigate(`/course/${course._id}`)}
                      className="course-card__btn course-card__btn--secondary"
                    >
                      Enroll Now
                    </button>
                  )}
                </>
              ) : (
                <button 
                  onClick={() => navigate(`/course/study/${course._id}`)}
                  className="course-card__btn course-card__btn--primary"
                >
                  Study Now
                </button>
              )}
              
              {user && user.role === "admin" && (
                <button
                  onClick={() => deleteHandler(course._id)}
                  className="course-card__btn course-card__btn--danger"
                >
                  Delete
                </button>
              )}
            </>
          ) : (
            <button 
              onClick={() => navigate("/login")} 
              className="course-card__btn course-card__btn--secondary"
            >
              Enroll Now
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default CourseCard;