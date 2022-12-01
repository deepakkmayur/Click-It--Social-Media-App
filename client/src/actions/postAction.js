import * as PostApi from '../api/PostRequest'

export const getTimelinePosts=(id)=> async(dispatch)=>{
   dispatch({type:"TIMELINE_RETREIVING_START"})
   try {
      const {data} =await PostApi.getTimelinePosts(id)  
   dispatch({type:"TIMELINE_RETREIVING_SUCCESS",data:data})

   } catch (error) {
      console.log(error);
   dispatch({type:"TIMELINE_RETREIVING_FAIL"})
      
   }
}


export const deletePost=(postId,userId)=>async (dispatch)=>{

   dispatch({type:"DELETE_START"})
   try {
      const {data}=await PostApi.deletePost(postId,userId)
   dispatch({type:"DELETE_SUCCESS",data:data.response}) 
   } catch (error) {
      console.log(error); 
   dispatch({type:"DELETE_FAILED"}) 

   }
}


export const postComment=(comment)=>async (dispatch)=>{

   dispatch({type:"COMMENT_START"})
   try {
      const {data}= await PostApi.postComment(comment)
      console.log(data,"reached here---------------------data----");

   dispatch({type:"COMMENT_Success",data:comment})
       
   } catch (error) {
      console.log(error);
   dispatch({type:"COMMENT_FAILED"})

   }
}