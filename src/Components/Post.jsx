import React, { useEffect, useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import Modal from "./Modal";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  addDoc,
} from "firebase/firestore";

const Post = () => {
  const [data, setData] = useState([]);
  const [post, setPost] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const postCollectionRef = collection(db, "post_feeds");

  const addPost = async (e) => {
    await addDoc(postCollectionRef, {
      username: "Noah Brown",
      post_time: "1 minute ago",
      post: post,
      like: false,
    });

    let newData = [
      ...data,
      {
        username: "Noah Brown",
        post_time: "1 minute ago",
        post: post,
        like: false,
      },
    ];
    setData(newData);
    console.log(newData);
  };

  useEffect(() => {
    const getPosts = async () => {
      const data = await getDocs(postCollectionRef);
      setData(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    getPosts();
  }, []);

  const handleDeletePost = async (id) => {
    const deletePost = doc(db, "post_feeds", id);
    await deleteDoc(deletePost);
    let remaining = data.filter((item) => item.id !== id);
    setData(remaining);
  };

  const handleFormReload = (e) => {
    e.preventDefault();
    setShowModal(false);
  };

  return (
    <>
      <button
        className="text-right py-1.5 px-10 whitespace-nowrap flex items-center 
              gap-x-0 font-medium text-gray-100 bg-blue-400 rounded-md cursor-pointer"
        onClick={() => setShowModal(true)}
      >
        Create Post
      </button>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
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
                      <h2 className="font-semibold">{post.username}</h2>
                      <p className="text-gray-500 text-sm">{post.post_time}</p>
                    </div>
                    <div className="w-3/4"></div>
                    <div className="w-1/4 lg:-mr-40 md:-mr-24 cursor-pointer hover:text-red-600">
                      <BsFillTrash3Fill
                        onClick={() => {
                          handleDeletePost(post.id);
                        }}
                      />
                    </div>
                  </div>
                  <div className="text-left mt-4">
                    <p>{post.post}</p>
                  </div>
                </div>
                <div className={`cursor-pointer`}>
                  <BiSolidLike />
                </div>
              </div>
            </div>
          </li>
        ))}
      </ul>

      <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
        <div className="bg-gray-900 rounded-xl p-8">
          <form className="space-y-6" onSubmit={handleFormReload}>
            <label
              htmlFor="message"
              className="block mb-2 text-sm font-medium text-gray-100 "
            >
              Leave your feedback
            </label>
            <textarea
              id="post"
              rows="4"
              className="block p-2.5 w-full text-sm text-gray-100 bg-gray-900 rounded-lg border border-gray-800"
              placeholder="Write your thoughts here..."
              onChange={(e) => setPost(e.target.value)}
            ></textarea>
            <button
              onClick={addPost}
              className="text-white bg-blue-400 font-medium w-full rounded-lg text-sm px-5 py-2 me-2 mt-2"
            >
              Post
            </button>
          </form>
        </div>
      </Modal>
    </>
  );
};

export default Post;
