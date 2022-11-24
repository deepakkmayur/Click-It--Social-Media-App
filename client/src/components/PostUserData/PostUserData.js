import React from 'react'
import "./PostUserData.css";



const PostUserData = (data) => {
   console.log(data,"reached");
  const serverPublic = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
 

    <div className="FollowerCad">
    <h3>People you may know</h3>
    
       {/* <img
          src={
            data.data.profilePicture
              ? serverPublic + data.profilePicture
              : serverPublic + "defaultProfile.jpg"
          }
          alt="loading"
          className="followerImg"
        /> */}
        {/* <h1>{data.data[0].firstname}</h1> */}
        {/* <p>{data.data.firstname?data.data.firstname:"ss"}</p> */}     

  </div>


    


  )
}

export default PostUserData