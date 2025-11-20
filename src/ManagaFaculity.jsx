import React, {  useContext, useEffect, useState } from 'react'
import SideBar from './Sidebar';
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';


function ManageFaculity() {

 
  return (
    <div>
        <div className='row'>
<div className='col-3'>
                <SideBar/>
            </div>
         <div className='col-9'>
        
  <h2 
    className='text-center' 
    style={{ 
      fontFamily: "Merriweather, serif", 
      fontWeight: 700,
      color: "#0B2D48",
      fontSize: "2.2rem"
    }}
  >
    Manage Faculty
  </h2>
            <div className="table-responsive" style={{ width: "90%", maxWidth: "800px" }}>
 <Table striped bordered hover className="text-center mt-2">
      <thead>
        <tr>
          <th>Property Name</th>
          <th>Owner</th>
          <th>Status</th>
          <th>Activity</th>
          <th>Date</th>
          <th><i class="fa-solid fa-ellipsis"></i></th>
         <th><i class="fa-solid fa-ellipsis"></i></th>

         
           
        </tr>
      </thead>
      <tbody>
     

        <tr>
          <td>6789</td>
          <td>
          67890

          </td>
          <td>67890</td>
          
        

     
          <td>
            <Link

      
      className="btn"
      style={{
     
        borderRadius: "10px",
    
        color: "#cba1a1ff",
        padding: "0.5rem 0",
        fontFamily: "Playfair Display",
        fontWeight: "600"
      }}
    >
      View 
    </Link>
          </td>
          <td>
               <button 
          
              className='btn text-danger'> <i class="fa-solid fa-trash"></i></button>
          </td>
           
          
        </tr>
     

     
 </tbody>   </Table>
  </div>
            </div>   
        </div>
    </div>
  )
}

export default ManageFaculity