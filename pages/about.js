import styled from 'styled-components';
import TodoAppContainer from '@/components/TodoAppContainer/TodoAppContainer';
import Title from '@/components/Title/Title';

const StyledParagraph = styled.p`
    font-size: 16px;
    line-height: 1.5;
    color: #333;
    text-align: center;
    padding: 3px 20px;
`;

export default function About() {
    return (
        <TodoAppContainer>
            <Title text="Description :" />
            <StyledParagraph>
                Welcome to "My To-Do List App," a user-friendly and intuitive application designed to help you manage your everyday life. Whether you need to keep track of household chores, homework, or professional tasks, this app is here for you.<br /><br />

                With a clean, simple user interface, you can easily add new tasks, mark them as complete once they're done, and even delete them if you wish. Moreover, by utilizing the browser's localStorage API, all your tasks are persistently stored, so you can close the app and come back later to find all your tasks just where you left them.<br /><br />

                This application was developed using Next.js, a robust JavaScript framework built on top of React.js. This choice ensures our app runs smoothly and quickly, helping you stay organized without slowing you down.<br /><br />

                "My To-Do List App" is an ideal tool for those looking to boost their productivity and organization.<br />So, what are you waiting for ? Start using "My To-Do List App" today and give your productivity the boost it needs!
            </StyledParagraph>
        </TodoAppContainer>
    );
}