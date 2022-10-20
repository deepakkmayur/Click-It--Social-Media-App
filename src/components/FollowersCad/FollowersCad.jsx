import React from 'react'
import './FollowersCad.css'
import { Followers } from '../../Data/FollowersData'

function FollowersCad() {
  return (
    <div className="FollowerCad">
       <h3>whos is following you</h3>
       {Followers.map((follower,id)=>{
        return(
          <div className="follower">
            <div>
              <img src={follower.img} alt="loading" className='followerImg' />
              <div className="name">
                <span>{follower.name}</span>
                <span>@{follower.username}</span>
              </div>
            </div>
            <button className='button fc-button'>
              Follow
              </button>
          </div>
        )
       })}
    </div>
  )
}

export default FollowersCad