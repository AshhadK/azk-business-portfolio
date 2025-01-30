import { servicesTechStack } from "../../data/servicesSection";
import useActive from "../../hooks/useActive";
import React from "react";
import { Row } from "react-bootstrap";
import SingleTech from "./SingleTech";

const { title, tech } = servicesTechStack;

const ServiceTechStack = ({ className = "" }) => {
  const ref = useActive("#services");

  return (
    <section
      ref={ref}
      className={`services-section-three ${className}`}
      id="services"
    >
      <div className="auto-container">
        <div className="sec-title centered">
          <h2>
            {title} <span className="dot">.</span>
          </h2>
        </div>
        <div className="services">
          <Row className="clearfix">
            {tech.map((service) => (
              <SingleTech tech={service} key={service.id} />
            ))}
          </Row>
        </div>
      </div>
    </section>
  );
};

export default ServiceTechStack;
