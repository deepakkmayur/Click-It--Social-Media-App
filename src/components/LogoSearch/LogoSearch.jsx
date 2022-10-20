import React from 'react'
import logo from '../../img/logo.png'
import {UilSearch} from '@iconscout/react-unicons'  
import './LogoSearch.css'  

function LogoSearch() {
  return (
   <div className="LogoSearch">     
      <img src={logo} alt="loading" />
      <div className="Search">
         <input type="text" name='' placeholder='#Explore' />
         <div className="search-icon">
            <UilSearch/>
         </div>
      </div>
   </div>

  )
}

export default LogoSearch