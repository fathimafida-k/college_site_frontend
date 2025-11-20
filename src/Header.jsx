import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emblem from "./assets/emblem.png";
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
        background: "white",
        boxShadow: "0 1px 6px rgba(0,0,0,0.1)",
      }}
      fixed="top"
    >
      <Container fluid className="d-flex align-items-center">

        <div className="d-flex align-items-center">
          <Link to="/" className="d-flex align-items-center" style={{ textDecoration: "none" }}>
            <img
              src={emblem}
              alt="Emblem"
              style={{ height: "65px", width: "auto" }}
            />
          </Link>
        </div>

        <Navbar.Toggle aria-controls="main-navbar" className="ms-auto" />

        <Navbar.Collapse
          id="main-navbar"
          className="justify-content-center"
          style={{ flexGrow: 1 }}
        >
          <Nav style={{ gap: "2rem", fontWeight: 500 }}>

            <Nav.Link as={Link} to="/" style={{ color: "#222" }}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/about" style={{ color: "#222" }}>
              About
            </Nav.Link>
       

            {/* Programs Dropdown */}
         <NavDropdown title="Programs" id="programs-dropdown" style={{ color: "#222" }}>
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


            <Nav.Link as={Link} to="/contact" style={{ color: "#222" }}>
              Contact
            </Nav.Link>

          </Nav>
        </Navbar.Collapse>

        <div>
          <Link
            to="/login"
            className="btn"
            style={{
              backgroundColor: "#003366",
              color: "white",
              padding: "0.45rem 1.2rem",
              borderRadius: "6px",
              fontWeight: "600",
              letterSpacing: "0.3px",
            }}
          >
            Login
          </Link>
        </div>
      </Container>
    </Navbar>
  );
}

export default Header;
