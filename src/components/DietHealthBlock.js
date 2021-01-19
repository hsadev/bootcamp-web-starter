import React from 'react'


const DietHealthBlock = ({label, name, checked, handleCheck, key}) => {

    return (
        <div>
            <label>{ label }</label>
            <input
                type="checkbox"
                onChange={ handleCheck }
                name={ name }
                checked={ checked }
            />
        </div>
    )
}


export default DietHealthBlock