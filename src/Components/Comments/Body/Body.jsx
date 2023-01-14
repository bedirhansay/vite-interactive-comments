import React, { useState } from "react";
import { useComment } from "../useComments";
import styles from "./body.module.scss";
import { TextArea } from "../../text-area/text-area";
import { Button } from "../../Button/Button";

export const Body = () => {
  const {
    onUpdate,
    isEditing,
    comment: { content, replyingTo },
  } = useComment();

  const [comment, setComment] = useState(content);

  const handleCommentChange = ({ target }) => {
    setComment(target.value);
  };

  const handleUpdate = () => {
    onUpdate(comment);
  };
  return (
    <div className={styles["body-wrapper"]}>
      {isEditing ? (
        <>
          <TextArea
            value={comment}
            onChange={handleCommentChange}
            placeholder="add Comment"
          />
          <Button onClick={handleUpdate} variant="primary">
            Update
          </Button>
        </>
      ) : (
        <p>
          {replyingTo && <span>@{replyingTo}&nbsp;</span>}
          {content}
        </p>
      )}
    </div>
  );
};
