import React,{useState,useEffect} from "react";
import TaskContext from "./TaskContext";
import axios from "axios";

  const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=6')
      .then(res => setTasks(res.data))
      .catch(console.error);
  }, []);

  const addTask = (title) => {
    const newTask = { id: Date.now(), title, completed: false };
    setTasks(prev => [...prev, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(task => task.id !== id));
  };

  const toggleTask = (id) => {
    setTasks(prev =>
      prev.map(task =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const filteredTasks = tasks.filter(task =>
    filter === 'completed' ? task.completed :
    filter === 'pending' ? !task.completed : true
  );

  return (
    <TaskContext.Provider value={{
      tasks: filteredTasks, addTask, deleteTask, toggleTask, setFilter
    }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;