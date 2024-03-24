import React from "react";
import { Link } from "react-router-dom";

const Userscard = ({ user }) => {
  const name = user.name;
  const mail = user.email;
  const phone = user.phone;
  let link = "/users/" + user.id;

  return (
    <div className="border-2 rounded-lg p-6 border-yellow-300">
      <h3 className="text-2xl font-bold text-center">{name}</h3>
      <div className="font-bold text-center">Email: {mail}</div>
      <div className="font-bold text-center">Phone: {phone}</div>
      <Link to={link}>
        <button
          type="button"
          className="btn btn-success mt-4 w-full text-white"
        >
          Show More
        </button>
      </Link>
    </div>
  );
};

export default Userscard;
