import styled from 'styled-components'

export const Container = styled.div `
    display: grid;
    place-items: center;
    height: 100vh;
`

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
    width: clamp(600px, 70vw, 70vw);
    height: 90%;
    color: black;
    background-color: #fff275;
    font-family: sans-serif;
    padding-top: 5%;
`

export const DietHealthContainer = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    margin-top: 20px;
`

export const DietHealth = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
    padding: 0px 30px 25px 30px;
    border-radius: 5px;
    background-color: #ff8c42;
    color: black;
    font-family: sans-serif;
`

export const LoginRegisterButton = styled.button `
    background-color: white;
    color: #6699cc;
    font-weight: bold;
    font-size: 1em;
    width: 80px;
    height: 30px;
    border: 1px solid #6699cc;
    border-radius: 5px;

    :disabled {
        color: lightgray;
        background-color: whitesmoke;
        border: 1px solid lightgray;
    }
`

