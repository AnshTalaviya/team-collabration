import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';
import TaskForm from '../Tasks/TaskForm';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Dashboard.css';

const Dashboard = () => {
  const { user } = useContext(AuthContext);
  
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem('tasks');
    return storedTasks ? JSON.parse(storedTasks) : [];
  });
  
  const [filter, setFilter] = useState({ status: '', priority: '', dueDate: '' });

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({ ...prev, [name]: value }));
  };

  const filteredTasks = tasks.filter(task => {
    const matchesStatus = filter.status ? task.status === filter.status : true;
    const matchesPriority = filter.priority ? task.priority === filter.priority : true;
    const matchesDueDate = filter.dueDate ? task.dueDate === filter.dueDate : true;
    return matchesStatus && matchesPriority && matchesDueDate;
  });

  const addTask = (newTask) => {
    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    toast.success('Task added successfully!'); 
  };

  const updateTask = (updatedTask) => {
    const updatedTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    toast.info('Task updated successfully!'); 
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    toast.error('Task deleted successfully!'); 
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem('tasks');
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  return (
    <div className="container mt-5">
      <header className="mb-4">
        <h1 className="text-center">Welcome, {user?.email || 'User'}</h1>
      </header>
      <div className="dashboard">
        <section className="task-management">
          <h2 className="mb-4">Manage Tasks</h2>
          <TaskForm addTask={addTask} />
          <div className="mb-4">
            <h3>Filters</h3>
            <div className="row">
              <div className="col-md-4 mb-3">
                <select className="form-select" name="status" onChange={handleFilterChange}>
                  <option value="">All Statuses</option>
                  <option value="In Progress">In Progress</option>
                  <option value="Completed">Completed</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <select className="form-select" name="priority" onChange={handleFilterChange}>
                  <option value="">All Priorities</option>
                  <option value="High">High</option>
                  <option value="Medium">Medium</option>
                  <option value="Low">Low</option>
                </select>
              </div>
              <div className="col-md-4 mb-3">
                <input 
                  type="date" 
                  className="form-control" 
                  name="dueDate" 
                  onChange={handleFilterChange} 
                />
              </div>
            </div>
          </div>
          <ul className="list-group">
            {filteredTasks.map(task => (
              <li key={task.id} className="list-group-item d-flex justify-content-between align-items-center">
                <div>
                  <strong>{task.title}</strong> - {task.status} - {task.priority} - Due: {task.dueDate}
                </div>
                <div>
                  <button 
                    onClick={() => updateTask({ ...task, status: 'Completed' })} 
                    className="btn btn-success btn-sm me-2"
                  >
                    Complete
                  </button>
                  <button 
                    onClick={() => deleteTask(task.id)} 
                    className="btn btn-danger btn-sm"
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </div>
      <ToastContainer
      autoClose={1000}
      /> 
    </div>
  );
};

export default Dashboard;
