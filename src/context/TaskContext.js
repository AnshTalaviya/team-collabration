import React, { createContext, useState } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  const createTask = (task) => {
    setTasks((prev) => [...prev, { ...task, id: Date.now() }]);
  };

  return (
    <TaskContext.Provider value={{ tasks, createTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
