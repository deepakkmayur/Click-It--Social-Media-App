import React from "react";
import cover from "../../img/cover.jpg";
import Profile from "../../img/profileImg.jpg";
import "./ProfileCard.css";
import {useSelector} from 'react-redux'
import {Link} from 'react-router-dom'

function ProfileCard({location}) {

  const {user}=useSelector((state)=>state.authReducer.authData)
    const posts=useSelector((state)=>state.postReducer.posts)
  const serverPublic=process.env.REACT_APP_PUBLIC_FOLDER
  return (
    <div className="ProfileCard">
      <div className="ProfileImage">
        <img src={user.coverPicture?serverPublic+user.coverPicture:serverPublic+"defaultCover.jpg"} alt="loading" />
        <img src={user.profilePicture?serverPublic+user.profilePicture:serverPublic+"defaultProfile.jpg"} alt="loading" />
      </div>
      <div className="ProfileName">
        <span>{user.firstname} {user.lastname}</span>
        <span>{user.workAt?user.workAt:"write about yourself"}</span>         
      </div>
      <div className="followStatus">
        <hr />
        <div>
          <div className="follow">
            <span>{user.following.length}</span>
            <span>Following</span>
          </div>

          <div className="vl"></div>
          <div className="follow">
            <span>{user.followers.length}</span>
            <span>Followers</span>
          </div>
          {location==='profilePage' && (
            <>
              <div className="vl">

              </div>
              <div className="follow">
                <span>{posts.filter((post)=>post.userId===user._id).length}</span>
                <span>Posts</span>
              </div>
            </>
          )}
        </div>
        <hr />
      </div>
      {location==='profilePage' ? '' :
        <span>
          <Link style={{textDecoration:"none" ,color:""}} to ={`/profile/${user._id}`}>
          my profile

          </Link>
        </span>
      }

    </div>
  );
}

export default ProfileCard;
