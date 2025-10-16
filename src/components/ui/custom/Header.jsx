import React from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { UserButton, useUser } from "@clerk/clerk-react";
import logo from "/logo.png"; // ✅ Import the logo

const Header = () => {
  const { isSignedIn } = useUser();

  return (
    <header className="flex justify-between items-center px-8 py-4 shadow-sm">
    
      <div className="flex items-center gap-2">
        <img src={logo} alt="Vervio Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-semibold bg-gradient-to-r from-[#0077B6] to-[#00B4D8] bg-clip-text text-transparent">
          Vervio
        </h1>
      </div>

      {isSignedIn ? (
        <div className="flex items-center gap-3">
          <Link to="/dashboard">
            <Button variant="outline">Dashboard</Button>
          </Link>
          <UserButton />
        </div>
      ) : (
        <Link to="/auth/sign-in">
          <Button
            style={{
              backgroundColor: "#00B4D8",
              color: "white",
            }}
            className="hover:opacity-90"
          >
            Get Started
          </Button>
        </Link>
      )}
    </header>
  );
};

export default Header;
