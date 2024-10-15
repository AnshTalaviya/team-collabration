import React, { useContext } from 'react';
import { TaskContext } from '../../context/TaskContext';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Your Tasks</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
