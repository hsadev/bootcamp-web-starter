import styled from 'styled-components'

export const StyledInput = styled.div `
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const TextField = styled.input ` 
    width: 230px;
    height: 30px;
    border-radius: 5px;
    border: 1px solid lightgray;

    :focus {
        border-radius: 5px;
        border: 2px solid #6699cc;
        outline: none;
    }
`

export const StyledLabel = styled.label `
    font-size: 1.1em;
    font-family: sans-serif;
    margin-bottom: 5px;
`

export const DietHealthRow = styled.div ` 
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`