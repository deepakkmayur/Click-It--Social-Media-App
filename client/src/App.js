import "./App.css"
import Home from "./pages/home/Home";
import Profile from "./pages/Profile/Profile";
import Auth from "./pages/Auth/Auth";
import {Routes,Route,Navigate,useNavigate} from 'react-router-dom'
import { useSelector } from "react-redux";
import Chat from "./pages/Chat/Chat";

import AdminLogin from "./pages/Admin/AdminLogin/AdminLogin";
import AdminDashboard from "./pages/Admin/AdminDashboard/AdminDashboard";
import UserManagement from "./pages/Admin/UserManagement/UserManagement";
import PostManagement from "./pages/Admin/PostManagement/PostManagement";



function App() {
  const user=useSelector((state)=>state.authReducer.authData) 

  const navigate=useNavigate()

  return (
  
    <div className="App">
        {/* <div className="blur" style={{top:'-18%',right:'0'}}></div> 
        <div className="blur" style={{top:'36%', left:'-8rem'}}></div> */}     
        <Routes>
          <Route path='/' element={user?<Navigate to ="home"/>: <Navigate to ="auth"/>}/>
          <Route path='/home' element={user? <Home/>:<Navigate to ="../auth"/>}/>
          <Route path='/auth' element={user?<Navigate to ="../home"/>:<Auth/>} /> 
          <Route path='/profile/:id' element={user?<Profile/>:<Navigate to="../auth"/>} />
          <Route path="/chat" element={user ? <Chat /> : <Navigate to="../auth" />} />
           

           <Route path='/admin' element={<AdminLogin/>}/>
           <Route path="/admin/adminDashboard" element={<AdminDashboard/>}/>   
           <Route path="/admin/userManagement" element={<UserManagement/>}/>   
           <Route path="/admin/postManagement" element={<PostManagement/>}/>   


        </Routes>
    </div>
  );
}

export default App;
