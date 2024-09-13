import React from "react";
import classes from "./Skill.module.scss";

const Skill = ({ display, lesson, num, color }) => {
  return (
    <div className={classes.card}>
      <div className={classes.percent} style={{ "--clr": color, "--num": num }}>
        <div className={`${classes.dot} ${display && classes.display}`}></div>
        <svg>
          <circle cx={70} cy={70} r={70}></circle>
          <circle
            className={`${display && classes.display}`}
            cx={70}
            cy={70}
            r={70}
          ></circle>
        </svg>
        <div className={`${classes.number} ${display && classes.display}`}>
          <h2>
            {num}
            <span>%</span>
          </h2>
          <p>{lesson}</p>
        </div>
      </div>
    </div>
  );
};

export default Skill;
