import React from "react";
import { Comment } from "../../Components/Comments/Comments";
import { NewComm } from "../../Components/NewComment/NewComm";
import Data from "../../../data.json";
export const Conv = () => {
  return (
    <div>
      {Data.comments.map((comment) => (
        <Comment key={comment.id} data={comment} />
      ))}
      <NewComm />
    </div>
  );
};
