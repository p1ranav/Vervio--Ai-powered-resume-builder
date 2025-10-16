import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import logo from "/logo.png";

const LandingPage = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <section className="flex flex-col md:flex-row items-center justify-between px-8 md:px-20 py-16 md:py-24 gap-10">
        <div className="max-w-xl space-y-6">
          <h2 className="text-4xl md:text-5xl font-bold text-[#0B132B] leading-tight">
            Create a <span className="text-[#0077B6]">Professional Resume</span>
            <br />
            with the Power of AI.
          </h2>
          <p className="text-gray-600 text-lg">
            Let Vervio craft the perfect resume for your dream job.  
            AI-generated summaries, skill highlights, and keyword optimization —
            all in seconds.
          </p>
          <div className="flex gap-4">
            <Link to="/auth/sign-in">
              <Button
                style={{
                  backgroundColor: "#00B4D8",
                  color: "white",
                }}
                className="px-6 py-3 text-lg"
              >
                Get Started for Free
              </Button>
            </Link>
          </div>
        </div>

        <div className="flex justify-center w-full md:w-1/2">
          <img
            src="vervioo.jpg"
            alt="Vervio AI Resume Example"
            className="w-full max-w-md drop-shadow-2xl rounded-xl"
          />
        </div>
      </section>

      <section className="bg-[#F8FAFC] py-20 px-8 md:px-20">
        <h3 className="text-center text-3xl font-semibold text-[#0B132B] mb-12">
          Why Choose Vervio?
        </h3>
        <div className="grid md:grid-cols-3 gap-8">
          <Feature
            title="AI-Generated Content"
            text="Get instant, polished text for your summary, skills, and objectives."
          />
          <Feature
            title="Beautiful Templates"
            text="Choose from stunning, ATS-friendly designs to suit your profession."
          />
          <Feature
            title="Smart Suggestions"
            text="Improve your resume with keyword optimization and feedback."
          />
        </div>
      </section>

    
      <footer className="text-center py-8 border-t text-gray-500">
        © {new Date().getFullYear()} Vervio. All rights reserved.
      </footer>
    </div>
  );
};

const Feature = ({ title, text }) => (
  <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition">
    <h4 className="text-xl font-semibold text-[#0077B6] mb-2">{title}</h4>
    <p className="text-gray-600">{text}</p>
  </div>
);

export default LandingPage;
