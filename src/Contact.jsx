import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Footer from "./Footer";

function Contact() {
  return (
    <div>
     
<Header/>


  <div className="d-flex align-items-center justify-content-center flex-column" style={{ paddingTop: "100px", backgroundColor: "#0b0336ff" , height:"17rem" }}>
  <h2  
      style={{ fontFamily: "Merriweather, serif", fontWeight: 700, color: "white", fontSize: "2.2rem" }}>
    Contact Us
  </h2>
  <p className="mb-5" style={{fontFamily:"lora",color:"white"}}>Get in touch with us for inquiries, feedback, or to learn more about our programs and initiatives</p>
</div>


    <div
        style={{
          padding: "4rem 2rem",
          display: "flex",
          justifyContent: "center",
          gap: "3rem",
          flexWrap: "wrap",
        }}
      >
        <div
          style={{
            maxWidth: "300px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#eece2fff", marginBottom: "1rem",fontFamily:"lora" }}>Email</h3>
          <p><i class="fa-solid fa-envelope"></i>hope@brightfutures.org</p>
        </div>

        <div
          style={{
            maxWidth: "300px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#eece2fff", marginBottom: "1rem",fontFamily:"lora"  }}>Phone</h3>
          <p><i class="fa-solid fa-phone"></i>+91 9875785467</p>
        </div>

        <div
          style={{
            maxWidth: "300px",
            textAlign: "center",
            backgroundColor: "#f9f9f9",
            padding: "2rem",
            borderRadius: "10px",
            boxShadow: "0 4px 15px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ color: "#eece2fff", marginBottom: "1rem",fontFamily:"lora"  }}>Address</h3>
          <p><i class="fa-solid fa-location-dot"></i>123, Hope Street, Kerala, India</p>
        </div>
      </div>
   
      
      <div
        style={{
          padding: "4rem 2rem",
          backgroundColor: "#f0f0f0",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <form
          style={{
            maxWidth: "500px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "1.5rem",
            backgroundColor: "white",
            padding: "3rem",
            borderRadius: "10px",
            boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
          }}
        >
          <h3 style={{ textAlign: "center", color: "#12105aff", marginBottom: "1rem" }}>
          Get in Touch
          </h3>
          <input
            type="text"
            placeholder="Your Name"
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
          <input
            type="email"
            placeholder="Your Email"
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              border: "1px solid #ccc",
            }}
          />
      
          <button
            type="submit"
            style={{
              padding: "0.8rem",
              borderRadius: "5px",
              border: "none",
              backgroundColor: "#0b0336ff",
              color: "white",
              fontWeight: "bold",
              cursor: "pointer",
            }}
          >
            Submit
          </button>
        </form>
      </div>
            <Footer/>
    </div>
  );
}

export default Contact;
