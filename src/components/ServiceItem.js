import React from "react";

const ServiceItem = ({ image, title, paragraph }) => {
  return (
    <div className="grid items-center justify-center grid-cols-1 grid-rows-2 gap-8">
      <div className="flex items-center justify-center w-full">
        <img className="w-16" src={`/assets/${image}`} alt="stories" />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-2xl font-bold">{title}</p>
        <p className="text-sm opacity-60">by {paragraph}</p>
      </div>
    </div>
  );
};
export default ServiceItem;
