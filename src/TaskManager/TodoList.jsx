import React, { useState, useContext } from 'react';
import TaskContext from './TaskContext';

const TodoList = () => {
    const [title, setTitle] = useState('');
    const { tasks, addTask, deleteTask, toggleTask, setFilter } = useContext(TaskContext);

    const handleAdd = () => {
        if (title.trim()) {
            addTask(title);
            setTitle('');
        }
    };

    return (
        <div style={{ maxWidth: 400 }}>
            <h2>Todo App</h2>
            <input
                type='text'
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Add a new task"
                required />
            <button className='activebutton' onClick={handleAdd}>Add</button>

            <div>
                <button className="activebutton" onClick={() => setFilter('all')}>All</button>
                <button className="activebutton" onClick={() => setFilter('completed')}>Completed</button>
                <button className="activebutton" onClick={() => setFilter('pending')}>Pending</button>
            </div>

            <ul>
                {tasks.map(task => (
                    <li key={task.id}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span>
                            {task.title}
                        </span>
                        <button className="activebutton" onClick={() => deleteTask(task.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default TodoList;