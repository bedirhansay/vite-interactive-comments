import { createContext, useContext, useMemo, useState } from "react";

const CommentContext = createContext();

const CommentContextProvider = ({ children, data }) => {
  const [isReplying, setIsReplying] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [comment, setComment] = useState(data.comment);

  const onReply = () => {
    setIsReplying(!isReplying);
  };

  const onDelete = () => {
    setComment(null);
  };
  const onEdit = () => {
    setIsEditing(!isEditing);
  };

  const onUpdate = (newComment) => {
    setComment({
      ...comment,
      content: newComment,
    });
    onEdit();
  };

  const onNewReply = (content) => {
    setComment({
      ...comment,
      replies: [
        ...(comment.replies ?? []),
        {
          content,
          createdAt: new Date().toLocaleDateString(),
          id: Math.floor(Math.random() * 100),
          user: data.currentUser,
          score: 0,
          replies: [],
          replyingTo: comment.user.username,
        },
      ],
    });

    onReply();
  };

  const onPositiveReaction = () => {
    setComment({
      ...comment,
      score: comment.score + 1,
    });
  };
  const onNegativeReaction = () => {
    setComment({
      ...comment,
      score: comment.score - 1,
    });
  };

  const contextData = useMemo(
    () => ({
      onPositiveReaction,
      onNegativeReaction,
      onNewReply,
      comment,
      currentUser: data.currentUser,
      isEditing,
      isReplying,
      onUpdate,
      onReply,
      onDelete,
      onEdit,
    }),
    [isReplying, isEditing, comment]
  );
  return (
    <CommentContext.Provider value={contextData}>
      {children}
    </CommentContext.Provider>
  );
};

function useComment() {
  const context = useContext(CommentContext);

  if (!context) {
    throw new Error("There is no context before initalize it");
  }
  return context;
}

export { useComment, CommentContextProvider };
