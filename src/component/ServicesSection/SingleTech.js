import React from "react";
import { Col, Image } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const SingleTech = ({ tech = {} }) => {
  const { icon, title } = tech;

  return (
    <Col xl={3} lg={4} md={6} sm={12} className="service-block-two">
      <div className="inner-box animated fadeInUp">
        <div className="bottom-curve"></div>
        <div className="icon-box">
          {/* Displaying the image icon from the URL */}
          <Image src={icon} alt={title} className="tech-icon" width={100} // Set width
            height={100} loading="lazy" decoding="async" />
        </div>
        <h5>
          <a href="as">
            <TextSplit text={title} />
          </a>
        </h5>
        <div className="text">{/* You can add a description here if needed */}</div>
        <div className="link-box">
          <a href="as">
            <span className="fa fa-angle-right"></span>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default SingleTech;
