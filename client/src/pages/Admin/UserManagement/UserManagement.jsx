import AdminDashboard from '../AdminDashboard/AdminDashboard';
import {getAllUser,blockUser} from '../../../api/UserRequest'

import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useEffect,useState } from 'react';

import "./UserManagement.css"
// import { useDispatch } from 'react-redux';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));



function createData(name, calories) {
  return { name, calories };
}

// const rows = [
//   createData('Frozen yoghurt', 159),
 
// ];



export default function CustomizedTables() {

const [users,setUsers]=useState()
const [render,setRender]=useState(false)

useEffect(async()=>{
  const allUsers=await getAllUser()
  setUsers(allUsers.data)
},[render])



console.log(users,"users usestate");    ///////////////////////////////////////////

 
const handleBlock=async (userId)=>{
  console.log("/handle block",userId);  //////////////////////////////////
  setRender((prev)=>{
    return !prev
  })
      await blockUser(userId)

}

console.log(render);



  return (
    <>
     <AdminDashboard/>

    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="left">Username</StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right"></StyledTableCell>
            <StyledTableCell align="right">Block/Unblock</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
        {users?.map((user) => (
          <StyledTableRow key={user?._id}>
              <StyledTableCell align="left">{user?.firstname}</StyledTableCell>
              <StyledTableCell align="left">{user?.username}</StyledTableCell>
              <StyledTableCell component="th" scope="row">
                {user.name}
              </StyledTableCell>
              <StyledTableCell align="right"></StyledTableCell>
              {/* <StyledTableCell align="right">{row.protein}</StyledTableCell> */}
              {user?.isBlocked?<StyledTableCell align="right"><button className='unblockButton' onClick={()=>handleBlock(user._id)}>Unblock</button></StyledTableCell>:<StyledTableCell align="right"><button className='blockButton' onClick={()=>handleBlock(user._id)}>Block</button></StyledTableCell>} 
              
            </StyledTableRow>                      
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}






