import React from "react";
import classes from "./Card.module.css";
import check from "../assets/icons/check.svg";
import { Link } from "react-router-dom";
const Card = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.card}>
        <div className={classes.img}>
          {" "}
          <img src={check} alt="checkIcon" />
        </div>
        <p className={classes.headerText}>Purchase Completed</p>
        <span>
          Please check your email for details concerning this transaction
        </span>
        <Link to="/">Return Home</Link>
      </div>
    </div>
  );
};

export default Card;
