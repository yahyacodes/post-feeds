import { useEffect, useState } from "react";
import "./App.css";
import FeedCard from "./Components/Profile";
import FeedContent from "./Components/FeedContent";
import Feedback from "./Components/Feedback";
import Navbar from "./Components/Navbar";
import SideCard from "./Components/SideCard";
import Post from "./Components/Post";

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/post_feeds")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <>
      <Navbar />
      <div className="card-elements mb-4">
        <div className="max-w-screen-xl mx-auto px-4 flex-wrap justify-between md:flex md:px-8 lg:flex-nowrap mt-6">
          <div className="flex-none w-64 h-5/6">
            <SideCard />
          </div>

          <div className="flex-none w-9/12 text-white mx-auto lg:mt-0 bg-gray-900 rounded-lg p-8">
            <FeedCard />
            <FeedContent />
            <div className="border-gray-800 border-t mt-10 mb-10"></div>
            <Feedback />

            <Post posts={data} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
