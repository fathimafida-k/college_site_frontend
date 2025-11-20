import React from 'react'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
import SideBar from './Sidebar';
import Footer from './Footer';
import Table from 'react-bootstrap/Table';

function Daashboard() {
  return (
    <>
    <div className='row'>
      <div className='col-3'>
        <SideBar/>
        </div>  
      <div className='col-9'>
  {/* card */}
    <div className='mt-5 w-100' style={{  padding: "3rem 0" }}>

 

  <div className='container'>
    <div className='row justify-content-around'>
 
      <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-4'>
        <div style={{ height: "100%", minHeight:"15rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "30px", padding: "1rem" }}>
          <h1 className='text-center mt-4' style={{ fontFamily: "Poppins", color: "#040623ff" }}>500<i className="fa-solid fa-plus"></i></h1>
          <h3 className='text-center' style={{ fontFamily: "Lora", color: "#0a0944ff" }}>Students</h3>
         
        </div>
      </div>

        <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-4'>
        <div style={{ height: "100%", minHeight:"15rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "30px", padding: "1rem" }}>
          <h1 className='text-center mt-4' style={{ fontFamily: "Poppins", color: "#040623ff" }}>70<i className="fa-solid fa-plus"></i></h1>
          <h3 className='text-center' style={{ fontFamily: "Lora", color: "#0a0944ff" }}>Faculties</h3>
         
        </div>
      </div>

        <div className='col-12 col-sm-6 col-md-6 col-lg-3 mb-4'>
        <div style={{ height: "100%", minHeight:"15rem", boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", borderRadius: "30px", padding: "1rem" }}>
          <h1 className='text-center mt-4' style={{ fontFamily: "Poppins", color: "#040623ff" }}>500<i className="fa-solid fa-plus"></i></h1>
          <h3 className='text-center' style={{ fontFamily: "Lora", color: "#0a0944ff" }}>Programs</h3>
         
        </div>
      </div>

  
     
    </div>
  </div>
</div>

  {/* card */}
           <div className='mt-5'>
            <h3 className='text-center ' style={{fontFamily:"Playfair Display ", color:"rgba(24, 61, 32, 1)"}}>Recent Activity</h3>
    <div className="d-flex justify-content-center align-items-center">
  <div className="table-responsive" style={{ width: "90%", maxWidth: "800px" }}>
   
   
 
         <Table striped bordered hover className="text-center mt-2">
      <thead>
        <tr>
          <th>Property Name</th>
          <th>Owner</th>
          <th>Status</th>
          <th>Activity</th>
          <th>Date</th>
         
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>tyhuikol</td>
          <td>
          ghjkl

          </td>
          <td>fghjk</td>
          
         
         
        </tr>
      </tbody>  
        </Table>
     


  </div>

</div>

           </div>
        

      </div>
      
    </div>

     </>
  )
}

export default Daashboard