import React from "react";
import ServiceItem from "./ServiceItem";

const Services = ({ serviceData }) => {
  return (
    <div className="flex items-center justify-center px-32 h-96 bg-pure-white">
      {serviceData.map((service) => (
        <ServiceItem
          key={service.id}
          image={service.image}
          title={service.title}
          paragraph={service.paragraph}
        />
      ))}
    </div>
  );
};
export default Services;
