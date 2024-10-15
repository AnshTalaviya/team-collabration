import React from 'react';

const TaskManagement = ({ users }) => {
  return (
    <div>
     
      {users.map((user) => (
        <div key={user.email} className="mb-3">
          <h5>{user.username}'s Tasks</h5>
          
          <p>No tasks available for this user.</p>
        </div>
      ))}
    </div>
  );
};

export default TaskManagement;
