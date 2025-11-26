import React, { useState } from "react";
import emblem from "./assets/emblem.png";
import { Link, useNavigate } from "react-router-dom";


function SideBar() {
  const role = "admin"
const navigate = useNavigate()
  const handleLogout=()=>{
    sessionStorage.clear()
    navigate('/')
  }
  const [isOpen, setIsOpen] = useState(false);
  

  const linkStyle = {
    color: "white",
    border:"1px solid white",
    display: "flex",
    alignItems: "center",
    gap: "10px",
    width: "100%",
    textDecoration: "none",
    padding: "8px 16px",
    borderRadius: "8px",
    transition: "0.3s",
  };

  return (
    <>
  
      <button className="menu-btn"
        onClick={() => setIsOpen(!isOpen)}
        style={{
          position: "fixed",
          top: "15px",
          left: "15px",
          background: "none",
          border: "none",
          color: "#153366",
          fontSize: "1.8rem",
          zIndex: "1100",
          cursor: "pointer",
        }}
      >
        <i className="fa-solid fa-bars"></i>
      </button>

   
    <div 
  className={`sidebar d-flex flex-column align-items-center ${isOpen ? "open" : ""}`}
  style={{
    backgroundColor: "#153366",
    height: "100vh",
    width: "250px",
    padding: "1.5rem 1rem",
    color: "#fff",
    position: "fixed",
    top: 0,
    transition: "left 0.3s ease",
    zIndex: "1000",
   
  }}
>

      

        <div>
           <h4 style={{color:"#F4C430",fontSize:"1.5rem",fontFamily:"Monteserrat"}}><i class="fa-solid fa-graduation-cap"></i>Raynott College</h4>
        </div>

      
        <div className="mt-5" style={{ width: "100%" }}>
         

            <>
               <Link  className="mt-3"  to={'/program-manage'} style={linkStyle}>
             <i class="fa-solid fa-book"></i> Manage Courses
              </Link>
                 <Link  className="mt-3"  to={'/faculty-manage'} style={linkStyle}>
             <i class="fa-solid fa-chalkboard-user"></i> Manage Faculty
              </Link>
           
                  <Link  className="mt-3"  to={'/admission-manage'} style={linkStyle}>
            <i class="fa-solid fa-user"></i> Student Applications 
              </Link>
            
          
          
           
             
            
            </>
         

          {role === "faculty" && (
            <>
 
                           <Link to={'/'} style={linkStyle}>
            <i className="fa-solid fa-grip"></i> Dashboard
            </Link>
              
              <Link to="/" style={linkStyle}>
                <i className="fa-solid fa-magnifying-glass"></i> Assigned Course
              </Link>
              <Link to={"/"} style={linkStyle}>
                <i className="fa-solid fa-house"></i> My Properties
              </Link>
              <Link to={'/'} style={linkStyle}>
                <i className="fa-solid fa-plus"></i> Add New
              </Link>
                 <Link to={'/'} style={linkStyle}>
               <i class="fa-solid fa-question"></i> Enquiries
              </Link>

          
              {/* <Link to={"/wishlist"} style={linkStyle}>
                <i className="fa-solid fa-heart"></i>Favourites
              </Link>
            */}
            
            </>
          )}

        

          
      <button onClick={handleLogout}  className="mt-3"   style={{ ...linkStyle, background: "none", border: "none" }}>
  <i className="fa-solid fa-right-from-bracket"></i> Logout
</button>

        </div>
      </div>

   
    </>
  );
}

export default SideBar;
