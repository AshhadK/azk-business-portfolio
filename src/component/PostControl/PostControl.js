import { projects } from "../../data/projectSection";
import React from "react";
import { Link } from "react-router-dom";

const PostControl = ({ id }) => {
  const totalProjects = projects.length;
  const numericId = parseInt(id, 10);

  // Calculate previous and next IDs with wrap-around logic
  const prevId = numericId === 1 ? totalProjects : numericId - 1;
  const nextId = numericId === totalProjects ? 1 : numericId + 1;

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
