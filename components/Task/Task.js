import styles from './Task.module.css';
import { useContext } from 'react';
import { TaskContext } from '@/contexts/TaskContext';
import TaskName from '@/components/TaskName/TaskName';
import Button from '@/components/Buttons/Button';

export default function Task({ task }) {
    const { markTaskAsDone, deleteTask } = useContext(TaskContext);

    const handleDoneClick = () => {
        markTaskAsDone(task.id);
    };

    const handleDeleteClick = () => {
        deleteTask(task.id);
    };

    return (
        <div className={`${styles.task} ${task.done ? styles.done : ''}`}>
            <TaskName name={task.name} />
            <Button
                className={styles['done-button']}
                text="Done"
                onClick={handleDoneClick}
            />
            <Button
                className={styles['delete-button']}
                text="Delete"
                onClick={handleDeleteClick}
            />
        </div>
    );
}