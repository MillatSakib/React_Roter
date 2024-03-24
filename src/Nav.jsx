import React from "react";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className="flex gap-4 bg-yellow-300 justify-evenly">
      <Link to="/">Home</Link>
      <Link to="/users">Users</Link>
      <Link to="/about">About us</Link>
      <Link to="/contact">Contact</Link>
    </div>
  );
};

export default Nav;
