import styled, { css } from 'styled-components';

const Button = styled.button`
    background:${props => props.theme.backgroundColor};
    border:2px solid ${props => props.theme.primaryColor};
    font-size:20px;
    color:${props => props.theme.primaryColor};
    outline:none;

    ${props => props.primary && css`
        background:#004cff;
        color:white
    `}
`;

export default Button;