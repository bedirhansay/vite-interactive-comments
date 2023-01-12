import { createContext, useContext } from "react";

const CommentContext = createContext();

const CommentContextProvider = ({ children, data }) => {
  return (
    <CommentContext.Provider value={data}>{children}</CommentContext.Provider>
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
