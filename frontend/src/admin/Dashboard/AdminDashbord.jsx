import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../Utils/Layout";
import axios from "axios";
import { server } from "../../main";
import "./dashboard.css";

const AdminDashboard = ({ user }) => {
  const navigate = useNavigate();
  const [stats, setStats] = useState({
    totalCoures: 0,
    totalLectures: 0,
    totalUsers: 0
  });
  const [loading, setLoading] = useState(true);
  
  // Check user role
  if (user && user.role !== "admin") return navigate("/");
  
  async function fetchStats() {
    setLoading(true);
    try {
      const { data } = await axios.get(`${server}/api/stats`, {
        headers: {
          token: localStorage.getItem("token"),
        },
      });
      setStats(data.stats);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }
  
  useEffect(() => {
    fetchStats();
  }, []);

  return (
    <Layout>
      <div className="dashboard-header">
        <h1>Dashboard Overview</h1>
        <p>Welcome to your admin dashboard</p>
      </div>
      
      <div className="main-content">
        <div className="box">
          <p>Total Courses</p>
          {loading ? (
            <p>...</p>
          ) : (
            <p>{stats.totalCoures || 0}</p>
          )}
        </div>
        
        <div className="box">
          <p>Total Lectures</p>
          {loading ? (
            <p>...</p>
          ) : (
            <p>{stats.totalLectures || 0}</p>
          )}
        </div>
        
        <div className="box">
          <p>Total Users</p>
          {loading ? (
            <p>...</p>
          ) : (
            <p>{stats.totalUsers || 0}</p>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default AdminDashboard;