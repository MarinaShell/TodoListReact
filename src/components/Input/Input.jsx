import React from 'react';
import './Input.css'

class Input extends React.Component {
  render(){
    const {value, onChange} = this.props;
    return (
      <input type="text"
        className='input'
        value={value}
        onChange = {onChange}>
      </input>
    );
  }  
}

export default Input;
