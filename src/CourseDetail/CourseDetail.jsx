import React from "react";
import classes from "./CourseDetail.module.css";
import dummyImage from "../dummyImages/dummyBackground.png";
import { Button } from "antd";

export const CourseDetail = () => {
  return (
    <div className={classes.body}>
      <div className={classes.img}>
        <img src={dummyImage} className={classes.image} />
      </div>
      <div className={classes.text}>
        <h2>Name of the Course</h2>
        Starting Date : 1/12/2021
        <br />
        Ending Date : 31/12/2021
        <br />
        Teacher : Teacher Name
        <br />
        Course Fee : 120,000 kyats
        <br />
        <h5>Details</h5>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum eaque
        mollitia recusandae quis, cum quod quos? Consectetur tenetur rem
        adipisci esse quae autem laudantium quia sed libero! In, sequi amet!
        <br />
        <Button type="primary" className={classes.btn}>
          Apply Course
        </Button>
      </div>
    </div>
  );
};
