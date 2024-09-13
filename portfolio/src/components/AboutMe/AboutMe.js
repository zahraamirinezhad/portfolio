import React, { useState } from "react";
import classes from "./AboutMe.module.scss";
import copy from "copy-to-clipboard";
import { SuccessAction, Error } from "..";

const AboutMe = () => {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const copyToClipboard = (copyStr) => {
    try {
      copy(copyStr);
      setSuccess(true);
    } catch (e) {
      setError(true);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.title}>
        <h1>ABOUT ME</h1>
        <h2>ABOUT ME</h2>
      </div>
      <div className={classes.personalInfo}>
        <div className={classes.info}>
          <p>
            First Name : <span>Zahra</span>
          </p>
        </div>
        <div className={classes.info}>
          <p>
            Last Name : <span>Amirinezhad</span>
          </p>
        </div>
        <div className={classes.info}>
          <p>
            Age : <span>22</span>
          </p>
        </div>
        <div
          className={`${classes.info} ${classes.btn}`}
          onClick={() => {
            copyToClipboard("09933502214");
          }}
        >
          <p>
            Phone Number : <span>09933502214</span>
          </p>
        </div>
        <div
          className={`${classes.info} ${classes.btn}`}
          onClick={() => {
            copyToClipboard("@ZahraAmirinezhad");
          }}
        >
          <p>
            Telegram ID : <span>@ZahraAmirinezhad</span>
          </p>
        </div>
        <div
          className={`${classes.info} ${classes.btn}`}
          onClick={() => {
            copyToClipboard("zahraamiri1381216@gmail.com");
          }}
        >
          <p>
            Gmail : <span>zahraamiri1381216@gmail.com</span>
          </p>
        </div>
      </div>

      <Error error={error} setError={setError} text={"خطا در کپی اطلاعات"} />
      <SuccessAction
        success={success}
        setSuccess={setSuccess}
        text={"اطلاعات با موفقیت کپی شد"}
      />
    </div>
  );
};

export default AboutMe;
