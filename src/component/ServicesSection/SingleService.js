import React from "react";
import { Col } from "react-bootstrap";
import TextSplit from "../Reuseable/TextSplit";

const SingleService = ({ service = {} }) => {
  const { icon, title, text } = service;

  return (
    <Col xl={4} lg={4} md={6} sm={12} className="service-block-two">
      <div className="inner-box animated fadeInUp">
        <div className="bottom-curve"></div>
        <div className="icon-box">
          <span className={icon}></span>
        </div>
        <h5>
          <a href="as">
            <TextSplit text={title} />
          </a>
        </h5>
        <div className="text">{text}</div>
        <div className="link-box">
          <a href="as">
            <span className="fa fa-angle-right"></span>
          </a>
        </div>
      </div>
    </Col>
  );
};

export default SingleService;
