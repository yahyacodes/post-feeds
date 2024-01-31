import React, { useEffect, useState } from "react";
import { BsFillTrash3Fill } from "react-icons/bs";
import { BiSolidLike } from "react-icons/bi";
import { db } from "../firebase-config";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";

const Post = () => {
  const [data, setData] = useState([]);
  const [changeColor, setChangeColor] = useState();

  const postCollectionRef = collection(db, "post_feeds");

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

  return (
    <>
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
    </>
  );
};

export default Post;
