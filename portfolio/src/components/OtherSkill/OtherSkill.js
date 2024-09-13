import React from "react";
import classes from "./OtherSkill.module.scss";

const OtherSkill = ({ display, lesson, num, color }) => {
  return (
    <div className={classes.container}>
      <div className={classes.skillBox}>
        <span className={classes.title}>{lesson}</span>
        <div className={classes.skillBar}>
          <span
            className={`${classes.skillPer} ${classes.lesson} ${
              display && classes.display
            }`}
            style={{ "--clr": color, "--num": num }}
          >
            <span className={classes.tooltip}>{num}%</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default OtherSkill;
