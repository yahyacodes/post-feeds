import React, { useState } from "react";

const FeedCard = () => {
  const [show, setShow] = useState(false);

  const handleChangeColor = (event) => {
    setShow(event.target.value !== "");
    console.log("Button clicked");
  };

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

        <div className="rounded-lg">
          <select
            id="underline_select"
            className={`block py-2.5 px-0 w-full text-sm ${
              !show ? "text-green-500" : "text-red-500"
            } bg-transparent border-none p-2.5`}
            onChange={handleChangeColor}
          >
            <option value="Acitve">Active</option>
            <option value="Do not disturp">Do not disturp</option>
            <option value="Away">Set as a way</option>
          </select>
        </div>
      </div>
    </>
  );
};

export default FeedCard;
