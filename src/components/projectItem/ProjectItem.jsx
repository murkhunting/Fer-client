import React from "react";
import { useState } from "react";
import "./projectItem.scss";
import { Link } from "react-router-dom";



const ProjectItem = (project) => {
  const [isHovered, setIsHovered] = useState(false);
  const { titulo, byn, gif, _id, type } = project.project;
  

  return (
    <div className="projectitem" >
      <Link to={`/${type}s/${_id}`} className="projectname">
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <span>{titulo}</span>
          {isHovered && (
            <>
              <h3>View Project</h3>
            </>
          )}
        </div>
      </Link>
      <div>
        {isHovered ? (
          <>
            <img className="gif" src={gif} alt="" />
          </>
        ) : (
          <>
            <img className="blackwhite" src={byn} alt="" />
          </>
        )}
      </div>
    </div>
  );
};

export default ProjectItem;
