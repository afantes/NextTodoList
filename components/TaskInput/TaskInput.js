import styled from 'styled-components';

const StyledInput = styled.input`
    flex: 1;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 4px;
`;

export default function TaskInput({ value, onChange }) {
    return (
        <StyledInput
            type="text"
            placeholder="Enter a task"
            value={value}
            onChange={onChange}
        />
    );
}
