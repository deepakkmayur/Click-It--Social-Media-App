import React from 'react'
import { useState } from 'react'
import './Comments.css'
import commentSubmit from '../../img/commentSubmit.png'
import { useDispatch, useSelector } from 'react-redux'
import { postComment } from '../../actions/postAction'



const Comments = (data) => {
    const dispatch=useDispatch()
  const { user } = useSelector((state) => state.authReducer.authData);
  const {comments}=useSelector((state)=>state.commentReducer)
  

           const [enteringComment,setEnteringComment]=useState({text:"",postId:data.data._id})   
           
           
           
           const handleComment=(event)=>{
              setEnteringComment((prev)=>{
               return {...prev,text:event.target.value}
              })            
            }
            
            let value
            const handleCommentSubmit=(event)=>{ 
               event.preventDefault()
               
               dispatch(postComment(enteringComment))
               setEnteringComment({text:"",postId:data.data._id})
            }
            


  return (
    <div >
      <form  action='submit'  onSubmit={handleCommentSubmit} >       
      <div className="comments">
         
         {comments.map((ele)=>{
           if(ele.postId===data.data._id){
            return <p>{ele.text}</p>
           }
         })}
      </div>
         <div className='comment'>
         <input className='input-box' type="text" placeholder='Comments' value={enteringComment.text} onChange={handleComment} />
          <button type='submit'  className="button-ok" >Add</button>
         </div>
      </form>
    </div>
  )
}

export default Comments