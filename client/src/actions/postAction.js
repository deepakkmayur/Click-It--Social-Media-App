import * as PostApi from '../api/PostRequest'

export const getTimelinePosts=(id)=> async(dispatch)=>{
   dispatch({type:"RETREIVING_START"})
   try {
      const {data} =await PostApi.getTimelinePosts(id)  
   dispatch({type:"RETREIVING_SUCCESS",data:data})

   } catch (error) {
      console.log(error);
   dispatch({type:"RETREIVING_FAIL"})
      
   }
}

             
    

// export const likePost=(postId,userId)=>async (dispatch)=>{
// dispatch({type:"LIKE_START"})
// try {
//    const {data}=await PostApi.getLikePost(postId,userId)
//    console.log("//////................................./postaction data true////////////////",data);
//    dispatch({type:"LIKE_SUCCESS"})
// } catch (error) {
//    console.log("//////................................./postaction data error////////////////");  

//    dispatch({type:"LIKE_FAILED",})  
//    console.log(error);  
// }
// }