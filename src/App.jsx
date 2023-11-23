import "./App.css";
import Navbar from "./Components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="card-elements">
        <div className="max-w-screen-xl mx-auto px-4 flex-wrap justify-between md:flex md:px-8 lg:flex-nowrap mt-6">
          <div className="flex-none w-64 h-5/6">
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
                  src="https://xsgames.co/randomusers/avatar.php?g=male"
                  alt="Developer profile"
                />
              </div>
              <div className="text-center mt-2">
                <h2 className="font-semibold">Noah Brown</h2>
                <p className="text-gray-500">Frontend Developer</p>
              </div>
              <div className="p-4 border-gray-800 border-t mx-8 mt-12">
                <button className="px-6 py-1.5 text-sm text-gray-100 duration-100 border rounded-lg hover:border-indigo-600 active:shadow-lg">
                  Edit profile
                </button>
              </div>
            </div>
          </div>

          <div className="flex-none w-9/12 text-white mx-auto lg:mt-0 bg-gray-900 rounded-lg p-8">
            <div className="max-w-screen-xl px-4 flex-wrap justify-between md:flex md:px-8 lg:flex-nowrap">
              <div className="rounded-lg">
                <div className="max-w-xl px-4 flex-wrap gap-x-2 justify-between items-center md:flex md:px-8 lg:flex-nowrap">
                  <div className="w-20 h-20 relative border-4 border-white rounded-full overflow-hidden">
                    <img
                      className="object-cover object-center h-20"
                      src="https://xsgames.co/randomusers/avatar.php?g=male"
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

            <div className="mt-6 mx-14 text-left">
              <h3 className="font-semibold mb-2">Hey Guys... 👋</h3>
              <p className="font-light">
                I'm a dynamic and detail-oriented Frontend Developer with 2
                years of experience in creating and implementing innovative web
                designs and user experiences.
              </p>

              <div className="border-gray-800 border-t mt-10 mb-10"></div>

              <label
                for="message"
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

              <div className="grid grid-cols-2 gap-2">
                <div className="w-20 h-20 relative border-4 border-white rounded-full overflow-hidden">
                  <img
                    className="object-cover object-center h-20"
                    src="https://xsgames.co/randomusers/avatar.php?g=male"
                    alt="Developer profile"
                  />
                </div>
              </div>

              <div className="rouded-lg">
                <label
                  for="message"
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
