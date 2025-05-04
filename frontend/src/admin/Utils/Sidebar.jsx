import React from "react";
import "./common.css";
import { Link, useLocation } from "react-router-dom";
import { AiFillHome, AiOutlineLogout } from "react-icons/ai";
import { FaBook, FaUserAlt } from "react-icons/fa";
import { UserData } from "../../context/UserContext";

const Sidebar = () => {
  const { user } = UserData();
  const location = useLocation();
  
  // Function to check if the link is active
  const isActive = (path) => {
    return location.pathname === path ? "active" : "";
  };
  
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link to="/admin/dashboard" className={isActive("/admin/dashboard")}>
            <div className="icon">
              <AiFillHome />
            </div>
            <span>Home</span>
          </Link>
        </li>

        <li>
          <Link to="/admin/course" className={isActive("/admin/course")}>
            <div className="icon">
              <FaBook />
            </div>
            <span>Courses</span>
          </Link>
        </li>

        {user && user.mainrole === "superadmin" && (
          <li>
            <Link to="/admin/users" className={isActive("/admin/users")}>
              <div className="icon">
                <FaUserAlt />
              </div>
              <span>Users</span>
            </Link>
          </li>
        )}

        <li>
          <Link to="/account" className={isActive("/account")}>
            <div className="icon">
              <AiOutlineLogout />
            </div>
            <span>Logout</span>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;