import React, { useState } from "react";

const Feedback = ({ onAddPost }) => {
  const [post, setPost] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const postObj = {
      post: post,
    };

    fetch("http://localhost:3000/post_feeds", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postObj),
    })
      .then((res) => res.json())
      .then((data) => onAddPost(data));
    setPost();
  };

  return (
    <div className="text-left mx-14">
      <form onSubmit={handleSubmit}>
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
          value={post}
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
