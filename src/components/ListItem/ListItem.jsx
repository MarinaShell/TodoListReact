import React from 'react';
import Button from '../../components/Button/Button';
import './ListItem.css'

const ListItem = ({todoName, remove})=>{
    return (
        <div className='list-item'>
            <div className='list-item__text'>
                {todoName}
            </div>
            
            <Button
                name ="remove"
                onClick = {()=>remove(todoName)}
                customClass = 'item-button'>
            </Button>    
        </div>
       
    )
};
export default ListItem;