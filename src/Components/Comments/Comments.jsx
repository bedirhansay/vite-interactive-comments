import React from "react";
import { Reactions } from "./Reactions/Reactions";
import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
import { useComment, CommentContextProvider } from "./useComments";
import { NewComm } from "../NewComment/NewComm";
import styles from "./Comments.module.scss";

export const Comment = () => {
  const { isReplying, currentUser, comment, onNewReply } = useComment();

  if (!comment) {
    return null;
  }
  return (
    <>
      <div className={styles["comment-wrapper"]}>
        <Reactions />
        <div className={styles["comment-area"]}>
          <Header />
          <Body />
        </div>
      </div>
      {comment?.replies?.length > 0 && (
        <div className={styles["comments"]}>
          {comment?.replies?.map((reply) => (
            <CommentContextProvider
              key={reply.id}
              data={{ comment: reply, currentUser }}
            >
              <Comment />
            </CommentContextProvider>
          ))}
        </div>
      )}
      {isReplying && (
        <NewComm onClick={onNewReply} isReply image={currentUser.image.png} />
      )}
    </>
  );
};
