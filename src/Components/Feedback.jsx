import React from "react";

const Feedback = () => {
  return (
    <div className="text-left mx-14">
      <label
        htmlFor="message"
        className="block mb-2 text-sm font-medium text-gray-100 "
      >
        Leave your feedback
      </label>
      <textarea
        id="message"
        rows="4"
        className="block p-2.5 w-full text-sm text-gray-100 bg-gray-900 rounded-lg border border-gray-800"
        placeholder="Write your thoughts here..."
      ></textarea>
    </div>
  );
};

export default Feedback;
