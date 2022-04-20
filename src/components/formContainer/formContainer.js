import React from 'react'
import './formContainer.css'


export const formContainer = ({children}) => {
    return (
        <div className='form'>
            {children}
        </div>
    )
}
