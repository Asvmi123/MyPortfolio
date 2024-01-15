import React from "react";
import ""


export const Card = ({ users }) => {
  return (
    <div
      style={{
        border: "1px solid black",
        margin: "10px",
        padding: "0px 50px",
        width: "250px",
        backgroundColor: " #d0bdf4",
      }}
    >
      <h3>Id: {users.id}</h3>
      <h3>Name: {users.name}</h3>
      <h3>Email: {users.email}</h3>
    </div>
  );
};

