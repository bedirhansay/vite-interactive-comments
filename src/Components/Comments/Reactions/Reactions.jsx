import React from "react";
import { Button } from "../../Button/Button";
import styles from "./Reactions.module.scss";
import { useComment } from "../useComments";
export const Reactions = () => {
  const {
    onNegativeReaction,
    onPositiveReaction,
    comment: { score },
  } = useComment();

  return (
    <div className={styles["reaction-wrapper"]}>
      <Button onClick={onPositiveReaction}>
        <img src="./images/icon-plus.svg" alt="" />
      </Button>
      <p>{score}</p>
      <Button onClick={onNegativeReaction}>
        <img src="./images/icon-minus.svg" alt="" />
      </Button>
    </div>
  );
};
