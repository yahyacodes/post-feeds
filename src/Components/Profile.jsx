import React from "react";

const FeedCard = () => {
  return (
    <>
      <div className="max-w-screen-xl px-4 flex-wrap justify-between md:flex md:px-8 lg:flex-nowrap">
        <div className="rounded-lg">
          <div className="max-w-xl px-4 flex-wrap gap-x-2 justify-between items-center md:flex md:px-8 lg:flex-nowrap">
            <div className="w-20 h-20 relative border-4 border-white rounded-full overflow-hidden">
              <img
                className="object-cover object-center h-20"
                src="https://randomuser.me/api/portraits/men/11.jpg"
                alt="Developer profile"
              />
            </div>
            <div className="mt-2 text-left">
              <h2 className="font-semibold">Noah Brown</h2>
              <p className="text-gray-500">Frontend Developer</p>
            </div>
          </div>
        </div>

        <div className="rounded-lg">Active</div>
      </div>
    </>
  );
};

export default FeedCard;
