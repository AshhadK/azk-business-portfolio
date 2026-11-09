import { Link } from "react-router-dom";
import React from "react";
import { Image } from "react-bootstrap";

const GalleryItem = ({ item = {} }) => {
  const { image, title, tagline, filter, id } = item; // Add id to destructuring
 
  return (
    <div className={`gallery-item ${filter.join(" ")}`}>
      <div className="inner-box">
        <figure className="image">
          <Image
            src={require(`../../assets/images/gallery/${image}`)}
            alt=""
            loading="lazy"
            decoding="async"
          />
        </figure>
        <p className="lightbox-image overlay-box"></p>
        <div className="cap-box">
          <div className="cap-inner">
            <div className="cat">
              <span>{tagline}</span>
            </div>
            <div className="title">
              <h5>
                <Link to={`/portfolio-details/${id}`}>
                  {title}
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GalleryItem;
