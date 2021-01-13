import React from "react";

const UserCard = ({ list }) => {
  return (
    <div style={{ margin: "30px" }}>
      <div striped bordered hover>
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>User Name</th>
            <th>Email</th>
          </tr>
        </thead>
        {list.map((item, key) => (
          <tbody>
            <tr style={{ textAlign: "center" }}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>@{item.username}</td>
              <td>{item.email}</td>
            </tr>
          </tbody>
        ))}
      </div>
    </div>
  );
};

export default UserCard;
