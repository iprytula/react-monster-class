import React, { useEffect, useState } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const posts = await fetch(
      "https://jsonplaceholder.typicode.com/posts",
    ).then((data) => data.json());

    setPosts(posts);
  };

  useEffect(() => {
    console.log("Fetching posts...");
    return fetchPosts;
  }, []);

  return (
    <ul className="posts">
      {posts.map((post) => (
        <li key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </li>
      ))}
    </ul>
  );
};

export default FetchDataEffect;
