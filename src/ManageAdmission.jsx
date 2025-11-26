import React, { useEffect, useState } from 'react'
import SideBar from './Sidebar'
import { Link, useSearchParams } from 'react-router-dom'
import Table from 'react-bootstrap/Table';
import { getAdmisssionAPI } from './AllAPI';
function ManageAdmission() {
const [admission,setAdmission] = useState([])
          console.log(admission);
          
            
        
            const getAdmission=async()=>{
                 //reqheader

              const token = sessionStorage.getItem("token")
              if(token){
             const reqHeader = {
            "content-type":"application/json",
            "authorization":`Bearer ${token}`
          }
        
            try{

           const result = await getAdmisssionAPI(reqHeader)
           console.log("get admission",result);
           if(result.status==200){
            setAdmission(result.data)
           }
      
           
            }
            catch(err){
                console.log(err);
                
            }
       
              } 
              else{
                console.log("Token missing");
                
              }  
            }
            useEffect(() => {
             getAdmission()
            }, [])

     

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
   Submitted Applications
  </h2>
  
 <div className='mt-5'>

 </div>
            <div className="table-responsive mt-5" style={{ width: "100%"}}>
 {admission?.length>0 ? <Table striped bordered hover className="text-center mt-2">
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Course</th>
          <th>Phone</th>
          <th>Email</th>
          <th>Qualification</th>
         <th>Grade/Percentage</th>
           <th>Address</th>

         
           
        </tr>
      </thead>
      <tbody>
     

    
{admission.map((ad)=>(
    <tr>
          <td>{ad.Sname}</td>
          <td>{ad.course}</td>
          <td>{ad.phone}</td>
          <td>{ad.mail}</td>
          <td>{ad.qualification}</td>
          <td>{ad.grade}</td>

          <td>{ad.address}</td>
          </tr>
)) }
    
     

     
 </tbody>   </Table> :
 <div className='text-center text-gray'>No Courses Added Yet</div>
 } </div>
            </div>   
        </div>
    </div>

  )
}

export default ManageAdmission