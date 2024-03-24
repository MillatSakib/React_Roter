import React from "react";
import { useLoaderData } from "react-router-dom";
import CreatePostCard from "./CreatePostCard";

const Posts = () => {
  const postDasta = useLoaderData();
  return (
    <div>
      {postDasta.map((post, index) => (
        <CreatePostCard key={index} post={post}></CreatePostCard>
      ))}
    </div>
  );
};

export default Posts;
