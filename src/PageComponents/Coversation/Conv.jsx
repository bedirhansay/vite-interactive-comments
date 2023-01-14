import React, { useState } from "react";
import { Comment } from "../../Components/Comments/Comments";
import { NewComm } from "../../Components/NewComment/NewComm";
import Data from "../../../data.json";
import { CommentContextProvider } from "../../Components/Comments/useComments";

import styles from "./conv.module.scss";

export const Conv = () => {
  const [comments, setComments] = useState(Data.comments);

  const handleNewComment = (newComment) => {
    setComments([
      ...comments,
      {
        content: newComment,
        createdAt: new Date().toLocaleDateString(),
        id: Math.floor(Math.random() * 100),
        user: Data.currentUser,
        score: 0,
        replies: [],
      },
    ]);
  };
  return (
    <div className={styles["conv-wrapper"]}>
      {comments.map((comment) => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentContextProvider>
      ))}
      <NewComm
        onClick={handleNewComment}
        image={Data.currentUser.image.png}
        alt={Data.currentUser.username}
      />
    </div>
  );
};
