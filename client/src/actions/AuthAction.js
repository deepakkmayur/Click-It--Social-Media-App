import * as AuthApi from '../api/AuthRequest'

export const logIn=(formData)=>async(dispatch)=>{
   dispatch({type:"AUTH_START"})
   try {
      const {data}=await AuthApi.logIn(formData)
      dispatch({type:"AUTH_success",data:data})

      
   } catch (error) {
      console.log(error);
      dispatch({type:"AUTH_FAILED"})
   }
}


export const signUp=(formData)=>async(dispatch)=>{
   dispatch({type:"AUTH_START"})
   try {
      const {data}=await AuthApi.signUp(formData)
   dispatch({type:"AUTH_success",data:data})                         

      
   } catch (error) {
      console.log(error);
      dispatch({type:"AUTH_FAILED"})
   }
}

export const logOut=()=>{
  return async (dispatch)=>{dispatch({type:"LOG_OUT"})}
}