import React, { useEffect, useState } from 'react'
import {useParams} from 'react-router-dom'
import axios from 'axios';
import styles from './ShowQuotes.module.css'


const ShowQuotes = () => {
    const params=useParams();
    let [quote,setQuotes]=useState({
        author:'',
        text:''
    })
    async function fetchQuote(){
        let res=await axios.get(`http://localhost:8080/quotes/${params.id}`)
        let {author,text}=res.data;
        setQuotes({author,text});

    }
    useEffect(()=>{
        fetchQuote();

    },[])
    
    
    
  return (
    <div className={styles.card}> 
        <p className={styles['card-title']}>author:{quote.author}</p>
        <p className={styles['small-desc']}>text:{quote.text}</p>
        
        <div className={styles['go-corner']}>
           <div className={styles['go-arrow']}>→</div>
        </div>
        
    </div>
    
  )
}

export default ShowQuotes