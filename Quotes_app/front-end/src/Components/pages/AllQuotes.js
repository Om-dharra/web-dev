import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Quote from '../Quote/Quote';
import { Navigate } from 'react-router-dom';



const AllQuotes = () => {
  let [quotes,setQuotes] = useState([]);
  let navigate=Navigate;

  async function getQuotes(){
    let res=await axios.get('http://localhost:8080/allquotes');
    setQuotes(res.data);

  }
  
  useEffect(()=>{
    getQuotes();

  },[])
  return (
    <div>
      <h1>All Quotes</h1>
      <ul>
        {
          quotes.map((quote,index)=>{
            return <Quote
               key={quote._id} 
               author={quote.author}
               text={quote.text}
               id={quote._id}
            />
          })
        }


      </ul>
    </div>
  )
}

export default AllQuotes