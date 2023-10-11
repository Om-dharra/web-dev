import React, { useEffect, useState } from 'react'
import TodoList from './TodoList'
import Form from './Form'
import { v4 as uuidv4 } from 'uuid';



function TodoApp() {
    let arrayDummy=JSON.parse(window.localStorage.getItem('todos') || "[]")
    let [todos,setTodos]=useState(arrayDummy);
    
    const addTodo=(todo)=>{
        setTodos([...todos,todo])
    }
    useEffect(()=>{
        // console.log("inside this app component sam")
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])
    
    const deleteTodo=(id)=>{
        // const newTodo=todos.filter((todo)=>todo.id !== id);
        setTodos((prevState)=>{
            return prevState.filter((todo)=> todo.id !== id)
        });
    } 
    
    const checkTodo=(id)=>{
        setTodos((prevState)=>{
            return prevState.map((item)=> item.id === id ? {...item,checked : !item.checked}:item)
        })

    }
    

    

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Todo list for OM </h1>
        <Form addTodo={addTodo} todos={todos}/>
        
        
        <TodoList todos={todos} deleteTodo={deleteTodo} checkTodo={checkTodo}/>
    </div>
  )
}

export default TodoApp