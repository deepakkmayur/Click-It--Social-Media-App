import React from 'react'
import FollowersCad from '../FollowersCad/FollowersCad'
import LogoSearch from '../LogoSearch/LogoSearch'
import InfoCard from '../InfoCard/InfoCard'
import './ProfileLeft.css'

const ProfileLeft = () => {
  return (
    <div className="ProfileLeft">
      <LogoSearch/>
      <InfoCard/>
      <FollowersCad/>
    </div>
  )
}

export default ProfileLeft