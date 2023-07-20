import styled from 'styled-components';

const StyledTitle = styled.h1`
    text-align: center;
    color: #3d3636;
    margin-bottom: 30px;
`;

export default function Title({ text }) {
    return <StyledTitle>{text}</StyledTitle>;
}