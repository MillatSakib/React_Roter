import React from "react";
import { useLoaderData } from "react-router-dom";
import Userscard from "./Userscard";

const Users = () => {
  const users = useLoaderData();

  return (
    <div className="mx-10 my-4">
      <h1>Users {users.length}</h1>
      <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {users.map((user) => (
          <Userscard key={user.id} user={user}></Userscard>
        ))}
      </ul>
    </div>
  );
};

export default Users;
