import React from "react";
import classes from "./Project.module.scss";

const Project = ({ project }) => {
  return (
    <div className={classes.container}>
      <div className={classes.borderLine}></div>
      <div className={classes.project}>
        <img src={project.image} alt="image" />
        <p>{project.bio}</p>
        <h4>Used Packages</h4>
        <ul>
          {project.libraries.map((library) => (
            <li key={library}>{library}</li>
          ))}
        </ul>
        <a href={project.link} target="_blank">
          Source Code
        </a>
      </div>
    </div>
  );
};

export default Project;
