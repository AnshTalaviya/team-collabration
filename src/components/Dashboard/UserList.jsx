import React from 'react';

const UserList = ({ users }) => {
  return (
    <ul className="list-group">
      {users.map((user, index) => (
        <li key={index} className="list-group-item d-flex justify-content-between align-items-center">
          {user.username} - {user.email}
          
        </li>
      ))}
    </ul>
  );
};

export default UserList;
