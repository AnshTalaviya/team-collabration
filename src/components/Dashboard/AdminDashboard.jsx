import React, { useState, useEffect } from 'react';
import UserList from './UserList'; 
import TaskManagement from './TaskManagement'; 

const AdminDashboard = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    
    const storedUsers = JSON.parse(localStorage.getItem('users')) || [];
    setUsers(storedUsers);
  }, []);

  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <div className="row">
        <div className="col-md-6">
          <h3>User Management</h3>
          <UserList users={users} />
        </div>
        <div className="col-md-6">
          <h3>Task Management</h3>
          <TaskManagement users={users} />
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
