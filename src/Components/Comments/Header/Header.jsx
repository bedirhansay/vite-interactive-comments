import React from "react";
import styles from "./Header.module.scss";
import { useComment } from "../useComments";
import { Button } from "../../Button/Button";

export const Header = () => {
  const {
    onEdit,
    onDelete,
    onReply,
    currentUser,
    comment: {
      createdAt,
      user: { image, username },
    },
  } = useComment();

  const owner = currentUser.username === username;

  return (
    <div className={styles["header-wrapper"]}>
      <div className={styles["user-wrapper"]}>
        <img src={image.png} alt="" />
        <h3>{username}</h3>
        {owner && <strong>you</strong>}

        <span>{createdAt}</span>
      </div>
      <div className={styles["button-wrapper"]}>
        {owner ? (
          <>
            <Button onClick={onDelete} variant="warning">
              <img src="./images/icon-delete.svg" alt="" />
              Delete
            </Button>
            <Button variant="edit" onClick={onEdit}>
              <img src="./images/icon-edit.svg" alt="" />
              Edit
            </Button>
          </>
        ) : (
          <Button onClick={onReply}>
            <img src="./images/icon-reply.svg" alt="" />
            Reply
          </Button>
        )}
      </div>
    </div>
  );
};
