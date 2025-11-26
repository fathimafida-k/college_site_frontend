import React from "react";
import Header from "./Header";
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Footer from "./Footer";
import DepartmentCard from "./DepartmentCard";

function Home() {
  const departments=[
        {
          img:"https://www.sirtbhopal.ac.in/assets/images/blogs/exploring-the-in-demand-specializations-in-computer-science-engineering.webp",
          name:"Computer Science",
          desc: "A department dedicated to computing, software development, and innovative technological."
        },
        {
          
          img: "https://snu.edu.in/site/assets/files/11901/86cb4198-f490-4f56-a25f-8399a039edf4.1600x0.webp",
          name:"English",
          desc: "A department focused on business, finance, accounting, and modern commercial practices."
        },
       {
          
          img: "https://stcyrils.ac.in/content/uploads/IMG-20240819-WA0024.jpg",
          name:"Commerce",
          desc: "A department dedicated to the study of language, literature, and effective communication"
        },
       
         {
          
          img: " https://gonitsora.com/content/images/wordpress/2014/03/15E43A6F-3941-471A-BF4A81AECDC8C8AA_source.jpg",
          name:"Mathematics",
          desc: "Dedicated to the study of numbers, logic, and mathematical problem-solving"
        },
          {
          img: " https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg",
          name:"Physics",
          desc: "Explores the fundamental laws of nature through theory, experimentation, and scientific inquiry"
        },
      {
          img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWz_tIgvQXPAaSmvYa7CqZo_biaRK9D_O8uA&s",
          name:"History",
          desc: "A department committed to understanding past civilizations, cultures, and historical events"
        },
          {
          img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8fPlIAKx4BoMqUikAiiCDSnoHUIO4S3aCHQ&s",
          name:"Botany",
          desc: "A department dedicated to the scientific study of plants, their structure, function, and diversity"
        },
          {
          img: "https://nailknowledge.org/wp-content/uploads/2021/04/chemical-1024x683.jpg",
          name:"Chemistry",
          desc: "A department exploring the composition, properties, and reactions of matter through theory"
        },
          {
          img: " https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEk-3e4ZOOUqebTgJsvYLQNIv6gE_0noRCxg&s",
          name:"Microbiology",
          desc: "A department focused on the study of microorganisms and their role in health."
        },
      ]
  return (
    <>
      <Header />

      <div className="hero">
        <div className="hero-content">
          <h1 style={{fontFamily:"Merriweather"}}>Empowering Minds, Shaping Futures</h1>
          <p style={{fontFamily:"Open Sans"}}>Providing quality education, innovation, and opportunities for every learner.</p>
          <div className="d-flex justify-content-center">
        <Link to={'/admission'}>
        <button className="btn" style={{backgroundColor:"#1A3C8E",color:"white",fontWeight:"bold"}}>Apply Now</button></Link>
          </div>

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
      color: "#1A3C8E",
      fontSize: "2.2rem"
    }}
  >
    Our Achievements
  </h2>

  <div className="container">

    <div className="row justify-content-center">

     
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
            border:"1px solid #DDE3EC",
            minHeight: "16rem",
            borderRadius: "18px",
            padding: "1.5rem",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)"
          }}>

            <h1 
              className='text-center mt-3'
              style={{
                fontFamily: "Poppins",
                fontWeight: 700,
                color: "#1A3C8E",
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
                color: "#F4C430",
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
                color: "#1B1B1B",
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
  <h1 style={{fontFamily:"Merriweather",color:"#1A3C8E"}} className="text-center">Who We Are</h1>
  
  <div className='row mt-5'>

    <div className='col-lg-6'>
      <img 
        className='img-fluid ms-2 rounded shadow'
        style={{ width:"100%", height:"30rem", objectFit:"cover" }}
        src="https://ccrc.tc.columbia.edu/wp-content/uploads/2025/04/teaching-community-college-students-versatile-learners.jpg"
        alt="College Campus"
      />
    </div>

    <div className='col-lg-6'>
      
 
      <div style={{ 
        color:"#555555", 
        fontFamily:"Inter", 
        textAlign:"justify", 
        lineHeight:"1.7" 
      }}>
        
        <p>
          At <b>Raynott College</b>, we are committed to shaping the next 
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

      <Link to={'/about'}>
        <button  
        className="btn"
          style={{ 
            marginTop:"1.5rem",
            padding:"0.9rem 1.8rem",
            borderRadius:"0.5rem",
            fontSize:"1rem",
            color:"#1565c0",
            fontWeight:"bold",
            textDecoration:"underline"
          
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
  <h1 style={{fontFamily:"Merriweather",color:"#1A3C8E",fontWeight:"bold"}} className="text-center">Our Departments</h1>

  <h6 className='text-center' style={{ color:"#555555", fontFamily:"Inter" }}>
    Explore our top undergraduate & postgraduate programs designed for future-ready careers
  </h6>

  <div className="container mt-4">
    <div className="row g-4 justify-content-around">
   {departments.map((data)=>(
  <div className="col-lg-4"> <DepartmentCard data={data} /></div>
   )) }
    </div>
  </div>
</div>

      {/*  */}
      {/* facility */}
      <div className="mt-5" style={{ padding: "0 2rem" }}>
   <h1 style={{fontFamily:"Merriweather",color:"#1A3C8E",fontWeight:"bold"}} className="text-center">Our Facilities</h1>

  <p
    className="text-center mb-5"
    style={{
      maxWidth: "650px",
      margin: "0 auto",
      fontFamily: "Inter",
      color: "#1B1B1B",
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
