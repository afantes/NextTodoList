import styled from 'styled-components';

const TodoAppContainerStyled = styled.div`
    background-color: #fff;
    max-width: 500px;
    margin: 35px auto;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.74);
`;

export default function TodoAppContainer({ children }) {
    return (
        <TodoAppContainerStyled>
            {children}
        </TodoAppContainerStyled>
    );
};