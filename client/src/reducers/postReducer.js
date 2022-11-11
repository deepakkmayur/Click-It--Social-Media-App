
const postReducer=(
   state={posts:[],loading:false,error:false,uploading:false},
   action
)=>{
   switch(action.type){
      case "UPLOAD_START":
         return {...state,uploading:true,error:false}

       case "UPLOAD_SUCCESS":
         return {...state,posts:[action.data,...state.posts],uploading:false,error:false} 
         case "UPLOAD_FAILED":
            return {...state,uploading:false,error:true} 


          
         case "LIKE_START":
            return {...state,likedpost:false,error:false}   
         case "LIKE_SUCCESS":
            return {}
            
      default:
         return state
   }
}

export default postReducer