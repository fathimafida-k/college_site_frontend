import React, {  useContext, useEffect, useState } from 'react'
import SideBar from './Sidebar';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
import { deleteCourseAPI, getAllCourseAPI } from './AllAPI';


function ManageProgram() {
 const [allCourses,setAllCourses] = useState([])
console.log(allCourses);

 useEffect(() => {
    getAllCourse()
 }, [])
 
 const getAllCourse=async()=>{
    const token = sessionStorage.getItem("token")
       if(token){
     const reqHeader={
         "content-type" : "application/json",
         "authorization": `Bearer ${token}`
     }
       
      
      try{
     
      const result=await getAllCourseAPI(reqHeader)
      console.log("got course",result);
      if(result.status==200){
    setAllCourses(result.data)
      }
  
       
      }
      catch(err){
        console.log(err);
        
      }}
   }
   const deleteCourse=async(id)=>{
      const token = sessionStorage.getItem("token")
        if(token){
      const reqHeader={
        "content-type" : "application/json",
         "authorization": `Bearer ${token}`
    }
    try{
      const result=await deleteCourseAPI(id,reqHeader)
      console.log("data...",result);
      if (result.status==200) {
          getAllCourse()      
      }
      

    }
    catch(err){
      console.log();
      
    }
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
    Manage Courses
  </h2>
  
 <div className='mt-5'>
    <Link to={'/add'}>
        <button style={{backgroundColor:"#1A3C8E",fontFamily:"poppins",color:"#F4C430"}} className='btn  fw-bold'>Add Course<i class="fa-solid fa-plus"></i></button></Link>
 </div>
            <div className="table-responsive mt-5" style={{ width: "90%", maxWidth: "800px" }}>
 {allCourses.length>0 ?  <Table striped bordered hover className="text-center mt-2">
      <thead>
        <tr>
          <th>Course Name</th>
          <th>Duration</th>
          <th>Fees</th>
          <th>View Details</th>
          <th><i class="fa-solid fa-ellipsis"></i></th>
         <th><i class="fa-solid fa-ellipsis"></i></th>

         
           
        </tr>
      </thead>
      <tbody>
     

      {allCourses.map((item)=>(
 <tr>
          <td>{item.Cname}</td>
          <td>{item?.duration}</td>
         
          <td>{item.fees}</td>
          
        

     
          <td>
            <Link

      to={`/programs/${item._id}`}
      className="btn"
      style={{
     
        borderRadius: "10px",
    
        color: "#09062fff",
        padding: "0.5rem 0",
        fontFamily: "Playfair Display",
        fontWeight: "600"
      }}
    >
      View <i class="fa-solid fa-arrow-right"></i>
    </Link>
          </td>
          <td>
               <button 
               onClick={()=>deleteCourse(item._id)}
          
              className='btn text-danger'> <i class="fa-solid fa-trash"></i></button>
          </td>

          <td>
          <Link to={`/edit/${item._id}`}>
            <button 
          
              className='btn '> <i class="fa-solid fa-pen-to-square"></i></button></Link>
          </td>
           
          
        </tr>
      )) 
     }

     
 </tbody>   </Table> :
 <div className='text-center text-gray'>No Courses Added Yet</div>
 } </div>
            </div>   
        </div>
    </div>
  )
}

export default ManageProgram