export default function Validate(values){
   let errors ={}
   if(!values.firstname.trim()){
    errors.firstname="First Name is required"

   }
   if(!values.lastname.trim()){
    errors.lastname="Last Name is required"

   }

   if(!values.username.trim()){
       errors.username="Email is required"
   }else if(!/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/.test(values.username)){
    errors.username="Email adress is invalid"
   }

   if(!values.password.trim()){
    errors.password="Password is required"
   }else if(values.password.length < 4 ){
    errors.password="Password must be 4 characters"
   }
   if(!values.confirmpass.trim()){
    errors.confirmpass="Password is required"
   }else if(values.confirmpass.length > 4){
    errors.confirmpass="Password must be 4 characters"
   }
   return errors;
}