import React from 'react'
import {BsTrashFill} from 'react-icons/bs'
import {BiEditAlt} from 'react-icons/bi'
const Todo=({todoItem,deleteTodo,checkTodo})=> {
  
  function deleteTodoHandler(id){
    deleteTodo(id)
  }

  const inputChangeHandler=(id)=>{
    checkTodo(id);

  }
  
  return (
    <div>
        
        <li style={{textDecoration: `${todoItem.checked ? 'line-through' : ''}` }}>
          <input type='checkbox' onChange={()=>{inputChangeHandler(todoItem.id)}} defaultChecked={todoItem.checked} />
          <p> ID: {todoItem.id} --Task:{todoItem.todo} <span onClick={()=>deleteTodoHandler(todoItem.id)}><BsTrashFill/></span> <span><BiEditAlt/></span></p>
        </li>
    </div>
  )
}

export default Todo
