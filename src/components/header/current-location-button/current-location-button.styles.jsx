import styled from "styled-components";

const cLBg = '#44bc1c';

export const CLButton = styled.button
`
    display: flex;
    justify-content: center;
    align-items: center;
    max-width: 250px;
    width: 18vw;
    background-color: ${cLBg};
    border: none;
    border-radius: 40px;
    font-size: 18px;
    color: white;
    cursor: pointer;
    
    svg {
        color: black;
        font-size: 30px;
        margin-right: 10px;
    }
`;