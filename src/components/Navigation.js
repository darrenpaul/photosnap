import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <nav className="flex items-center justify-between h-16 px-32 bg-pure-white">
      <Link to="/">
        <img src="/assets/shared/desktop/logo.svg" alt="branding"></img>
      </Link>
      <div className="flex gap-4">
        <Link to="/stories" className="text-sm uppercase text-pure-black">
          Stories
        </Link>
        <Link to="/features" className="text-sm uppercase text-pure-black">
          Features
        </Link>
        <Link to="/pricing" className="text-sm uppercase text-pure-black">
          Pricing
        </Link>
      </div>
      <Link to="/invite" className="text-sm uppercase text-pure-black">
        Get An Invite
      </Link>
    </nav>
  );
};

export default Navigation;
