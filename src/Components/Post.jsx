import React from "react";
import { BsFillTrash3Fill } from "react-icons/bs";

const Post = ({ posts }) => {
  return (
    <>
      {posts.map((feed) => (
        <div className="flex mb-4 mt-6 mx-14 gap-8" key={feed.id}>
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
                <div className="w-1/4 -mr-40 cursor-pointer">
                  <BsFillTrash3Fill />
                </div>
              </div>
              <div className="text-left mt-4">
                <p>{feed.post}</p>
              </div>
            </div>
            <div>
              <p className="text-left mt-2">Like</p>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default Post;
