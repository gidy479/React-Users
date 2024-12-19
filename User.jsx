import React from "react";

function Users({ users }) {
  return (
    <ul className="flex  gap-1 ">
      {users.map((user, index) => (
        <li key={index} className="bg-purple-100 shadow-xl p-4 rounded-lg m-10 ">
          <p>Name: {user.name}</p>
          <p>Email: {user.email}</p>
          <p>Gen: {user.gen}</p>
        </li>
      ))}
    </ul>
  );
}

export default Users;
