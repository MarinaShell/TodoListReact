import React from 'react';
import './Button.css'

const Button = ({name, onClick, customClass})=>{
    return (
        <button 
        className = {`button ${customClass ? customClass : ''}`}
        onClick = {onClick}>
            {name}
        </button>
       
    )
};
export default Button;
