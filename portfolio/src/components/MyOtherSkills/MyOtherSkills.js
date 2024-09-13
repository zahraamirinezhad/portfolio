import React from "react";
import OtherSkill from "../OtherSkill/OtherSkill";
import classes from "./MyOtherSkills.module.scss";
import { useState, useRef, useEffect } from "react";

const MyOtherSkills = () => {
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
      <h1>MY OTHER SKILLS</h1>
      <div className={classes.skills}>
        <OtherSkill
          display={display}
          color="#04fc43"
          num={`90%`}
          lesson="HTML"
        />
        <OtherSkill
          display={display}
          color="#1a1aff"
          num={`80%`}
          lesson="CSS"
        />
        <OtherSkill
          display={display}
          color="#ffff00"
          num={`60%`}
          lesson="Javascript"
        />
        <OtherSkill
          display={display}
          color="#ff4d4d"
          num={`85%`}
          lesson="Material UI"
        />
        <OtherSkill
          display={display}
          color="#e600e6"
          num={`85%`}
          lesson="Bootstrap"
        />
        <OtherSkill
          display={display}
          color="#29a3a3"
          num={`80%`}
          lesson="Tailwind"
        />
        <OtherSkill
          display={display}
          color="#ff4d4d"
          num={`75%`}
          lesson="Materialize"
        />
        <OtherSkill
          display={display}
          color="#00e600"
          num={`65%`}
          lesson="Mongo db"
        />
        <OtherSkill
          display={display}
          color="#1aa3ff"
          num={`90%`}
          lesson="Postgresql"
        />
        <OtherSkill
          display={display}
          color="#ff3300"
          num={`65%`}
          lesson="Git"
        />
        <OtherSkill
          display={display}
          color="#ffcc00"
          num={`60%`}
          lesson="Java"
        />
        <OtherSkill
          display={display}
          color="#ff3300"
          num={`40%`}
          lesson="Kotlin"
        />
      </div>
    </div>
  );
};

export default MyOtherSkills;
