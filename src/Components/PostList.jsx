import React from "react";
import Post from "./Post";

const PostList = ({ posts, onDeletePost, onUpdatePost }) => {
  return (
    <>
      <div>
        {posts.map((feed) => (
          <Post
            key={feed.id}
            feed={feed}
            onDeletePost={onDeletePost}
            onUpdatePost={onUpdatePost}
          />
        ))}
      </div>
    </>
  );
};

export default PostList;
