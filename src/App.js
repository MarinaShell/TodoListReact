import './App.css';
import React from 'react';
import Input from './components/Input/Input';
import Button from './components/Button/Button';
import ListItem from './components/ListItem/ListItem';

import './App.css'

class App extends React.Component {
  constructor(){
    super();

    this.state = {
      inputValue:' ',
      todoList:[],
    }
  }

  onChangeInput = (event) => {
     this.setState({
      inputValue: event.target.value,
    }
    )
  }

  onClickBtn = ()=>{
    const {inputValue, todoList} = this.state;
     this.setState({
      todoList:[inputValue,...todoList ],
      inputValue:'',
    }) 
 }

 onRemoveTodo = (todoName)=>{
    const {todoList} = this.state;

    const indexItem = todoList.findIndex((str)=>str===todoName);
    const newTodoList = [...todoList.slice(0, indexItem),...todoList.slice(indexItem+1)];
    this.setState({
      todoList: newTodoList,
    })
 }

  render(){
    const {inputValue, todoList} = this.state;
    return (
      <>
        <div>
          <h1>TODO list</h1>
        </div>
        
        <div className='control'>
          <Input  
            value = {inputValue}
            onChange = {this.onChangeInput}>
          </Input>
          <Button 
            name = "add TODO"
            onClick = {this.onClickBtn}>
          </Button>
        </div>

        <div className='table'>
          {todoList.map( (todoStr)=>{
            return (
              <ListItem
                key = {todoStr}
                todoName={todoStr}
                remove = {this.onRemoveTodo}>
              </ListItem>
            );
          }

          )}

        </div>
     
     </>
     );
  }  
}

export default App;
