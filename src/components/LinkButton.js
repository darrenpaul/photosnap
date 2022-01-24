import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as ArrowSVG } from "../assets/shared/desktop/arrow.svg";

const LinkButton = ({ text, url, theme }) => {
  return (
    <div>
      <Link to={url} className="flex items-center gap-4 uppercase">
        {text}
        <Link
          className={`${
            theme === "dark" ? "svg-arrow-icon-dark" : "svg-arrow-icon"
          }`}
          to="/"
        >
          <ArrowSVG />
        </Link>
      </Link>
    </div>
  );
};

export default LinkButton;
