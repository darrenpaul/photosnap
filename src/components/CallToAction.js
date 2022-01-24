import React from "react";
import { Link } from "react-router-dom";
import LinkButton from "./LinkButton";

const CallToAction = ({
  title,
  paragraph,
  image,
  link,
  direction,
  backgroundColor,
  textColor,
}) => {
  return (
    <div
      className={`flex ${direction === "reverse" ? "flex-row-reverse" : ""}`}
    >
      <div
        className={`w-3/6 flex items-center justify-center ${backgroundColor}`}
      >
        <div className={`flex flex-col gap-4 p-32 text-left ${textColor}`}>
          <h2 className="text-5xl font-medium leading-tight tracking-wider uppercase">
            {title}
          </h2>
          <p className="opacity-60 ">{paragraph}</p>
          <LinkButton text={link.text} url={link.url} theme={link.theme} />
        </div>
      </div>
      <div>
        <img className="w-full h-full" src={`/assets/${image}`} alt="stories" />
      </div>
    </div>
  );
};

export default CallToAction;
