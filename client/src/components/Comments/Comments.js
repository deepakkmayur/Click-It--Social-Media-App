import React from 'react'
import { useState } from 'react'
import './Comments.css'



const Comments = () => {
  
   const [comment,setComment]=useState({comment:""})

   const handleComment=(event)=>{
   //   console.log(event.target.value);
     setComment((prev)=>{
      return event.target.value
     })
   }
  
   console.log(comment);


  return (
    <div className='comment'>
      <input className='input-box' type="text" placeholder='Comments' onChange={handleComment} />
    </div>
  )
}

export default Comments