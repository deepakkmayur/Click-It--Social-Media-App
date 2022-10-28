const authReducer=(state={authData:null,loading:false,error:false},action)=>{
   console.log("here")
   switch(action.type){
      case "AUTH_START":
         return{...state,loading:true,error:false}
         case "AUTH_success":
            localStorage.setItem("profile",JSON.stringify({...action.data}))
            
            return{...state,authData:action.data,loading:false,error:false}
            case "AUTH_FAILED":
               return {...state,loading:false,error:true}
            default:
               return state
   }
}

export default authReducer



// const uthReducer = (
//    state = {authData: null, loading : false , error: false},
//    action 
// )=> {

//    switch(action.type){
//        case  "AUTH_START" :
//            return{...state, loading:true, error:false}
//        case "AUTH_SUCCESS" :
//            localStorage.setItem("profile", JSON.stringify({...action.data}))  
//            return {...state, authData: action.data, loading:false}  
//        case "AUTH_FAIL" :
//            return {...state, loading:false, error: true}        
//        default:
//            return state    
//    }
// }

// export default authReducer