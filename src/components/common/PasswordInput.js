import styled from "styled-components";

const PasswordInput = styled.input.attrs({
    type: props => (props.showPassword) ? 'text' : 'password'
})`
    outline:none;
    border-radius:3px;
    border:1px solid #afa5a5;

    &:focus{
        border-color:black;
    }

`;

export default PasswordInput;