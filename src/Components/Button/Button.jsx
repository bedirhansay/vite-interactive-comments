import React from "react";
import styles from "./Button.module.scss";
import clsx from "clsx";

export const Button = ({ variant = "ghost", children, ...props }) => {
  return (
    <button className={clsx(styles["button"], styles[variant])} {...props}>
      {children}
    </button>
  );
};
