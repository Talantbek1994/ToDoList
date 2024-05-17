import React, { useState } from 'react';

const ToDoInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task.trim()) {
      addTask(task);
      setTask('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Bismillah..."
      />
      <button type="submit">Add Savob</button>
    </form>
  );
};

export default ToDoInput;
