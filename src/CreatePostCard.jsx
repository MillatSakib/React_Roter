import React from "react";

const CreatePostCard = ({ post }) => {
  const { userId, title, body } = post;
  return (
    <div className="border-2 rounded-lg p-6 border-yellow-300 mt-4">
      <h3 className="text-2xl font-bold text-center">{title}</h3>
      <div className="font-bold text-center">User Id: {userId}</div>
      <div className="font-bold text-center">{body}</div>
    </div>
  );
};

export default CreatePostCard;
