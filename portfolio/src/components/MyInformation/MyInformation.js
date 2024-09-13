import React from "react";
import MyIMG from "../../images/my_image.jpg";
import classes from "./MyInformation.module.scss";
import { useState, useRef, useEffect } from "react";

const MyInformation = () => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [slideIn, setSlideIn] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setSlideIn(entry.isIntersecting);
      },
      { rootMargin: "-300px" }
    );
    console.log(isIntersecting);
    console.log(slideIn);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  return (
    <div className={classes.conrainer} ref={ref}>
      <div className={`${classes.myImage} ${slideIn && classes.slideIn}`}>
        <img src={MyIMG}></img>
      </div>
      <div className={`${classes.info} ${slideIn && classes.slideIn}`}>
        <h1>I'm Zahra Amirinezhad</h1>
        <h2>Web Developer</h2>
        <p>
          Hello, I’m Zahra, a passionate web developer specializing in React
          Framework for FrontEnd and NodeJs for BackEnd with 2 years of
          experience in the field.
        </p>
        <h3>Happy to build your website :)</h3>
      </div>
    </div>
  );
};

export default MyInformation;
