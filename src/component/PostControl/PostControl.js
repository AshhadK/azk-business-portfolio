import { projects } from "../../data/projectSection";
import React from "react";
import { Link } from "react-router-dom";

const PostControl = ({ id }) => {
  const visibleIds = projects
    .filter((project) => !project.hidden)
    .map((project) => project.id);
  const currentIndex = visibleIds.indexOf(parseInt(id, 10));

  if (currentIndex === -1) return null;

  const prevId = visibleIds[(currentIndex - 1 + visibleIds.length) % visibleIds.length];
  const nextId = visibleIds[(currentIndex + 1) % visibleIds.length];

  return (
    <div className="post-control">
      <div className="auto-container">
        <div className="inner clearfix">
          <div className="control prev">
            <Link to={`/portfolio-details/${prevId}`}>
              <span className="fa fa-angle-left"></span> &nbsp; Previous
            </Link>
          </div>
          <div className="control next">
            <Link to={`/portfolio-details/${nextId}`}>
              Next &nbsp;<span className="fa fa-angle-right"></span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostControl;
