import React from 'react'
import {StyledInput} from './styles'

const InputBlock = ({label, type, name, onChangeF, value}) => {

    return (
        <StyledInput>
            <label>{ label }</label>
            <input 
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