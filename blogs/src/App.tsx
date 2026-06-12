import { IoMdAddCircle } from "react-icons/io";
import Navigation from "./components/Navigation";
import PeopleToFollow from "./components/PeopleToFollow";
import TopicsList from "./components/TopicsList";
import TrendsList from "./components/TrendsList";
import { PostContextProvider } from "./context/PostsContextProvider";
import { useState } from "react";
import type { Post } from "./interfaces/Post";
import Modal from "./components/Modal";
import PostForm from "./components/PostForm";
import ArticleList from "./components/ArticleList";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [editingPost, setEditingPost] = useState<Post | null>(null);

  const openModalNewPostForm = () => {
    setEditingPost(null);
    setModalOpen(true);
  };

  const openModalEditPost = (post: Post) => {
    setEditingPost(post);
    setModalOpen(true);
  };

  return (
    <PostContextProvider>
      <Navigation />
      <div className="flex justify-center">
        <main className="mx-auto p-6">
          <div>
            <button
              onClick={openModalNewPostForm}
              className="ml-28 bg-black flex justify-center items-center text-white px-4 py-2 rounded mb-4"
            >
              Add New Post <IoMdAddCircle className="ml-2" />
            </button>

            <ArticleList onEdit={openModalEditPost} />
            {isModalOpen && (
              <Modal onClose={() => setModalOpen(false)}>
                <PostForm
                  existingPost={editingPost}
                  onClose={() => setModalOpen(false)}
                />
              </Modal>
            )}
          </div>
        </main>
        <aside className="w-[30%]">
          <PeopleToFollow />
          <TrendsList />
          <TopicsList />
        </aside>
      </div>
    </PostContextProvider>
  );
}

export default App;
