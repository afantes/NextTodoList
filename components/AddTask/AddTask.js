import styles from './AddTask.module.css';
import { useState, useContext } from 'react';
import { TaskContext } from '@/contexts/TaskContext';
import TaskInput from '@/components/TaskInput/TaskInput';
import Button from '@/components/Buttons/Button';

export default function AddTask() {
    const [taskName, setTaskName] = useState('');
    const { addTask } = useContext(TaskContext);

    const handleAddTask = () => {
        if (taskName.trim() !== '') {
            addTask(taskName);
            setTaskName('');
        }
    };

    return (
        <div className={styles['add-task']}>
            <TaskInput value={taskName} onChange={(e) => setTaskName(e.target.value)} />
            <Button className={styles['add-button']} text="Add Task" onClick={handleAddTask} />
        </div>
    );
}