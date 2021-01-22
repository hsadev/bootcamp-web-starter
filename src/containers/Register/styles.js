import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 100vh;
`

export const LoginContainer = styled.div`
    padding: 40px 20px;
    background-color: beige;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    transition: 0.3s;
    align-items: center;
    margin: 3em;
    border-radius: 5px;
    width: 50%;
`

export const Input = styled.input`
    border-radius: 3px;
    height: 2em;
    padding: 0.5em 1em;
    margin-top: 0.5em;
    width: 50%;
`
export const Label = styled.div`
    display: flex;
    font-size: 1em;
    margin-bottom: 0.1em;
    margin-top: 0.5em;
    align-self: flex-start;
    margin-left: 10em;
`

export const Button = styled.button`
    border-radius: 3px;
    margin-top: 2em;
    padding: 0.25em 1em;
    height: 2.5em;
    width: 25%;
    color: black;
    font-size: 1em;
`
export const Title = styled.div`
    font-size: 2em;
    margin-bottom: 0.5em;
`

export const Text = styled.a`
    font-size: 1em;
    margin-top: 1em;
    align-self: center;
`
export const IncPass = styled.p`
    align-self: center;
    color: red;
`