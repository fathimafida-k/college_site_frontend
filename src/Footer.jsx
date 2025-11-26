import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer style={{ backgroundColor: "#102A63", color: "#ecf0f1", padding: "3rem 1rem" }}>
      <div className="container">
        <div className="row">

       
          <div className="col-lg-4 mb-4">
             <h2 style={{color:"#F4C430",fontSize:"1.5rem",fontFamily:"Monteserrat"}}><i class="fa-solid fa-graduation-cap"></i>Raynott College</h2>
           
            <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#cdd3d8" }}>
              A premier institution known for academic excellence, research, innovation, and holistic development.
              Empowering students to achieve their dreams since 1990.
            </p>
          </div>

       
          <div className="col-lg-4 mb-4">
            <h5 style={{ fontFamily: "Merriweather, serif", fontWeight: "600", color: "#F4C430" }}>Quick Links</h5>
            <Link to="/" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>Home</Link>
            <Link to="/departments" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>Departments</Link>
            <Link to="/admissions" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>Admissions</Link>
            <Link to="/contact" style={{ display: "block", color: "#ecf0f1", margin: "0.4rem 0", textDecoration: "none" }}>Contact</Link>
          </div>

          {/* Newsletter + Social */}
          <div className="col-lg-4 mb-4">
            <h5 style={{ fontFamily: "Merriweather, serif", fontWeight: "600", color: "#F4C430" }}>Stay Updated</h5>
            <p style={{ fontFamily: "Inter", fontSize: "0.95rem", color: "#cdd3d8" }}>
              Subscribe to our newsletter for college updates, events, and notices.
            </p>

            <div style={{ display: "flex", gap: "0.5rem", marginBottom: "1rem" }}>
              <input 
                type="email" 
                placeholder="Your Email" 
                style={{ 
                  padding: "0.5rem", 
                  borderRadius: "5px", 
                  border: "none", 
                  flex: 1 
                }} 
              />
              <button 
                style={{ 
                  backgroundColor: "#ffffffff", 
                  color: "#050404ff", 
                  border: "none", 
                  borderRadius: "5px", 
                  padding: "0.5rem 1rem", 
                  cursor: "pointer",
                  fontWeight: "600"
                }}
              >
                <i class="fa-solid fa-arrow-right"></i>
              </button>
            </div>

            <div style={{ display: "flex", gap: "1rem", fontSize: "1.5rem", marginTop: "0.5rem" }}>
              <a href="#"><i className="fab fa-facebook" style={{ color: "#ecf0f1" }}></i></a>
              <a href="#"><i className="fab fa-instagram" style={{ color: "#ecf0f1" }}></i></a>
              <a href="#"><i className="fab fa-linkedin" style={{ color: "#ecf0f1" }}></i></a>
              <a href="#"><i className="fas fa-phone" style={{ color: "#ecf0f1" }}></i></a>
            </div>
          </div>

        </div>

        <hr style={{ borderColor: "#46647a" }} />

     

      </div>
    </footer>
  );
}

export default Footer;
