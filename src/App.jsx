import "./App.css";
import FeedCard from "./Components/Profile";
import FeedContent from "./Components/FeedContent";
import Feedback from "./Components/Feedback";
import Navbar from "./Components/Navbar";
import SideCard from "./Components/SideCard";

function App() {
  return (
    <>
      <Navbar />
      <div className="card-elements">
        <div className="max-w-screen-xl mx-auto px-4 flex-wrap justify-between md:flex md:px-8 lg:flex-nowrap mt-6">
          <div className="flex-none w-64 h-5/6">
            <SideCard />
          </div>

          <div className="flex-none w-9/12 text-white mx-auto lg:mt-0 bg-gray-900 rounded-lg p-8">
            <FeedCard />
            <FeedContent />
            <div className="border-gray-800 border-t mt-10 mb-10"></div>
            <Feedback />

            <div className="flex mb-4 mt-4 mx-14 gap-8">
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
                <div className="bg-gray-800 rounded-lg p-8">
                  <div className="flex">
                    <div className="w-1/4 text-left">
                      <h2 className="font-semibold">Noah Brown</h2>
                      <p className="text-gray-500 text-sm">4 minutes ago</p>
                    </div>
                    <div className="w-3/4"></div>
                    <div className="w-1/4">
                      <p>Delete</p>
                    </div>
                  </div>
                  <div className="text-left mt-4">
                    <p>
                      I'm a dynamic and detail-oriented Frontend Developer with
                      2 years of experience in creating and implementing
                      innovative web designs and user experiences.
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-left mt-2">Like</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
