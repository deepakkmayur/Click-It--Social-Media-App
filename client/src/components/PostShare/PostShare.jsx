import React,{useState,useRef} from 'react';
import img from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons"

import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"

const PostShare = () => {

 const [image,setImage]=useState(null)
 const imageRef=useRef()

 const onImageChange=(event)=>{
  if(event.target.files && event.target.files[0]){
   let img =event.target.files[0]
   setImage({image:URL.createObjectURL(img)})
  }
 }




   return (
      <div className="PostShare">
         <img src={img} alt="" />
         <div>
            <input type="text" placeholder="what's happening " />
            <div className="postOptions">
               <div className="option" style={{color:"blue"}} 
               onClick={()=>imageRef.current.click()}
               >
                  <UilScenery />
                  photo
               </div>
               <div className="option" style={{color:"red"}}>
                  <UilPlayCircle />
                  video
               </div>
               <div className="option" style={{color:"green"}}>
                  <UilLocationPoint />
                  location
               </div>
               <div className="option" style={{color:"orange"}}>
                  <UilSchedule />
                  schedule
               </div>
               
               <button className='button ps-button'>
                  Share
               </button>
               <div style={{display:"none"}}>    
                  <input type="file" name='myImage' ref={imageRef} onChange={onImageChange}/>
               </div>
            </div>
            {image && (
               <div className="previewImage">
                  <UilTimes onClick={()=>{setImage(null)}}/>
                  <img src={image.image} alt="" />
               </div>
            )}
         </div>
      </div>
   )
}

export default PostShare