import React from 'react'
import './LandingPage.css'


function LandingPage() {
  return (
    <div>
      <div class="center-text">
          <p class="p1">AI-Powered Rseme Building    <span class="new">NEW</span></p>
      </div>
      <div>
        <h1 class="head1">AI that creates,optimises,</h1>
        <h1 class="head2"><span>and lands you the job</span></h1>
        <h5 class="h51">Vervio uses advanced AI to generate professional, ATS-optimized resumes in minutes.</h5>
         <h5 class="h51"> <span>Join thousands who've landed their dream jobs with AI-powered resume building.</span> </h5>
         <ul class="green-bullets">
          <li>95% ATS Pass Rate</li>
          <li>2 Min Average Time</li>
          <li>50K+ Users</li>
         </ul>
         <button class="b1">Get Started Free →</button>
         <button class="b2">See Examples  </button>
         <br/>
         <br/>
         <p class="p2">Truste By Professionals at</p>
         <ul class="company">
          <button>Google</button>
          <button>Microsoft</button>
          <button>Amazon</button>
          <button>Meta</button>
          <button>Apple</button>
         </ul>
      </div>
      <div class="center-text">
        <p class="p3">How It Works</p>
      </div>
      <h1 class="head3">The first fully automated resume builder in your</h1>
      <h1 class="head4"> browser.</h1>
      <p class="p4">Perfect for anyone looking to stand out in today's competetive job market</p>
      <div>
        <br/>
        <br/>
        <br/>
        <div class="div1">
          <h5 class="boxtext">Create What You Need</h5>
          <p class="p5">AI instantly analyzes your experience and career goals to generate<br/> 
          tailored, compelling resume contents that highlights your strengths.</p>
          <h4><span class="ninefive">95%</span> <span class="ats">ATS Pass Rate</span></h4>
        </div>

        <div class="div1">
          <h5 class="boxtext">Optimize What You Have</h5>
          <p class="p5">Automatically refines keywords, formatting and structure to ensure<br/> 
          your resume passes ATS system and catches recruiters attention.</p>
          <h4><span class="ninefive">2 min</span> <span class="ats">Average Time</span></h4>
        </div>
      </div>
     
      <div>
          <div class="div2">
          <h5 class="boxtext">Target What You Want</h5>
          <p class="p5">Customize resume for specific job descriptions with AI-powered<br/> 
          matching that emphasizes relevant skills and experiences.</p>
          <h4><span class="ninefive">3x</span> <span class="ats">More Interviews</span></h4>
        </div>

        <div class="div1">
          <h5 class="boxtext">Perfect What You Present</h5>
          <p class="p5">Choose from ATS-optimisez templates designed by hiring experts.<br/> 
          Every layout is tested to ensure maximum readability and impact.</p>
          <h4><span class="ninefive">20 +</span> <span class="ats">Pro Templates</span></h4>
        </div>
      </div>
       <br/>
        <br/>
        <br/>
       <div class="even">
        <div class="footer">
      <div class="stats-container">
        <div class="stat-box">
          <h2 class="green">50,000+</h2>
          <p>Resumes Created</p>
        </div>
        <div class="stat-box">
          <h2 class="green">95%</h2>
          <p>ATS Compatibility</p>
        </div>
        <div class="stat-box">
          <h2 className="green">4.9/5</h2>
          <p>User Rating</p>
        </div>

      </div>
      </div>
      <div class="endbox">
        <div class="textleft">
          <h3>Vervio</h3>
          <p class="textleft2">AI-Powered Resume Builder</p>
        </div>
        <div class="mediabox">
        <div  class="textright">
        <button><i class="btn btn-secondary bi bi-twitter"></i></button>
         <button><i class="btn btn-secondary bi bi-linkedin"></i></button>
         <button><i class="btn btn-secondary bi bi-github"></i></button> 
        </div>
        </div>
        <hr/>
          <div className="footer-bottom">
        © 2025 Vervio. All rights reserved.
      </div>
        </div>
      </div>
    </div>
   
  )
}

export default LandingPage
