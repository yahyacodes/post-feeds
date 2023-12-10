import React, { useState } from "react";

const Profile = () => {
  const [show, setShow] = useState(false);

  const handleChangeColor = (event) => {
    setShow(event.target.value !== "");
    console.log("Button clicked");
  };

  return (
    <>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-4/12 md:w-4/12 lg:w-5/12 xl:w-5/12">
          <div className="flex flex-wrap">
            <div className="w-full sm:w-4/12 md:w-4/12 lg:w-5/12 xl:w-5/12 px-4">
              <div className="w-20 h-20 relative border-4 border-white rounded-full overflow-hidden">
                <img
                  className="object-cover object-center"
                  src="https://randomuser.me/api/portraits/men/11.jpg"
                  alt="Developer profile"
                />
              </div>
            </div>

            <div className="w-full sm:w-9/12 md:w-9/12 lg:w-7/12 xl:w-7/12 mt-4 text-left">
              <h2 className="font-semibold">Noah Brown</h2>
              <p className="text-gray-500">Frontend Developer</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
