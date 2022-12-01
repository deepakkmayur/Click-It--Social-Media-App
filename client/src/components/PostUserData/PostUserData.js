import React from 'react'
import "./PostUserData.css";



const PostUserData = (data) => {
  console.log(data, "reached");
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;


  return (


    <div className="FollowerCad">


      <img
        src={
          data?.data[0]?.profilePicture
            ? serverPublic + data?.data[0]?.profilePicture
            : serverPublic + "defaultProfile.jpg"
        }
        alt="loading"
        className="followerImg"
      />
      <h2>{data?.data[0]?.firstname}</h2>


    </div>





  )
}

export default PostUserData