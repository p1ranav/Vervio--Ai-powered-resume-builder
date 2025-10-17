import React from "react";
import { useNavigate } from "react-router-dom";

const VervioLandingPage = () => {

  const navigate = useNavigate();

  return (
    <div className="bg-[#0b0b0b] text-white font-inter">
    
      <section className="text-center py-20 px-4">
        <div className="inline-block bg-[#111] text-sm text-cyan-400 px-4 py-1 rounded-full mb-6">
          <span className="mr-2">⚡</span> AI-Powered Resume Building{" "}
          <span className="ml-1 text-xs bg-cyan-500 text-black px-2 py-0.5 rounded">
            NEW
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold leading-tight">
          AI that creates, optimizes, <br className="hidden md:block" />
          <span className="text-cyan-400">and lands you the job.</span>
        </h1>

        <p className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg">
          Vervio uses advanced AI to generate professional, ATS-optimized
          resumes in minutes. Join thousands who’ve landed their dream jobs with
          AI-powered resume building.
        </p>

        <div className="flex flex-wrap justify-center items-center gap-6 mt-8 text-gray-400 text-sm">
          <span>95% ATS Pass Rate</span> •
          <span>2 Min Average Time</span> •
          <span>50K+ Users</span>
        </div>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <button
            onClick={() => navigate("/auth/sign-in")}
            className="bg-cyan-400 text-black px-6 py-3 rounded-lg font-semibold hover:bg-cyan-300 transition"
          >
            Get Started Free
          </button>
        </div>

        <p className="mt-10 text-gray-500 text-sm">Trusted by professionals at</p>
        <div className="flex justify-center flex-wrap gap-6 mt-3 text-gray-400">
          <span>Google</span> <span>Microsoft</span> <span>Amazon</span>{" "}
          <span>Meta</span> <span>Apple</span>
        </div>
      </section>

    
      <section className="bg-[#111] py-20 px-6 text-center">
        <div className="inline-block bg-[#1a1a1a] text-cyan-400 text-sm px-4 py-1 rounded-full mb-6">
          HOW IT WORKS
        </div>
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          The first fully automated resume builder in your browser.
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto mb-12">
          Perfect for anyone looking to stand out in today’s competitive job
          market.
        </p>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
        
          <div className="bg-[#1a1a1a] rounded-2xl p-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Create What You Need</h3>
            <p className="text-gray-400 text-sm mb-3">
              AI instantly analyzes your experience and career goals to generate
              tailored, compelling resume content that highlights your strengths.
            </p>
            <p className="text-cyan-400 font-bold">95% ATS Pass Rate</p>
          </div>

        
          <div className="bg-[#1a1a1a] rounded-2xl p-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Optimize What You Have</h3>
            <p className="text-gray-400 text-sm mb-3">
              Automatically refines keywords, formatting, and structure to
              ensure your resume passes ATS systems and catches recruiter
              attention.
            </p>
            <p className="text-cyan-400 font-bold">2 min Average Time</p>
          </div>

         
          <div className="bg-[#1a1a1a] rounded-2xl p-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Target What You Want</h3>
            <p className="text-gray-400 text-sm mb-3">
              Customize resumes for specific job descriptions with AI-powered
              matching that emphasizes relevant skills and experiences.
            </p>
            <p className="text-cyan-400 font-bold">3x More Interviews</p>
          </div>

          
          <div className="bg-[#1a1a1a] rounded-2xl p-6 text-left">
            <h3 className="text-xl font-semibold mb-2">Perfect What You Present</h3>
            <p className="text-gray-400 text-sm mb-3">
              Choose from ATS-optimized templates designed by hiring experts.
              Every layout is tested to ensure maximum readability and impact.
            </p>
            <p className="text-cyan-400 font-bold">20+ Pro Templates</p>
          </div>
        </div>
      </section>

     
      <section className="py-20 px-6 text-center bg-[#0b0b0b] border-t border-gray-800">
        <div className="flex flex-wrap justify-center gap-10 text-center">
          <div>
            <p className="text-3xl font-bold text-cyan-400">50,000+</p>
            <p className="text-gray-400 text-sm">Resumes Created</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-cyan-400">95%</p>
            <p className="text-gray-400 text-sm">ATS Compatibility</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-cyan-400">4.9/5</p>
            <p className="text-gray-400 text-sm">User Rating</p>
          </div>
        </div>
      </section>

      <footer className="bg-[#111] py-10 px-6 text-center">
        <h3 className="text-xl font-bold text-cyan-400 mb-2">Vervio</h3>
        <p className="text-gray-400 mb-6 text-sm">AI-Powered Resume Builder</p>

        <div className="flex justify-center gap-6 mb-6 text-gray-400">
       
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="fa-brands fa-x-twitter text-xl"></i>
          </a>
       
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="fa-brands fa-linkedin text-xl"></i>
          </a>
          
          <a href="#" className="hover:text-cyan-400 transition">
            <i className="fa-brands fa-github text-xl"></i>
          </a>
        </div>

        <p className="text-gray-500 text-xs">
          © 2025 Vervio. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default VervioLandingPage;