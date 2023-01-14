import React, { useState } from "react";
import styles from "./newComm.module.scss";
import { Button } from "../Button/Button";
import { TextArea } from "../text-area/text-area";

export const NewComm = ({ isReply = false, image, alt, onClick }) => {
  const [comment, setComment] = useState("");

  const handleCommentChange = ({ target }) => {
    setComment(target.value);
  };

  const handleClick = () => {
    onClick(comment);
    setComment("");
  };
  return (
    <div className={styles["comment-wrapper"]}>
      <img src={image} alt={alt} />
      <TextArea
        value={comment}
        onChange={handleCommentChange}
        placeholder="add comment.."
      />
      <Button onClick={handleClick} variant="primary">
        {isReply ? "REPLY" : "SEND"}
      </Button>
    </div>
  );
};
