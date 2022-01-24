import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";
import { ReactComponent as Logo } from "../assets/shared/desktop/logo.svg";
import { ReactComponent as FacebookLogo } from "../assets/shared/desktop/facebook.svg";
import { ReactComponent as YoutubeLogo } from "../assets/shared/desktop/youtube.svg";
import { ReactComponent as TwitterLogo } from "../assets/shared/desktop/twitter.svg";
import { ReactComponent as PinterestLogo } from "../assets/shared/desktop/pinterest.svg";
import { ReactComponent as InstagramLogo } from "../assets/shared/desktop/instagram.svg";

const Footer = () => {
  return (
    <div className="flex items-center justify-between h-64 px-32 bg-pure-black text-pure-white">
      <div className="flex gap-32">
        <div className="flex flex-col justify-between">
          <Link to="/">
            <Logo className="svg-fill" />
          </Link>
          <div className="flex justify-between">
            <Link className="svg-social-icons" to="/">
              <FacebookLogo />
            </Link>
            <Link className="svg-social-icons" to="/">
              <YoutubeLogo />
            </Link>
            <Link className="svg-social-icons" to="/">
              <TwitterLogo />
            </Link>
            <Link className="svg-social-icons" to="/">
              <InstagramLogo />
            </Link>
            <Link className="svg-social-icons" to="/">
              <PinterestLogo />
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-4 text-left">
          <Link to="/" className="text-sm uppercase">
            Home
          </Link>
          <Link to="/stories" className="text-sm uppercase">
            Stories
          </Link>
          <Link to="/features" className="text-sm uppercase">
            Features
          </Link>
          <Link to="/pricing" className="text-sm uppercase">
            Pricing
          </Link>
        </div>
      </div>

      <div className="">
        <LinkButton text="Get a invite" url="/signup" />
        <p>Copyright 2019. All Rights Reserved</p>
      </div>
    </div>
  );
};

export default Footer;
