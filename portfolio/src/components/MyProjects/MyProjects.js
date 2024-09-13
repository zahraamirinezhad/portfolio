import React from "react";
import classes from "./MyProjects.module.scss";
import Project from "../Project/Project";
import Photo_1 from "../../images/photo_1.jpg";
import Photo_2 from "../../images/photo_2.jpg";
import Photo_3 from "../../images/photo_3.jpg";
import Photo_5 from "../../images/photo_5.jpg";
import Photo_7 from "../../images/photo_7.jpg";

const MyProjects = () => {
  const AllProjects = [
    {
      image: Photo_1,
      bio: "An admin panel using Material UI.",
      libraries: [
        "mui/material",
        "react-circular-progressbar",
        "react-router-dom",
        "recharts",
        "sass",
        "use-local-storage-state",
      ],
      link: "https://github.com/zahraamirinezhad/Admin-Dashboard",
    },
    {
      image: Photo_2,
      bio: "A full stack Netflix Clone with admin panel and main page and movies page.",
      libraries: [
        "Firebase",
        "Sass",
        "recharts",
        "axios",
        "material-ui",
        "use-local-storage",
        "crypto-js",
        "dotenv",
        "express",
        "jsonwebtoken",
        "mongoose",
        "react-router-dom",
      ],
      link: "https://github.com/zahraamirinezhad/Netflix-Clone",
    },
    {
      image: Photo_7,
      bio: "A gallery using Firebase.",
      libraries: ["Firebase", "Sass", "use-local-storage"],
      link: "https://github.com/zahraamirinezhad/Photo-Gallery",
    },
    {
      image: Photo_3,
      bio: "A task manager using Material UI.",
      libraries: [
        "Sass",
        "react-router-dom",
        "Redux",
        "Redux Toolkit",
        "mui/material",
      ],
      link: "https://github.com/zahraamirinezhad/Task-Manager",
    },
    {
      image: Photo_5,
      bio: "A music player using Kotlin.",
      libraries: [
        "github.bumptech.glide:glide",
        "diogobernardino:williamchart",
        "tbuonomo:dotsindicator",
        "sun.mail:android-activation",
        "sun.mail:android-mail",
        "google.code.gson:gson",
        "squareup.picasso:picasso",
        "androidx.media:media",
        "github.bumptech.glide:glide",
      ],
      link: "https://github.com/zahraamirinezhad/Music-Player",
    },
  ];
  return (
    <div className={classes.container}>
      <h1>MY PROJECTS</h1>
      <div className={classes.projects}>
        {AllProjects.map((pr) => (
          <Project project={pr}></Project>
        ))}
      </div>
    </div>
  );
};

export default MyProjects;
