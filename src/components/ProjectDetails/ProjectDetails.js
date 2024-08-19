import * as React from "react";
import { useParams, Navigate } from "react-router-dom";
import projects, { Projects_uni } from "../../utils/data";

import "./ProjectDetails.css";
const ProjectDetails = () => {
  const { projectId } = useParams();

  const project = projects.find(
    (project) => project.id === parseInt(projectId)
  );
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="project-details-container">
      <h2 className="section-title"> Project Details</h2>
      <div className="slider-wrapper">
        <div className="slider">
          {project.image.map((img, index) => (
            <img className="" src={img} id={`slide-${index + 1}`} key={index} />
          ))}
        </div>
        <div className="slider-nav">
          {project.image.map((img, index) => (
            <button
              className=""
              key={index}
              onClick={() =>
                document.getElementById(`slide-${index + 1}`).scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
            ></button>
          ))}
        </div>
      </div>

      {/* <h1>Post Details :{projectId}</h1> */}
      <h2 className="project-title ">{project.title}</h2>
      <p className="project-content-details">
        {project.content.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <ul className="project-list">
        <li>
          <span className="project-list-title">PLATFORM </span>
          <span>{project.platform}</span>
        </li>
        <li>
          <span className="project-list-title">STACK </span>
          <span>{project.stack}</span>
        </li>
        <li>
          <span className="project-list-title">DATE </span>
          <span>{project.date}</span>
        </li>
        <li>
          <span className="project-list-title">REPOSITORIE </span>
          <a href={project.github}>
            {project.github}
            <i className="fa-solid fa-link"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export const ProjectDetailsUni = () => {
  const { projectUniId } = useParams();

  const project = Projects_uni.find(
    (project) => project.id === parseInt(projectUniId)
  );
  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return (
    <div className="project-details-container">
      <h2 className="section-title"> Project Details</h2>
      <div className="slider-wrapper">
        <div className="slider-uni">
          {project.image.map((img, index) => (
            <img className="" src={img} id={`slide-${index + 1}`} key={index} />
          ))}
        </div>
        <div className="slider-nav">
          {project.image.map((img, index) => (
            <button
              className=""
              key={index}
              onClick={() =>
                document.getElementById(`slide-${index + 1}`).scrollIntoView({
                  behavior: "smooth",
                  block: "nearest",
                })
              }
            ></button>
          ))}
        </div>
      </div>
      <h2 className="project-title ">{project.title}</h2>
      <p className="project-content-details">
        {project.content.split("\n").map((line, index) => (
          <React.Fragment key={index}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </p>
      <ul className="project-list">
        <li>
          <span className="project-list-title">ARTICLE </span>
          <a href={project.file}>
            <span>
              Spanish Article <i className="fa-solid fa-link"></i>
            </span>
          </a>
        </li>
        <li>
          <span className="project-list-title">DATE </span>
          <span>{project.date}</span>
        </li>
      </ul>
    </div>
  );
};

export default ProjectDetails;
