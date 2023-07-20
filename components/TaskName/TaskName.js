import styled from 'styled-components';

const StyledTaskName = styled.span`
    flex-grow: 1;
    word-break: break-all;
`;

export default function TaskName({ name }) {
    return <StyledTaskName>{name}</StyledTaskName>;
}