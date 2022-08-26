import React from "react";
import classes from "./Layout.module.css";

const BodyWrapper = ({ children, headerText, action }) => {
  return (
    <div className={classes.wrapper}>
        <div className={classes.innerWrapper}></div>
        <div className={classes.bbody}>
      <h1 className={classes.headerText}>{headerText}</h1>
      <div className={classes.body}>{children}</div>
      <div className={classes.action}>{action}</div></div>
    </div>
  );
};

export default BodyWrapper;
