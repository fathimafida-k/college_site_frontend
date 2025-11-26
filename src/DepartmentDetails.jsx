import React from "react";

function DepartmentDetails() {
  return (
    <div style={{ backgroundColor: "#F7F9FC", padding: "3rem 2rem" }}>
      
      {/* Department Title */}
      <h2
        style={{
          fontFamily: "Merriweather",
          fontSize: "2rem",
          fontWeight: "700",
          color: "#1A3C8E",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        Department of Computer Science
      </h2>

      <hr style={{ width: "80%", margin: "0.5rem auto", borderColor: "#1A3C8E" }} />

      {/* Overview */}
      <section style={{ margin: "2rem 0", textAlign: "center" }}>
        <h4
          style={{
            color: "#1A3C8E",
            fontWeight: "600",
            marginBottom: "0.8rem",
          }}
        >
          Overview
        </h4>
        <p style={{ color: "#1B1B1B", maxWidth: "800px", margin: "auto" }}>
          The Department of Computer Science aims to provide high-quality education 
          in computing, programming, and technology. Our mission is to prepare 
          students for industry-ready careers and advanced learning.
        </p>
      </section>

 
      <section>
        <h4 style={{ color: "#1A3C8E", fontWeight: "600", marginBottom: "1rem" }}>
          Courses Offered
        </h4>

        <div className="row">
          <div className="col-lg-4 mb-3">
            <div
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderTop: "5px solid #F4C430",
              }}
            >
              <h5 style={{ color: "#1B1B1B", fontWeight: "600" }}>B.Sc Computer Science</h5>
              <p style={{ margin: 0, color: "#555" }}>3 Years</p>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <div
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderTop: "5px solid #F4C430",
              }}
            >
              <h5 style={{ color: "#1B1B1B", fontWeight: "600" }}>BCA</h5>
              <p style={{ margin: 0, color: "#555" }}>3 Years</p>
            </div>
          </div>

          <div className="col-lg-4 mb-3">
            <div
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "10px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                borderTop: "5px solid #F4C430",
              }}
            >
              <h5 style={{ color: "#1B1B1B", fontWeight: "600" }}>M.Sc Computer Science</h5>
              <p style={{ margin: 0, color: "#555" }}>2 Years</p>
            </div>
          </div>
        </div>
      </section>
{/* hod */}
<div className="d-flex justify-content-center flex-column" style={{ marginTop: "2rem" }}>
        <h4 className="text-center" style={{ color: "#1A3C8E", fontWeight: "600", marginBottom: "1rem" }}>
          Our HOD
        </h4>

        <div className="row d-flex justify-content-center">
          <div className="col-lg-3 col-md-6 mb-4">
            <div
              style={{
              
                padding: "1rem",
          
                textAlign: "center",
             
              }}
            >
              <img
                src="https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737187.jpg"
                alt="Faculty"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "0.8rem",
                  border: "3px solid #F4C430",
                }}
              />
              <h6 style={{ fontWeight: "700", color: "#1B1B1B" }}>Dr. Ayesha Rahman</h6>
             
            </div>
          </div>

        </div>
      </div>
{/* hod */}
    
      <div style={{ marginTop: "2rem" }}>
        <h4 style={{ color: "#1A3C8E", fontWeight: "600", marginBottom: "1rem" }}>
          Our Faculty
        </h4>

        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <div
              style={{
                background: "#fff",
                padding: "1rem",
                borderRadius: "12px",
                textAlign: "center",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <img
                src="https://img.freepik.com/free-photo/portrait-professor-work-educational-system_23-2151737187.jpg"
                alt="Faculty"
                style={{
                  width: "120px",
                  height: "120px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "0.8rem",
                  border: "3px solid #F4C430",
                }}
              />
              <h6 style={{ fontWeight: "700", color: "#1B1B1B" }}>Dr. Ayesha Rahman</h6>
              <p style={{ margin: 0, color: "#1A3C8E" }}>Assistant Professor</p>
            </div>
          </div>

        </div>
      </div>


  
    </div>
  );
}

export default DepartmentDetails;
