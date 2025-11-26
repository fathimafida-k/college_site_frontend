import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import {  getHomeCourseAPI } from "./AllAPI";

function Header() {


    const [allCourses,setAllCourses] = useState([])
    console.log(allCourses);
    
     useEffect(() => {
        getAllCourse()
     }, [])
     
     const getAllCourse=async()=>{
    
          
       
          
          try{
     
          const result=await getHomeCourseAPI()
          console.log("header course",result);
          if(result.status==200){
        setAllCourses(result.data)
          }
      
           
          }
          catch(err){
            console.log(err);
            
          }
       }
     
  return (
    <Navbar
      expand="lg"
      style={{
        padding: "0.7rem 2rem",
        background: "#F7F9FC",
        boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
      }}
      fixed="top"
    >
      <Container fluid className="d-flex align-items-center">

        <div className="d-flex align-items-center">
          <Link to="/" className="d-flex align-items-center" style={{ textDecoration: "none" }}>
            <h2 style={{color:"#1A3C8E",fontSize:"1.5rem",fontFamily:"Monteserrat"}}><i class="fa-solid fa-graduation-cap"></i>Raynott College</h2>
          </Link>
        </div>

        <Navbar.Toggle aria-controls="main-navbar" className="ms-auto" />

        <Navbar.Collapse
          id="main-navbar"
          className="justify-content-center"
          style={{ flexGrow: 1 }}
        >
          <Nav style={{ gap: "2rem", fontWeight: 500 }}>

            <Nav.Link as={Link} to="/" style={{ color: "#1B1B1B" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#1B1B1B" }}>
              About
            </Nav.Link>
       

            {/* Programs Dropdown */}
         <NavDropdown title="Programs" id="programs-dropdown" style={{ color: "#1B1B1B" }}>
  {allCourses.length > 0 ? (
    allCourses.map((course) => (
      <NavDropdown.Item
        key={course._id} 
        as={Link}
        to={`/programs/${course.slug || course._id}`}
      >
        {course.Cname} 
      </NavDropdown.Item>
    ))
  ) : (
    <NavDropdown.Item disabled>Loading courses...</NavDropdown.Item>
  )}
</NavDropdown>


       
            
            <Nav.Link as={Link} to="/faculty" style={{ color: "#1B1B1B" }}>
             Faculties
            </Nav.Link>
              
                
             <Nav.Link as={Link} to="/login" style={{ color: "#1B1B1B" }}>
            <i class="fa-solid fa-lock"></i>Admin
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

        <div>
          <Link
            to="/admission"
            className="btn"
            style={{
              backgroundColor: "#F4C430",
              color: "white",
              padding: "0.45rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "600",
              letterSpacing: "0.3px",
            }}
          >
          Apply Now
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
