import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import "./Card.css"


const List = () => {
  const [data, setData] = useState([]);
  const [b, setB] = useState("posts");

  useEffect(() => {
    const dataTatah = async () => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/${b}`);
      console.log(res.data);
      setData(res.data);
    };

    dataTatah();
  }, []);

  console.log("object");

  return (
    <div>
      <button onClick={() => setB("users")}>users</button>
      <button onClick={() => setB("posts")}>posts</button>
      <button onClick={() => setB("photos")}>photos</button>
      {data.length !== 0 ? <p>{JSON.stringify(data[0].title)}</p> : "no datas"}
    </div>
  );
};

export default List;
