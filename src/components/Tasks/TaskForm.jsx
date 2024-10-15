import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const TaskForm = ({ addTask }) => {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('In Progress');
  const [priority, setPriority] = useState('Medium');
  const [dueDate, setDueDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = {
      id: Date.now(), 
      title,
      status,
      priority,
      dueDate,
    };
    addTask(newTask);
    setTitle('');
    setStatus('In Progress');
    setPriority('Medium');
    setDueDate('');
  };

  return (
    <div className="container mt-4">
      <form onSubmit={handleSubmit} className="border p-4 rounded bg-light shadow">
        <h3 className="mb-3">Create a New Task</h3>
        <div className="mb-3">
          <label className="form-label">Task Title</label>
          <input 
            type="text" 
            className="form-control" 
            placeholder="Enter task title" 
            value={title} 
            onChange={(e) => setTitle(e.target.value)} 
            required 
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Status</label>
          <select 
            className="form-select" 
            value={status} 
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="In Progress">In Progress</option>
            <option value="Completed">Completed</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Priority</label>
          <select 
            className="form-select" 
            value={priority} 
            onChange={(e) => setPriority(e.target.value)}
          >
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <div className="mb-3">
          <label className="form-label">Due Date</label>
          <input 
            type="date" 
            className="form-control" 
            value={dueDate} 
            onChange={(e) => setDueDate(e.target.value)} 
            required 
          />
        </div>
        <button type="submit" className="btn btn-dark w-100">Add Task</button>
      </form>
    </div>
  );
};

export default TaskForm;
