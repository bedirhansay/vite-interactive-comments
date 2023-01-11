import React from "react";
import { Reactions } from "./Reactions/Reactions";
import { Header } from "./Header/Header";
import { Body } from "./Body/Body";
export const Comment = () => {
  return (
    <div>
      <Reactions />
      <Header />
      <Body />
    </div>
  );
};
