import { useState, useEffect } from "react";
import { usePosts } from "../hooks/usePosts";
import type { Post } from "../interfaces/Post";

interface PostFormProps {
  existingPost?: Post | null;
  onClose: () => void;
}

const PostForm = ({ existingPost, onClose }: PostFormProps) => {
  const { addPost, updatePost } = usePosts();
  const [title, setTitle] = useState(existingPost?.title || "");
  const [description, setDescription] = useState(
    existingPost?.description || "",
  );
  const [image, setImage] = useState(existingPost?.image || "");
  const [time, setTime] = useState(existingPost?.time || "");

  useEffect(() => {
    if (existingPost) {
      const setExistingPost = () => {
        setTitle(existingPost.title);
        setDescription(existingPost.description);
        setImage(existingPost.image);
        setTime(existingPost.time);
      };
      setExistingPost();
    }
  }, [existingPost]);

  const handleSubmit = () => {
    const post: Post = {
      id: existingPost ? existingPost.id : Date.now(),
      title,
      description,
      image,
      time,
    };

    if (existingPost) {
      updatePost(post);
    } else {
      addPost(post);
    }

    onClose();
  };

  return (
    <div className="bg-white p-6 rounded-lg  w-120 mx-auto">
      <h3 className="font-semibold text-xl mb-2 text-gray-800">
        {existingPost ? "Edit Post" : "Add Post"}
      </h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black resize-none h-32"
        />
        <input
          type="text"
          placeholder="Image URL"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
        <input
          type="date"
          placeholder="Time"
          value={time}
          onChange={(e) => setTime(e.target.value)}
          className="block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>
      <div className="flex justify-end mt-6 space-x-4">
        <button
          onClick={handleSubmit}
          className="bg-blue-600 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-black"
        >
          {existingPost ? "Update" : "Add"}
        </button>
        <button
          onClick={onClose}
          className="bg-gray-500 text-white px-6 py-2 rounded-lg font-semibold shadow-sm hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500"
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

export default PostForm;
