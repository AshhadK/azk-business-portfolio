import { projects } from "../../data/projectSection"; // Adjust path as necessary
import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import { Col, Row } from "react-bootstrap";
import ImageSlider from '../ProjectSection/ImageSlider';
import VideoSlider from '../ProjectSection/VideoSlider';




const ProjectSingle = ({ id }) => {
  const [projectData, setProjectData] = useState(null);

  useEffect(() => {
    if (projects) {
      const project = projects.find((proj) => proj.id === parseInt(id));
      setProjectData(project);
    }
  }, [id]);

  if (!projectData) {
    return <p>Project not found!</p>;
  }
  const { images, title, about, link, githubLink, paragraphs, clients, category, video } = projectData;



  return (
    <section className={"project-single style-two"}>
      <div className="auto-container-copy">
        <Row className="clearfix">
          <div className="div-margin">
            <h2 className="centered-title"> {title}  </h2>
          </div>

          {video ? (
            <>
              <ImageSlider images={images} />
              <h3 className="centered-title"> Video Recording  </h3>
              <VideoSlider src={video} view={category} />

            </>

          ) : <ImageSlider images={images} />}


          <Col lg={12} md={12} sm={12}>
            <div className="auto-container">
              <div className="text-content">
                <Row>
                  <Col lg={8} md={12} sm={12}>
                    <div className="inner">
                      <h4>Project Summary </h4>
                      <h6>{about}</h6>
                      <div>
                        {paragraphs.map((text, index) => (
                          <p key={index}>{text}</p>
                        ))}
                      </div>

                    </div>
                  </Col>
                  <Col lg={4} md={12} sm={12}>
                    <div className="inner">
                      <ul className="info">

                        <li>


                          <strong>{category !== 'Mobile Development' ? "Website Link:" : "Prototype"} </strong> <br />
                          {link ? (
                            <Link
                              to={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="portfolio-button-link"
                            >
                              {category !== 'Mobile Development' ? " View Website" : "Figma Link"}
                            </Link>
                          ) : (
                            <Link to="#"
                              className="portfolio-button-link-disabled"
                            >
                              {category !== 'Mobile Development' ? " View Website" : "Figma Link"}
                            </Link>

                          )}

                        </li>
                        {githubLink && (
                          <li>
                            <strong>Github:</strong> <br />
                            <a
                              href={githubLink}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="portfolio-button-link"
                            >
                              View Source Code
                            </a>
                          </li>
                        )}



                        <li>
                          <strong>Category:</strong> <br />
                          {category}
                        </li>
                        <li>
                          <strong>Client:</strong> <br />
                          {clients}
                        </li>

                        {/* <li >


                          {link ? (
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                              style={{ marginLeft: "5px" }}
                            >
                              <Image
                                src="https://img.icons8.com/ios-filled/50/000000/internet.png"
                                alt="View Website"
                                width={30}
                                height={30}
                              />
                              Visit Website
                            </a>
                          ) : (
                            <span style={{ color: "gray", cursor: "not-allowed" }}>Not Live </span>
                          )}

                        </li>
                        <li >


                          <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer"
                            style={{ marginLeft: "5px" }}
                          >
                            <Image
                              src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png"
                              alt="GitHub"
                              width={30}
                              height={30}
                            />
                            View Github
                          </a>
                        </li> */}
                      </ul>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </Col>
        </Row>
      </div >
    </section >
  );
};

export default ProjectSingle;
