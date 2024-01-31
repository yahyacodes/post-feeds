import React, { useState } from "react";
import { db } from "../firebase-config";
import { collection, addDoc } from "firebase/firestore";

const Feedback = () => {
  const [post, setPost] = useState([]);
  const postCollectionRef = collection(db, "post_feeds");

  const addPost = async (e) => {
    e.preventDefault();
    await addDoc(postCollectionRef, {
      username: "Noah Brown",
      post_time: "1 minute ago",
      post: post,
      like: false,
    });

    let newData = [
      ...post,
      {
        username: "Noah Brown",
        post_time: "1 minute ago",
        post: post,
        like: false,
      },
    ];
    setPost(newData);
    console.log(newData);
  };

  return (
    <div className="text-left md:mx-14">
      <form onSubmit={addPost}>
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-100 "
        >
          Leave your feedback
        </label>
        <textarea
          id="post"
          rows="4"
          className="block p-2.5 w-full text-sm text-gray-100 bg-gray-900 rounded-lg border border-gray-800"
          placeholder="Write your thoughts here..."
          // value={post}
          onChange={(e) => setPost(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2 me-2 mt-2"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default Feedback;
