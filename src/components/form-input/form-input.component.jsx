import React from 'react'
import './form-input.styles.scss'

export const FormInput = ({handleChange,label,...otherInputProps}) => {
    
    return (
        <div className='group'>
            <input className='form-input' onChange={handleChange} {...otherInputProps}/>
                    {label ? (
            <label
                className={`${
                otherInputProps.value ? 'shrink' : ''
                } form-input-label`}
            >
                {label}
            </label>
            ) : null}
        </div>
    )
}

