import React, { useEffect, useState } from 'react';
import Header from './Header';
import { getfacultyAPI } from './AllAPI';
import SERVER_URL from './SERVER_URL';

function Faculty() {
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
    <div style={{ backgroundColor: "#F7F9FC", minHeight: "100vh" }}>
      <Header />
      <div style={{ paddingTop: "6rem", textAlign: "center" }}>
        <h2
          style={{
            fontFamily: "Merriweather, serif",
            fontWeight: 700,
            color: "#1A3C8E",
            fontSize: "2.5rem",
            marginBottom: "0.5rem",
          }}
        >
          Meet Our Faculties
        </h2>
        <hr
          style={{
            width: "6rem",
            height: "4px",
            backgroundColor: "#F4C430",
            border: "none",
            margin: "0.5rem auto 2rem",
          }}
        />
      </div>

      <div className="container">
        {allFaculty.map((faculty, index) => (
          <div className="row align-items-center mb-5" key={index}>
            <div className="col-lg-4 text-center mb-3 mb-lg-0">
              <img
                 src={`${SERVER_URL}/uploads/${faculty.profile}`}
                alt={faculty.Fname}
                style={{
                  borderRadius: "50%",
                  height: "240px",
                  width: "240px",
                  objectFit: "cover",
                  border: "3px solid #F4C430",
                  boxShadow: "0 6px 20px rgba(26, 60, 142, 0.25)",
                }}
              />
            </div>
            <div className="col-lg-8">
              <h3
                style={{
                  fontFamily: "Merriweather, serif",
                  fontSize: "1.8rem",
                  fontWeight: 700,
                  color: "#1A3C8E",
                  marginBottom: "0.3rem",
                }}
              >
                {faculty.Fname}
              </h3>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "1.1rem",
                  fontWeight: 600,
                  color: "#1B1B1B",
                  marginBottom: "0.3rem",
                }}
              >
                {faculty.dept}
              </p>
              <p
                style={{
                  fontFamily: "Inter, sans-serif",
                  fontStyle: "italic",
                  color: "#1B1B1B",
                  marginBottom: "0.5rem",
                }}
              >
                {faculty.desg}
              </p>
              <p style={{ margin: "0.2rem 0", color: "#1B1B1B" }}>
                <strong>Experience:</strong> {faculty.exp}
              </p>
              <p style={{ margin: "0.2rem 0", color: "#1B1B1B" }}>
                <strong>Qualification:</strong> {faculty.qual}
              </p>
             
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faculty;
