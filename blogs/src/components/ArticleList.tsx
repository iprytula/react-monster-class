import { usePosts } from "../hooks/usePosts";
import type { Post } from "../interfaces/Post";
import ArticleCard from "./ArticleCard";

interface ArticleListProps {
  onEdit: (post: Post) => void;
}

const ArticleList = ({ onEdit }: ArticleListProps) => {
  const { posts, deletePost } = usePosts();

  return (
    <div className="ml-20">
      {posts.map((post) => (
        <ArticleCard
          key={post.id}
          article={post}
          onDelete={() => deletePost(post.id)}
          onEdit={() => onEdit(post)}
        />
      ))}
    </div>
  );
};

export default ArticleList;