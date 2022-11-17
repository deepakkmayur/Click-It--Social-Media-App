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
  console.log(data.userId, "data.........new");
  console.log(user._id,"user........new");
  const [liked, setLiked] = useState(data.likes.includes(user._id));

  const [likes, setLikes] = useState(data.likes.length);

  const dispatch = useDispatch();

  const handleLikes = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };
  

  console.log(user,"user._id........");
  const handleDelete = (postId) => {      
    console.log(postId,"postId......");  
    dispatch(deletePost(postId,user._id))
  };


let state
if(user._id==data.userId){
  state=true
}else{
  state=false
}



  return (
    <div className="Post">
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
        <img src={Comment} alt="" />
        {state?<img src={Delete} className="delete-icon" onClick={() => handleDelete(data._id)} alt="" />:""}
        
      </div>
      <div>
        <Comments/>
      </div>

      <span style={{ color: "grey", fontSize: "12px" }}>{likes} likes</span>
      <div className="detail">
        <span>
          <b>{data.name}</b>
        </span>
        <span> {data.desc}</span>
      </div>
    </div>
  );
};

export default Post;
