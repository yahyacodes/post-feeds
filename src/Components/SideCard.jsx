import React from "react";

const SideCard = () => {
  return (
    <>
      <div className="max-w-xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto rounded-lg md:mx-auto lg:mx-auto xl:mx-auto bg-gray-900 text-white">
        <div className="rounded-lg h-32 overflow-hidden">
          <img
            className="object-cover object-top w-full"
            src="https://cdn.shopify.com/s/files/1/0306/6419/6141/articles/coding_languages.png?v=1619126283"
            alt="Mountain"
          />
        </div>
        <div className="mx-auto w-20 h-20 relative -mt-12 border-4 border-white rounded-full overflow-hidden">
          <img
            className="object-cover object-center h-20"
            src="https://randomuser.me/api/portraits/men/11.jpg"
            alt="Developer profile"
          />
        </div>
        <div className="text-center mt-2">
          <h2 className="font-semibold">Noah Brown</h2>
          <p className="text-gray-500">Frontend Developer</p>
        </div>
        <div className="p-4 border-gray-800 border-t mx-8 mt-12"></div>
      </div>
    </>
  );
};

export default SideCard;
