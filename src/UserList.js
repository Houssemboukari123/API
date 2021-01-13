import axios from "axios";
import React, { useEffect, useState } from "react";
import UserCard from "./UserCard";

const UserList = () => {
  const [list, setList] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.data)
      .then((res) => {
        setList(res);
        console.log(list);
        setIsLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      {!isLoading ? (
        <UserCard list={list} />
      ) : (
        <h4 style={{ textAlign: "center" }}>LOADING!!!</h4>
      )}
    </div>
  );
};
export default UserList;
