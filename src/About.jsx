import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function About() {
return (
<div style={{ fontFamily: "'Inter', sans-serif", color: '#333' }}>

  {/* Hero Section */}  
  <div style={{ position: 'relative', height: '75vh', overflow: 'hidden' }}>  
    <img  
      src="https://media.istockphoto.com/id/2122148349/photo/writing-an-exam-at-the-university.jpg?s=612x612&w=0&k=20&c=LgVzLcd_cxNDQrolZFFqg7AIQnTd_xBrvdWfr-eVoK8="  
      alt="College Hero"  
      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}  
    />  
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 1rem', color: '#fff' }}>  
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', fontFamily: 'Poppins', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>  
        About Bright Futures College  
      </h1>  
      <p style={{ fontSize: '1.25rem', fontFamily: 'Lora', maxWidth: '700px', lineHeight: '1.6', textShadow: '1px 1px 6px rgba(0,0,0,0.5)' }}>  
        "Knowledge is not a vessel to be filled but a fire to be kindled."  
      </p>  
    </div>  
    <div style={{ position: 'absolute', top: 0, width: '100%', zIndex: 10 }}>  
      <Header />  
    </div>  
  </div>  

  {/* About Section */}  
  <section style={{ padding: '6rem 2rem', backgroundColor: '#f5f7fa' }}>  
    <h2 style={{ fontSize: '2.75rem', marginBottom: '3rem', color: '#12105a', textAlign: 'center', fontFamily: 'Poppins' }}>  
      Welcome to Bright Futures College  
    </h2>  

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>  
      {/* Text Column */}  
      <div style={{ maxWidth: '650px', color: '#555', lineHeight: 1.8 }}>  
        <p>  
          At Bright Futures College, we nurture young minds, encourage innovation, and empower students to achieve excellence academically and personally.  
        </p>  
        <p>  
          Our mission is to provide world-class education, foster critical thinking, and create an inspiring environment that cultivates leadership and creativity.  
        </p>  
        <p>  
          With experienced faculty, state-of-the-art infrastructure, and diverse programs, we prepare students to excel in their fields and make meaningful contributions to society.  
        </p>  
        <p>  
          Join our vibrant learning community where opportunities meet ambition and futures are shaped.  
        </p>  
      </div>  

      {/* Image Column */}  
      <div style={{ maxWidth: '450px', flex: '1', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}>  
        <img  
          src="https://images.unsplash.com/photo-1607237138185-eedd9c632b0b?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZSUyMGNhbXB1c3xlbnwwfHwwfHx8MA%3D%3D"  
          alt="Students Learning"  
          style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.3s', cursor: 'pointer' }}  
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}  
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}  
        />  
      </div>  
    </div>  
  </section>  

<Footer/>
</div>  


);
}

export default About;
