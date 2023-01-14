import React from "react";
import styles from "./text-area.module.scss";

export const TextArea = ({ ...props }) => {
  return (
    <div>
      <textarea
        className={styles["textArea"]}
        {...props}
        name="comment"
        cols={100}
        rows={4}
      ></textarea>
    </div>
  );
};
