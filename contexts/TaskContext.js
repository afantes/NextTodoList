import { useState, useEffect, createContext } from 'react';

export const TaskContext = createContext();

export const TaskContextProvider = ({ children }) => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        const storedTasks = localStorage.getItem('tasks');
        if (storedTasks) {
            setTasks(JSON.parse(storedTasks));
        }
    }, []);

    const addTask = (taskName) => {
        const newTask = {
            id: Date.now(),
            name: taskName,
            done: false,
        };
        setTasks(prevTasks => {
            const updatedTasks = [...prevTasks, newTask];
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    const markTaskAsDone = (taskId) => {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.map((task) => task.id === taskId ? { ...task, done: !task.done } : task);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    const deleteTask = (taskId) => {
        setTasks(prevTasks => {
            const updatedTasks = prevTasks.filter(task => task.id !== taskId);
            localStorage.setItem('tasks', JSON.stringify(updatedTasks));
            return updatedTasks;
        });
    };

    return (
        <TaskContext.Provider
            value={{ tasks, setTasks, addTask, markTaskAsDone, deleteTask }}
        >
            {children}
        </TaskContext.Provider>
    );
};

export default TaskContextProvider;