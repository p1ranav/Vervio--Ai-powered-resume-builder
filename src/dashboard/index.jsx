import React, { useState, useEffect } from "react";
import AddResume from "./components/AddResume";
import ResumeCardItem from "./components/ResumeCardItem";

const Dashboard = () => {
  const [data, setData] = useState(() => {
    const saved = localStorage.getItem("resumes");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("resumes", JSON.stringify(data));
  }, [data]);

  return (
    <div className="p-10 md:px-20 lg:px-32">
      <h2 className="font-bold text-3xl">My Resume</h2>
      <p>Start Creating AI resume for your next Job Role</p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mt-10 gap-5">
        <AddResume data={data} setData={setData} />
        {data.map((item) => (
          <ResumeCardItem key={item.resumeId} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
