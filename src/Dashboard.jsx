import React from "react";
import AddResume from "./AddResume.jsx";
import  './Resume.css'


function Dashboard() {
  return (
    <>
    <div class="dashbody">
      {/* navbar part */}
      <nav className="navbar bg-dark" class="navbar">
        <div className="container-fluid d-flex justify-content-end">
          <span className="navbar-brand mb-0 h1  text-white px-3 py-2 rounded">
            Dashboard
          </span>
        </div>
      </nav>
{/*content*/}
      <div className="p-4 p-md-5 min-vh-20 justify-content-start">
        <p className="fw-bold fs-1">My Resume</p>
        <p className="fw-semibold fs-5 mb-4">
          Start creating AI resume for your next job
        </p>
          <AddResume />
      </div>
      </div>
    </>
  );
}

export default Dashboard;
