import { aboutMeOne } from "../../data/aboutSection";
import React from "react";
import { Col, Image, Row } from "react-bootstrap";

const { image, name, title, text, text2, text3 } = aboutMeOne;

const AboutMeOne = () => {
  return (
    <section className="about-me-one">
      <div className="auto-container">
        {/* First row with image and name/title */}
        <Row className="align-items-center">
          <Col md={4} lg={4}>
            <div className="about-me-one__image-wrapper" style={{ textAlign: "center" }}>
              <Image
                src={image}
                alt=""
                fluid
                loading="lazy"
                decoding="async"
                style={{
                  maxWidth: "100%", // Ensures the image doesn't exceed its container
                  borderRadius: "50%", // Makes the image circular
                  height: "auto", // Maintains aspect ratio
                }}
              />
            </div>
          </Col>
          <Col md={8} lg={8}>
            <div className="about-me-one__details">
              <h3>{name}</h3>
              <h6>{title}</h6>
            </div>
          </Col>
        </Row>

        {/* Second row with the rest of the content */}
        <Row>
          <Col md={12} lg={12}>
            <div className="about-me-one__content">
              <p className="about-me-one__text">{text}</p>
              <p className="about-me-one__text">{text2}</p>
              <p className="about-me-one__text">{text3}</p>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AboutMeOne;
