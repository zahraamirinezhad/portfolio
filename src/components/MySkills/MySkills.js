import React from "react";
import classes from "./MySkills.module.scss";
import Skill from "../Skill/Skill";
import { useState, useRef, useEffect } from "react";

const MySkills = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [display, setDisplay] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setDisplay(entry.isIntersecting);
      },
      { opacity: "0" }
    );
    console.log(isIntersecting);
    console.log(display);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div className={classes.container} ref={ref}>
      <h1>MY SKILLS</h1>
      <div className={classes.skills}>
        <Skill
          display={display}
          color="#47d1d1"
          num={85}
          lesson="React js"
        ></Skill>
        <Skill
          display={display}
          color="#99e6e6"
          num={40}
          lesson="Next js"
        ></Skill>
        <Skill
          display={display}
          color="#99cc00"
          num={60}
          lesson="Node js"
        ></Skill>
        <Skill
          display={display}
          color="#006bb3"
          num={30}
          lesson="Figma"
        ></Skill>
      </div>
    </div>
  );
};

export default MySkills;
