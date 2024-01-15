import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card } from "./Card";


export const UseEffect = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    // data tatah
    const fetchData = async () => {
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");

      setUsers(res.data);
    };
    fetchData();
  }, []);
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      {users.length !== 0
        ? users.map((el) => <Card key={el.id} users={el}  />)
        : "Not found"}
    </div>
  );
};
