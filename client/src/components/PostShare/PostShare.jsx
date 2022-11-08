import React, { useState, useRef } from 'react';
import img from '../../img/profileImg.jpg';
import './PostShare.css';
import { UilScenery } from "@iconscout/react-unicons";
import { UilPlayCircle } from "@iconscout/react-unicons"

import { UilLocationPoint } from "@iconscout/react-unicons"
import { UilSchedule } from "@iconscout/react-unicons"
import { UilTimes } from "@iconscout/react-unicons"
import { useDispatch, useSelector } from 'react-redux';
import { uploadImage } from '../../api/uploadRequest';

const PostShare = () => {

   const [image, setImage] = useState(null)
   const imageRef = useRef()
   const desc = useRef()
   const { user } = useSelector((state) => state.authReducer.authData)
   const dispatch=useDispatch()

   const onImageChange = (event) => {
      if (event.target.files && event.target.files[0]) {
         let img = event.target.files[0]
         setImage(img)
      }
   }

   const handleSubmit = (event) => {
      event.preventDefault()
      const newPost = {
         userId: user._id,
         desc:desc.current.value
   }
   if(image){
      const data=new FormData()
      const filename=Date.now()+image.name
      data.append("name",filename)
      data.append("file",image)
      newPost.image=filename
      console.log(newPost);
      try {
         dispatch(uploadImage(data))
      } catch (error) {
         console.log(error);
      }
   }
   }




   return (
      <div className="PostShare">
         <img src={img} alt="" />
         <div>
            <input ref={desc} required type="text" placeholder="what's happening " />
            <div className="postOptions">
               <div className="option" style={{ color: "blue" }}
                  onClick={() => imageRef.current.click()}
               >
                  <UilScenery />
                  photo
               </div>
               <div className="option" style={{ color: "red" }}>
                  <UilPlayCircle />
                  video
               </div>
               <div className="option" style={{ color: "green" }}>
                  <UilLocationPoint />
                  location
               </div>
               <div className="option" style={{ color: "orange" }}>
                  <UilSchedule />
                  schedule
               </div>

               <button className='button ps-button' onClick={handleSubmit}>
                  Share
               </button>
               <div style={{ display: "none" }}>
                  <input type="file" name='myImage' ref={imageRef} onChange={onImageChange} />
               </div>
            </div>
            {image && (
               <div className="previewImage">
                  <UilTimes onClick={() => { setImage(null) }} />
                  <img src={URL.createObjectURL(image)} alt="" />
               </div>
            )}
         </div>
      </div>
   )
}

export default PostShare