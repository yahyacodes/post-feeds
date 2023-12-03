import { useEffect, useState } from "react";
import "./App.css";
import Profile from "./Components/Profile";
import FeedContent from "./Components/FeedContent";
import Feedback from "./Components/Feedback";
import Navbar from "./Components/Navbar";
import SideCard from "./Components/SideCard";
import PostList from "./Components/PostList";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/post_feeds")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const addPost = (newPost) => {
    const updatedPosts = [...data, newPost];
    setData(updatedPosts);
  };

  const deletePost = (id) => {
    const updatedPosts = data.filter((post) => post.id !== id);
    setData(updatedPosts);
  };

  const updatePost = (id, like) => {
    const updatedPosts = data.map((post) => {
      if (post.id === id) {
        return [...post, like];
      } else {
        return post;
      }
    });
  };

  return (
    <>
      <Navbar />
      <div className="card-elements mb-4">
        <div className="max-w-screen-xl mx-auto px-4 flex-wrap justify-between md:flex md:px-8 lg:flex-nowrap mt-6">
          <div className="flex-none w-64 h-5/6">
            <SideCard />
          </div>

          <div className="flex-none w-9/12 text-white mx-auto lg:mt-0 bg-gray-900 rounded-lg p-8">
            <Profile />
            <FeedContent />
            <div className="border-gray-800 border-t mt-10 mb-10"></div>
            <Feedback onAddPost={addPost} />

            <PostList
              posts={data}
              onDeletePost={deletePost}
              onUpdatePost={updatePost}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
