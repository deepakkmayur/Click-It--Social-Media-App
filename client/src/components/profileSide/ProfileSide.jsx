import React from 'react'
import LogoSearch from '../LogoSearch/LogoSearch'
import ProfileCard from '../ProfileCard/ProfileCard'
import './ProfileSide.css'
import FollowersCad from '../FollowersCad/FollowersCad'

function ProfileSide() {
  return (
    <div className='ProfileSide'>
      <LogoSearch/>   
      <ProfileCard/>  
      <FollowersCad/>    
      </div>
  )
}

export default ProfileSide