import styled  from 'styled-components'

export const Delete = styled.button`
    width: 23px;
    height: 23px;
    font-size: 20px;
    text-align: center;
    color: black;
    opacity: 0.5;
    border: none;
    background-color: transparent;
    margin-left: 10px;
    transition: color 0.25s, opacity 0.25s, font-size 0.25s, width 0.25s, height 0.25s;
    transition-delay: 0.05s;
   
    &:hover {
        width: 23.5px;
        height: 23.5px;
        opacity: 1;
        color: crimson;
        font-size: 25px;
    }
`