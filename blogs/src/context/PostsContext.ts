import { createContext } from "react";
import type { Post } from "../interfaces/Post";

interface PostsContextInterface {
  posts: Post[];
  addPost: (post: Post) => void;
  updatePost: (post: Post) => void;
  deletePost: (id: number) => void;
}

export const PostsContext = createContext<PostsContextInterface | null>(null);