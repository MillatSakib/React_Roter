import React from "react";
import { Link } from "react-router-dom";
import { useLoaderData } from "react-router-dom";

const UserDetails = () => {
  const userDetails = useLoaderData();
  const { name, email, phone, username, website, company, address } =
    userDetails;
  return (
    <div className="border-2 rounded-lg p-6 border-yellow-300">
      <h3 className="text-2xl font-bold text-center">{name}</h3>
      <div className="font-bold text-center">Email: {email}</div>
      <div className="font-bold text-center">Username: {username}</div>
      <div className="font-bold text-center">Address: {address.city}</div>
      <div className="font-bold text-center">Zipcode: {address.zipcode}</div>
      <div className="font-bold text-center">Company: {company.name}</div>
      <div className="font-bold text-center">
        Website: <a href="{website}">{website}</a>
      </div>
      <div className="font-bold text-center">Phone: {phone}</div>
      <Link to="/users">
        <button
          type="button"
          className="btn btn-success mt-4 w-full text-white"
        >
          Go Back
        </button>
      </Link>
    </div>
  );
};

export default UserDetails;
