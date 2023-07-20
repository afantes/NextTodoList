import styled from 'styled-components';
import { useContext } from 'react';
import { TaskContext } from '@/contexts/TaskContext';
import Task from '@/components/Task/Task';

const TodoListStyled = styled.div`
    padding: 10px;
`;

export default function TodoList() {
    const { tasks } = useContext(TaskContext);

    return (
        <TodoListStyled>
            {tasks.map((task) => (
                <Task key={task.id} task={task} />
            ))}
        </TodoListStyled>
    );
}