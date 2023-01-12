import React from "react";
import { Comment } from "../../Components/Comments/Comments";
import { NewComm } from "../../Components/NewComment/NewComm";
import Data from "../../../data.json";
import { CommentContextProvider } from "../../Components/Comments/useComments";
export const Conv = () => {
  return (
    <div>
      {Data.comments.map((comment) => (
        <CommentContextProvider
          key={comment.id}
          data={{ comment, currentUser: Data.currentUser }}
        >
          <Comment />
        </CommentContextProvider>
      ))}
      <NewComm />
    </div>
  );
};
