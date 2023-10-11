import React, {useState, useEffect } from 'react'
import styles from './Quote.module.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const Quote = (props) => {
  let navigate=useNavigate();
  
  const showQuoteHandler=(id)=>{
    navigate(`/quotes/${id}`)

  }
  const deleteQuoteHandler=async(id)=>{
    try{
      await axios.delete(`http://localhost:8080/delete/${id}`);
      window.location.reload(false);
      // navigate('/');
      
    }
    catch(e){
      console.log("cannot delete this quote");

    }
  }
  
 
  
  
  
  return (
    <li className={styles.quote}>
        <span>
            <p>{props.text}</p>
            <h3>{props.author}</h3>
        </span>
        <button onClick={()=>showQuoteHandler(props.id)}>View Quote</button>
        <button onClick={()=>deleteQuoteHandler(props.id)}>Delete</button>
    </li>
  )
}

export default Quote