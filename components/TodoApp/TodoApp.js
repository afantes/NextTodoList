import TodoAppContainer from '@/components/TodoAppContainer/TodoAppContainer';
import Title from '@/components/Title/Title';
import TodoList from '@/components/TodoList/TodoList';
import AddTask from '@/components/AddTask/AddTask';

export default function TodoApp() {
    return (
        <>
            <TodoAppContainer>
                <Title text="My To-Do List :" />
                <TodoList />
                <AddTask />
            </TodoAppContainer>
        </>
    );
};