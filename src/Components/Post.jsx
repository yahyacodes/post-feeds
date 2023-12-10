import React, { useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";

const Post = ({ feed, onDeletePost, onUpdatePost }) => {
  const [iconColor, setIconColor] = useState("text-gray-100");
  const { id } = feed;

  const handleDelete = () => {
    fetch(`http://localhost:3000/post_feeds/${id}`, {
      method: "DELETE",
    });

    onDeletePost(id);
  };

  const handleUpdate = () => {
    fetch(`http://localhost:3000/post_feeds/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ like: true }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    setIconColor(
      iconColor === "text-gray-100" ? "text-green-500" : "text-gray-100"
    );
  };

  return (
    <>
      <div className="flex mb-4 mt-6 md:mx-14 md:gap-8 sm:gap-4">
        <div className="md:w-1/12 sm:w-1/1 sm:mx-auto">
          <div className="w-20 h-20 block relative border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center"
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="Developer profile"
            />
          </div>
        </div>

        <div className="md:w-11/12 sm:w-1/1 sm:mx-auto">
          <div className="bg-gray-800 rounded-lg p-8 mb-4">
            <div className="flex">
              <div className="w-1/4 text-left">
                <h2 className="font-semibold">{feed.username}</h2>
                <p className="text-gray-500 text-sm">{feed.post_time}</p>
              </div>
              <div className="w-3/4"></div>
              <div className="w-1/4 lg:-mr-40 md:-mr-24 cursor-pointer hover:text-red-600">
                <BsFillTrash3Fill onClick={handleDelete} />
              </div>
            </div>
            <div className="text-left mt-4">
              <p>{feed.post}</p>
            </div>
          </div>
          <div className={`cursor-pointer ${iconColor}`}>
            <BiSolidLike onClick={handleUpdate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
