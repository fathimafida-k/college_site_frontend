import React, {  useContext, useEffect, useState } from 'react'
import SideBar from './Sidebar';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { getfacultyAPI } from './AllAPI';
import SERVER_URL from './SERVER_URL';


function ManageDept() {
 const [allFaculty,setallFaculty] = useState([])
    console.log(allFaculty);
    
     useEffect(() => {
        getAllFaculty()
     }, [])
     
     const getAllFaculty=async()=>{
    
          
       
          
          try{
     
          const result=await getfacultyAPI()
          console.log("get faculty",result);
          if(result.status==200){
        setallFaculty(result.data)
          }
      
           
          }
          catch(err){
            console.log(err);
            
          }
       }
 
  return (
    <div>
        <div className='row'>
<div className='col-3'>
                <SideBar/>
            </div>
         <div className='col-9'>
        
  <h2 
    className='text-center mt-4' 
    style={{ 
      fontFamily: "Merriweather, serif", 
      fontWeight: 700,
      color: "#1A3C8E",
      fontSize: "2.2rem"
    }}
  >
    Manage Departments
  </h2>
   <div className='mt-5'>
      <Link to={'/add-dept'}>
        <button style={{backgroundColor:"#1A3C8E",fontFamily:"poppins",color:"#F4C430"}} className='btn  fw-bold'>Add New Department<i class="fa-solid fa-plus"></i></button></Link>
   </div>
            <div className="table-responsive mt-5" style={{ width: "90%", maxWidth: "800px" }}>
 {allFaculty.length>0 ? <Table striped bordered hover className="text-center mt-2">
      <thead>
        <tr>
          <th>Faculty</th>
             <th>Profile</th>
          <th>Department</th>
            <th>Designation</th>
          <th>Qualification</th>
          <th>Email</th>
          <th><i class="fa-solid fa-ellipsis"></i></th>
         <th><i class="fa-solid fa-ellipsis"></i></th>

         
           
        </tr>
      </thead>
      <tbody>
     

   {allFaculty.map((fac)=>(
 <tr>
       <td>{fac.Fname}</td>
             <td><img
             style={{width:"100px",height:"100px"}}
             
             src={`${SERVER_URL}/uploads/${fac.profile}`} alt="" /></td>
          <td>{fac.dept}</td>
          <td>{fac.desg}</td>
          <td>{fac.qual}</td>
          <td>{fac.email}</td>
          <td ><button className='btn text-danger'><i class="fa-solid fa-trash"></i></button></td>
         <td><button className='btn text-gray'><i class="fa-solid fa-pen-to-square"></i></button></td>
     </tr>
   ))  }

     
 </tbody>   </Table> :
 <p className='text-center' style={{fontFamily:"playfair display",color:"#234"}}>No Faculties added yet</p>
}  </div>
            </div>   
        </div>
    </div>
  )
}

export default ManageDept