import React, { useState } from "react";
import "./Post.css";
import Comment from "../../img/comment.png";
import Share from "../../img/share.png";
import Heart from "../../img/like.png";
import NotLike from "../../img/notlike.png";
import { useDispatch, useSelector } from "react-redux";
import { likePost } from "../../api/PostRequest";
// import { likePost } from '../../actions/postAction'

const Post = ({ data }) => {   
  console.log(data, "data.........");

  const { user } = useSelector((state) => state.authReducer.authData);
  let { posts } = useSelector((state) => state.postReducer);

  const [liked, setLiked] = useState(data.likes.includes(user._id));

  const [likes, setLikes] = useState(data.likes.length);

  const dispatch = useDispatch();

  const handleLikes = () => {
    setLiked((prev) => !prev);
    likePost(data._id, user._id);
    // dispatch(likePost(data._id,user._id))
    liked ? setLikes((prev) => prev - 1) : setLikes((prev) => prev + 1);
  };

  const handleDelete = (postId) => {};

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
        <img src={Share} onClick={() => handleDelete(data._id)} alt="" />
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
