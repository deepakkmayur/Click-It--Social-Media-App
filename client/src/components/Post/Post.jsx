import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Delete from "../../img/delete.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../api/PostRequest";
import { deletePost } from '../../actions/postAction'

import Comments from "../Comments/Comments";

const Post = ({ data }) => {   
 
  
  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts } = useSelector((state) => state.postReducer);
  const [liked, setLiked] = useState(data.likes.includes(user._id));

  const [likes, setLikes] = useState(data.likes.length);
  const [comment,setComment]=useState(false)

  const dispatch = useDispatch();

  const handleLikes = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };


  const handleCommentState =()=>{
    setComment((prev)=>{
       return !prev
    })
  }

  console.log(comment,"comment");
  

  const handleDelete = (postId) => {      
    dispatch(deletePost(postId,user._id))
  };


let state
if(user._id===data.userId){
  state=true
}else{
  state=false
}



  return (
    <div className="Post">
       <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
      <img
        src={data.image ? process.env.REACT_APP_PUBLIC_FOLDER + data.image : ""}
        alt=""
      />

      <div className="postReact">
        <img
          src={liked ? Heart : NotLike}
          onClick={() => {
            return handleLikes();
          }}
          alt=""
          style={{ cursor: "pointer" }}
        />
        <img src={Comment} alt="" onClick={handleCommentState} />
        {state?<img src={Delete} className="delete-icon" onClick={() => handleDelete(data._id)} alt="" />:""}
        
      </div>

      <span style={{ color: "grey", fontSize: "12px" }}>{likes} likes</span>
      <div>
        {comment?<Comments data={data}/>:""}
      </div>
     
    </div>
  );
};

export default Post;
