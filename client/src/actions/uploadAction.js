import * as UploadApi from '../api/uploadRequest'

export const uploadImage=(data)=>async(dispatch)=>{

  try {
     await UploadApi.uploadImage(data)
    console.log(data,"vvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvvv");
   } catch (error) {
     console.log(error); 
   }
}

export const uploadPost=(data)=>async(dispatch)=>{
  
  dispatch({type:"UPLOAD_START"})
  try {
    const newPost=await UploadApi.uploadPost(data)
    dispatch({type:"UPLOAD_SUCCESS",data:newPost.data})    
  } catch (error) {
     console.log(error);
    dispatch({type:"UPLOAD_FAILED"})                            

  }
}