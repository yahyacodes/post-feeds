import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiLike } from "react-icons/bi";

const Post = ({ feed, onDeletePost, onUpdatePost }) => {
  const { post, id, like } = feed;

  const handleDelete = () => {
    fetch(`http://localhost:3000/post_feeds/${id}`, {
      method: "DELETE",
    });

    onDeletePost(id);
  };

  const handleUpdate = (like) => {
    fetch(`http://localhost:3000/post_feeds/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ feed: { like: like } }),
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <>
      <div className="flex mb-4 mt-6 mx-14 gap-8">
        <div className="w-1/12">
          <div className="w-20 h-20 relative border-4 border-white rounded-full overflow-hidden">
            <img
              className="object-cover object-center h-20"
              src="https://randomuser.me/api/portraits/men/11.jpg"
              alt="Developer profile"
            />
          </div>
        </div>
        <div className="w-11/12">
          <div className="bg-gray-800 rounded-lg p-8 mb-4">
            <div className="flex">
              <div className="w-1/4 text-left">
                <h2 className="font-semibold">{feed.username}</h2>
                <p className="text-gray-500 text-sm">{feed.post_time}</p>
              </div>
              <div className="w-3/4"></div>
              <div className="w-1/4 -mr-40 cursor-pointer hover:text-red-600">
                <BsFillTrash3Fill onClick={handleDelete} />
              </div>
            </div>
            <div className="text-left mt-4">
              <p>{feed.post}</p>
            </div>
          </div>
          <div className="cursor-pointer">
            <BiLike onClick={handleUpdate} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
