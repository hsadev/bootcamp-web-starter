import styled from 'styled-components'

export const StyledForm = styled.form `
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const InputField = styled.input `
    border-color: gray;

    .notfilled {
        border-color: red;
    }
`

export const DietHealthContainer = styled.div `
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
`

export const DietHealth = styled.div `
    display: flex;
    flex-direction: column;
    margin-left: 30px;
    margin-right: 30px;
`