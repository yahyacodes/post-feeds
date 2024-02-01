import React, { useState } from "react";

const Feedback = ({ addPost }) => {
  const [post, setPost] = useState([]);

  return (
    <div className="text-left md:mx-14">
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
        onClick={addPost}
        className="text-white bg-gray-800 font-medium rounded-lg text-sm px-5 py-2 me-2 mt-2"
      >
        Post
      </button>
    </div>
  );
};

export default Feedback;
