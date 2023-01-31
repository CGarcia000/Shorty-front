import styled from "styled-components";

const SuccessMessage = styled.div`
margin-top: 1.3rem;
color: #ffffff;
display: flex;
justify-content: space-between;

span:nth-child(2) {
    color: #000000;
}
`;

const ErrorMessage = styled.div`
color: red;
margin-top: 1rem;
`;


const InputWrapper = styled.div`
width: 75%;
background-color: ${props => props.success ? '#56d7b9' : '#ffffff'};
height: 6.5rem;
padding: 0.5rem;
border-radius: 7px;
`;


const Input = styled.input.attrs({type: 'text'})`
width: 100%;
height: 2.5rem;
font-size: 1.2rem;
border-radius: 5px;
border: 1px solid black;
`;

export {
    Input,
    InputWrapper,
    ErrorMessage,
    SuccessMessage,
};