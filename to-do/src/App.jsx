import React, { useState, useEffect } from 'react';
import './App.css';
import ToDoInput from './ToDoInput';
import ToDoList from './ToDoList';

function App() {
  const [tasks, setTasks] = useState([]);

  // Загружаем задачи из localStorage при монтировании компонента
  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  // Сохраняем задачи в localStorage при изменении списка задач
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, { text: task, completed: false }]);
  };

  const toggleTask = (index) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  const deleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  return (
    <div className='App'>
      <h1>Kim Allohga Taqvo qilsa</h1>
      <ToDoInput addTask={addTask} />
      <ToDoList tasks={tasks} toggleTask={toggleTask} deleteTask={deleteTask} />
    </div>
  );
}

export default App;
