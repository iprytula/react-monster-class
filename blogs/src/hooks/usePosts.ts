import { use } from "react";
import { PostsContext } from "../context/PostsContext";

export const usePosts = () => {
  const context = use(PostsContext);

  if (!context) {
    throw new Error("This hook must be used only in post context");
  }

  return context;
}