import React from 'react'
import {StyledInput, StyledLabel, TextField} from './styles'

const InputBlock = ({label, type, name, onChangeF, value}) => {

    return (
        <StyledInput>
            <StyledLabel>{ label }</StyledLabel>
            <TextField 
                type={ type }
                name={ name }
                onChange={ onChangeF }
                value={ value }
                required
            />
        </StyledInput>
    )
}


export default InputBlock