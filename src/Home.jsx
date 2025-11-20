import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";

function Home() {
  return (
    <>
      <Header />

      <div className="hero">
        <div className="hero-content">
          <h1>"Shaping Leaders for Tomorrow’s World"</h1>
          <p>A premier institution dedicated to empowering students with world-class education, cutting-edge research, and a thriving campus culture.</p>
{/* 
          <button className="hero-btn mb-1">Apply Now</button>
           <button className="hero-btn mb-1">Explore Programs</button> */}
        </div>
      </div>

      {/* stat */}




<div className='mt-5 w-100' 
  style={{
    background: "#F4F6F9",
    padding: "55px 0",
  }}
>

  <h2 
    className='text-center mb-5' 
    style={{ 
      fontFamily: "Merriweather, serif", 
      fontWeight: 700,
      color: "#0B2D48",
      fontSize: "2.2rem"
    }}
  >
    Our Achievements
  </h2>

  <div className="container">

    <div className="row justify-content-center">

      {/* === DATA ARRAY FOR CARDS === */}
      {[
        {
          count: "10,000+",
          title: "Graduated Students",
          icon: "fa-solid fa-graduation-cap",
          desc: "Over 10,000 students have successfully completed their education and built impactful careers worldwide."
        },
        {
          count: "150+",
          title: "Qualified Faculty",
          icon: "fa-solid fa-user-tie",
          desc: "Our experienced professors and researchers guide students with excellence and real-world expertise."
        },
        {
          count: "50+",
          title: "Academic Programs",
          icon: "fa-solid fa-book",
          desc: "Offering a wide range of undergraduate and postgraduate programs across various disciplines."
        },
        {
          count: "300+",
          title: "Research Publications",
          icon: "fa-solid fa-flask",
          desc: "Our research teams have contributed significantly to global academic and scientific communities."
        },
        {
          count: "25+",
          title: "Student Clubs",
          icon: "fa-solid fa-users",
          desc: "A vibrant campus with technical, cultural, and sports clubs that enhance students’ creativity and skills."
        },
        {
          count: "120+",
          title: "Placement Partners",
          icon: "fa-solid fa-handshake",
          desc: "Collaborations with top companies ensure excellent placement opportunities for graduating students."
        }
      ].map((item, index) => (
        
        <div key={index} className='col-12 col-sm-6 col-md-6 col-lg-4 mb-4'>
          <div style={{
            background: "#ffffff",
            height: "100%",
            minHeight: "16rem",
            borderRadius: "18px",
            padding: "1.5rem",
            boxShadow: "0 8px 26px rgba(0,0,0,0.12)"
          }}>

            <h1 
              className='text-center mt-3'
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                color: "#0B2D48",
                fontSize: "2rem"
              }}
            >
              {item.count}
            </h1>

            <h3 
              className='text-center'
              style={{
                fontFamily: "Merriweather, serif",
                fontSize: "1.1rem",
                color: "#CFA34A",
                marginTop: "0.6rem"
              }}
            >
              <i className={`${item.icon} me-2`}></i> 
              {item.title}
            </h3>

            <p 
              className='text-center'
              style={{
                fontFamily: "Inter",
                color: "#4B5563",
                fontSize: "0.95rem",
                marginTop: "0.7rem",
                lineHeight: 1.6
              }}
            >
              {item.desc}
            </p>

          </div>
        </div>

      ))}

    </div>

  </div>
</div>

      {/* about */}

<div className="mt-5" style={{ padding:"0 2rem" }}>
  
  <div className='row mt-5'>
    
    {/* IMAGE */}
    <div className='col-lg-6'>
      <img 
        className='img-fluid ms-2 rounded shadow'
        style={{ width:"100%", height:"30rem", objectFit:"cover" }}
        src="https://media.istockphoto.com/id/1316808714/photo/four-young-students-study-in-the-school-library-female-student-using-laptop-for-researching.jpg?s=612x612&w=0&k=20&c=h7rjGZTcWRKKTYf7mNOHwj-J-k8AVp5apXPf6coGnX8="
        alt="College Campus"
      />
    </div>

    {/* TEXT */}
    <div className='col-lg-6'>
      
      <h2 style={{ 
        fontFamily:'Playfair Display', 
        color:'#1a237e', 
        fontWeight:'600' 
      }}>
        Building Excellence Through Quality Education
      </h2>

      <div style={{ 
        color:"#555555", 
        fontFamily:"Inter", 
        textAlign:"justify", 
        lineHeight:"1.7" 
      }}>
        
        <p>
          At <b>BrightMind College</b>, we are committed to shaping the next 
          generation of leaders, innovators, and professionals. With a 
          student-centric learning environment, our institution focuses on 
          academic excellence, practical exposure, and holistic development.
        </p>

        <p>
          Our programs are designed to equip students with industry-relevant 
          skills, modern technical knowledge, and strong problem-solving abilities. 
          We aim to bridge the gap between classroom learning and real-world application.
        </p>

        <p>
          With experienced faculty, state-of-the-art infrastructure, research 
          opportunities, and active campus life, BrightMind College ensures that 
          every student grows both personally and professionally.
        </p>

        <p>
          Join us as we create a vibrant community of learners who aspire to 
          make an impact in the world.
        </p>

      </div>

      {/* BUTTON */}
      <Link to={'/about'}>
        <button  
          style={{ 
            marginTop:"1.5rem",
            padding:"0.9rem 1.8rem",
            backgroundColor:"#1565c0",
            border:"none",
            borderRadius:"0.5rem",
            fontSize:"1rem",
            color:"white",
            fontWeight:600,
            letterSpacing:"0.5px",
            boxShadow:"0 4px 12px rgba(0,0,0,0.2)"
          }}>
          Learn More
        </button>
      </Link>

    </div>

  </div>
</div>
      {/*  */}

   
      {/* dept */}
      <div className='mt-5'>
  <h2 className="text-center mb-3"
    style={{ fontFamily: "Playfair Display", fontWeight: 600, color: "#1E3A8A" }}>
    Our Departments
  </h2>

  <h6 className='text-center' style={{ color:"#555555", fontFamily:"Inter" }}>
    Explore our top undergraduate & postgraduate programs designed for future-ready careers
  </h6>

  <div className="container mt-4">
    <div className="row g-4 justify-content-center">

      {/* Computer Science */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <Card className="h-100 shadow-sm border-0" style={{ borderRadius:"12px" }}>
          <Card.Img style={{ height:"16rem", objectFit:"cover" }}
            src="https://www.sirtbhopal.ac.in/assets/images/blogs/exploring-the-in-demand-specializations-in-computer-science-engineering.webp"
          />
          <Card.Body>
            <h4 style={{ fontFamily: "Playfair Display", color: "#1E3A8A" }}>Computer Science</h4>
            <p style={{ color:"#555", fontFamily:"Inter" }}>
              Learn programming, AI, databases, and full-stack development with modern labs.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Commerce */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <Card className="h-100 shadow-sm border-0" style={{ borderRadius:"12px" }}>
          <Card.Img style={{ height:"16rem", objectFit:"cover" }}
            src="https://media.istockphoto.com/id/942682414/photo/businessman-working-in-office-with-using-calculator-and-laptop-concept-finance-and-accounting.jpg?s=612x612&w=0&k=20&c=HGBNg6WJ166u8IF8OO7xUYSqGgaxyfiuNRUyd5XabWo="
          />
          <Card.Body>
            <h4 style={{ fontFamily: "Playfair Display", color: "#1E3A8A" }}>Commerce</h4>
            <p style={{ color:"#555", fontFamily:"Inter" }}>
              Develop skills in finance, taxation, banking, and business management.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Science */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <Card className="h-100 shadow-sm border-0" style={{ borderRadius:"12px" }}>
          <Card.Img style={{ height:"16rem", objectFit:"cover" }}
            src="https://static.vecteezy.com/system/resources/thumbnails/072/458/620/small/science-experiment-with-glowing-liquid-in-beaker-research-and-development-photo.jpg"
          />
          <Card.Body>
            <h4 style={{ fontFamily: "Playfair Display", color: "#1E3A8A" }}>Science</h4>
            <p style={{ color:"#555", fontFamily:"Inter" }}>
              Study Physics, Chemistry, Mathematics & Biology with advanced lab facilities.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Management */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <Card className="h-100 shadow-sm border-0" style={{ borderRadius:"12px" }}>
          <Card.Img style={{ height:"16rem", objectFit:"cover" }}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8HmUSyhptJSAceCDN6-udJmnWkIAvloz2Aw&s"
          />
          <Card.Body>
            <h4 style={{ fontFamily: "Playfair Display", color: "#1E3A8A" }}>Management</h4>
            <p style={{ color:"#555", fontFamily:"Inter" }}>
              Learn leadership, entrepreneurship, HR, marketing & business strategy.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Humanities */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <Card className="h-100 shadow-sm border-0" style={{ borderRadius:"12px" }}>
          <Card.Img style={{ height:"16rem", objectFit:"cover" }}
            src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f"
          />
          <Card.Body>
            <h4 style={{ fontFamily: "Playfair Display", color: "#1E3A8A" }}>Humanities</h4>
            <p style={{ color:"#555", fontFamily:"Inter" }}>
              Explore Psychology, Sociology, History, English Literature & Social Studies.
            </p>
          </Card.Body>
        </Card>
      </div>

      {/* Biotechnology */}
      <div className="col-12 col-sm-6 col-md-4 col-lg-4">
        <Card className="h-100 shadow-sm border-0" style={{ borderRadius:"12px" }}>
          <Card.Img style={{ height:"16rem", objectFit:"cover" }}
            src="https://genflowbio.com/wp-content/uploads/2021/11/Biotechnology-1024x683.jpg"
          />
          <Card.Body>
            <h4 style={{ fontFamily: "Playfair Display", color: "#1E3A8A" }}>Biotechnology</h4>
            <p style={{ color:"#555", fontFamily:"Inter" }}>
              Study genetics, microbiology & biochemical engineering through real-time labs.
            </p>
          </Card.Body>
        </Card>
      </div>

    </div>
  </div>
</div>

      {/*  */}
      {/* facility */}
      <div className="mt-5" style={{ padding: "0 2rem" }}>
  <h2
    className="text-center mb-4"
    style={{
      fontFamily: "Playfair Display",
      fontWeight: 600,
      color: "#1E3A8A",
    }}
  >
    Our Facilities
  </h2>

  <p
    className="text-center mb-5"
    style={{
      maxWidth: "650px",
      margin: "0 auto",
      fontFamily: "Inter",
      color: "#555",
    }}
  >
    Our campus offers world-class facilities to ensure students learn, grow, and
    succeed in a supportive environment.
  </p>

  <div className="container">
    <div className="row justify-content-center">

      {/* Facility 1 — Library */}
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <i className="fa-solid fa-book fa-2x" style={{ color: "#1E3A8A" }}></i>
          <h4
            style={{
              marginTop: "1rem",
              fontFamily: "Playfair Display",
              color: "#1E3A8A",
            }}
          >
            Central Library
          </h4>
          <p style={{ fontFamily: "Inter", color: "#555" }}>
            A fully digitized library with 10,000+ books, journals, and quiet
            study spaces.
          </p>
        </div>
      </div>

      {/* Facility 2 — Computer Lab */}
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <i
            className="fa-solid fa-desktop fa-2x"
            style={{ color: "#1E3A8A" }}
          ></i>
          <h4
            style={{
              marginTop: "1rem",
              fontFamily: "Playfair Display",
              color: "#1E3A8A",
            }}
          >
            Computer Lab
          </h4>
          <p style={{ fontFamily: "Inter", color: "#555" }}>
            High-speed internet and modern systems for coding, designing, and
            research work.
          </p>
        </div>
      </div>

      {/* Facility 3 — Science Lab */}
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <i
            className="fa-solid fa-flask-vial fa-2x"
            style={{ color: "#1E3A8A" }}
          ></i>
          <h4
            style={{
              marginTop: "1rem",
              fontFamily: "Playfair Display",
              color: "#1E3A8A",
            }}
          >
            Science Laboratories
          </h4>
          <p style={{ fontFamily: "Inter", color: "#555" }}>
            Fully equipped physics, chemistry, and biology labs for practical
            learning.
          </p>
        </div>
      </div>

      {/* Facility 4 — Sports */}
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <i
            className="fa-solid fa-basketball fa-2x"
            style={{ color: "#1E3A8A" }}
          ></i>
          <h4
            style={{
              marginTop: "1rem",
              fontFamily: "Playfair Display",
              color: "#1E3A8A",
            }}
          >
            Sports & Fitness
          </h4>
          <p style={{ fontFamily: "Inter", color: "#555" }}>
            Indoor and outdoor playgrounds, gym area, and fitness training.
          </p>
        </div>
      </div>

      {/* Facility 5 — Auditorium */}
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <i
            className="fa-solid fa-microphone-lines fa-2x"
            style={{ color: "#1E3A8A" }}
          ></i>
          <h4
            style={{
              marginTop: "1rem",
              fontFamily: "Playfair Display",
              color: "#1E3A8A",
            }}
          >
            Auditorium
          </h4>
          <p style={{ fontFamily: "Inter", color: "#555" }}>
            A modern auditorium for events, seminars, cultural programs, and
            presentations.
          </p>
        </div>
      </div>

      {/* Facility 6 — Cafeteria */}
      <div className="col-12 col-md-6 col-lg-4 mb-4">
        <div
          style={{
            background: "white",
            borderRadius: "20px",
            padding: "1.5rem",
            boxShadow: "0 8px 20px rgba(0,0,0,0.08)",
            textAlign: "center",
          }}
        >
          <i
            className="fa-solid fa-utensils fa-2x"
            style={{ color: "#1E3A8A" }}
          ></i>
          <h4
            style={{
              marginTop: "1rem",
              fontFamily: "Playfair Display",
              color: "#1E3A8A",
            }}
          >
            Cafeteria
          </h4>
          <p style={{ fontFamily: "Inter", color: "#555" }}>
            Hygienic and affordable food options in a clean and friendly
            environment.
          </p>
        </div>
      </div>
    </div>
  </div>
</div>

      {/*  */}
            <Footer/>
    </>
  );
}

export default Home;
