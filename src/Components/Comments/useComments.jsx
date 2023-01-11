import { createContext, useContext } from "react";

const CommentContext = createContext();

const CommentContextProvider = ({ children, data }) => {
  return (
    <CommentContext.Provider value={data}>{children}</CommentContext.Provider>
  );
};

function usecomment() {
  const context = useContext(CommentContext);
}
