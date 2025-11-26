import React from 'react';
import Header from './Header';
import { Link } from 'react-router-dom';
import Footer from './Footer';

function About() {
return (

  
<div style={{ fontFamily: "'Inter', sans-serif", color: '#333' }}>
<Header/>
  {/* Hero Section */}  
  <div style={{ position: 'relative', height: '75vh', overflow: 'hidden' }}>  
    <img  
      src="https://cdn.prometheanworld.com/wp-content/uploads/2023/05/05224554/GettyImages-1339977039-1-1.jpg"  
      alt="College Hero"  
      style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.7)' }}  
    />  
    <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 1rem', color: 'white' }}>  
      <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '1rem', fontFamily: 'Poppins', textShadow: '2px 2px 8px rgba(0,0,0,0.6)' }}>  
        About Us
      </h1>  
      <p style={{ fontSize: '1.25rem', fontFamily: 'Lora', maxWidth: '700px', lineHeight: '1.6', textShadow: '1px 1px 6px rgba(0,0,0,0.5)' }}>  
        "Empowering Minds, Shaping Futures"  
      </p>  
    </div>  
    
  </div>  

  {/* About Section */}  
  <div style={{ padding: '6rem 2rem', backgroundColor: '#f5f7fa' }}>  
    <h2 style={{ fontSize: '2.75rem', marginBottom: '3rem', color: '#1A3C8E', textAlign: 'center', fontFamily: 'Merriweather' }}>  
     Our Story  
    </h2>  

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>  
     <div style={{ maxWidth: '500px', flex: '1', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 8px 30px rgba(0,0,0,0.15)' }}>  
        <img  
          src="https://pxl-southwalesacuk.terminalfour.net/fit-in/670x480/filters:format(webp)/prod01/channel_2/media/university-of-south-wales/site-assets/images/16-other/about-us/our-history/Our-History-web-page-images_42659.jpg"  
          alt="Old photo"  
          style={{ width: '100%', height: '100%', objectFit: 'cover' }}  
          onMouseOver={e => e.currentTarget.style.transform = 'scale(1.05)'}  
          onMouseOut={e => e.currentTarget.style.transform = 'scale(1)'}  
        />  
      </div>  
      <div style={{ maxWidth: '650px', color: '#555', lineHeight: 1.8 }}>  
        <p>  
     Founded in 1990, Raynott College has grown into a hub of academic excellence, fostering innovation and leadership in every student. With a focus on holistic development, we combine rigorous academics with real-world learning opportunities. 
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
 
      
    </div>  
  </div>  

  {/* mission and vision */}
  <div style={{width:"100vw",height:"19rem",backgroundColor:"#F7F9FC"}}>
    <h2 className='text-center' style={{fontFamily:"Merriweather",color:"#1A3C8E"}}>Our Mission & Vision</h2>

             <div style={{width:"100vw"}} className='d-flex justify-content-around flex-wrap gap-4'>
               <div style={{ background: "#ffffff",border:"1px solid #DDE3EC",width: "25rem" ,minHeight: "16rem",borderRadius: "18px",padding: "1.5rem",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)"}}>
              <h3  className='text-center mt-3'style={{fontFamily: "Poppins",
fontWeight: 700,color: "#1A3C8E",fontSize: "1.5rem"}}>
          <span style={{color:"#F4C430"}}> <i class="fa-solid fa-lightbulb"></i></span>Mission </h3>
            
 <p className='text-center'style={{fontFamily: "Inter",color: "#1B1B1B",fontSize: "0.95rem",marginTop: "0.7rem",lineHeight: 1.6}}> To provide high-quality education, nurture innovation, and empower students to achieve their full potential.</p></div>
   <div style={{ background: "#ffffff",border:"1px solid #DDE3EC",width: "25rem" ,minHeight: "16rem",borderRadius: "18px",padding: "1.5rem",
            boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.08)"}}>
              <h3  className='text-center mt-3'style={{fontFamily: "Poppins",
fontWeight: 700,color: "#1A3C8E",fontSize: "1.5rem"}}>
          <span style={{color:"#F4C430"}}> <i class="fa-solid fa-star"></i></span>Vision </h3>
            
 <p className='text-center'style={{fontFamily: "Inter",color: "#1B1B1B",fontSize: "0.95rem",marginTop: "0.7rem",lineHeight: 1.6}}>To become a leading institution recognized for academic excellence, innovation, and holistic student development.</p></div>
             </div>
  </div>
  {/* principal */}
  <div className='mt-5' style={{ padding: '6rem 2rem', background:'linear-gradient(to right, #F7F9FC, #E8ECF6)' }}>  
   

    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '3rem', alignItems: 'center' }}>  
<div style={{ textAlign: "center" }}>
  <div 
    style={{ 
      width: '200px',
      height: '200px',
      borderRadius: '50%',
      overflow: 'hidden',
      boxShadow: '0 8px 30px rgba(0,0,0,0.15)',
      margin: "0 auto"  
    }}
  >  
    <img  
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9CnWEUNp1CUuRQRlX6YHwrhiClD0_C9JWVw&s"  
      alt="Principal photo"  
      style={{ 
        width: '100%',
        height: '100%',
        objectFit: 'cover',
      }}  
    />  
  </div>

  <h2 style={{ marginTop: "1rem", color: "#1A3C8E", fontFamily: "Merriweather, serif" }}>
    Dr. John Raynott, Principal
  </h2>
</div>


 
      <div style={{ maxWidth: '650px', color: '#555', lineHeight: 1.8 }}>  
        <p>  
"Welcome to Raynott College, a place where curiosity meets opportunity and learning goes beyond the classroom. Our mission is to empower every student to achieve their full potential through academic excellence, innovation, and holistic development. 
        </p>  
        <p>  
       We take pride in fostering an environment that encourages critical thinking, creativity, and leadership, ensuring that each learner is prepared to face the challenges of the future with confidence.
        </p>  
        <p>  
         At Raynott College, we believe that education is not just about acquiring knowledge, but about shaping responsible, compassionate, and successful individuals who will make a positive impact in the world.”
        </p>  
       
      </div>  
 
      
    </div>  
  </div>  
  {/* princi */}
<div className='mt-5'>
  
<Footer/>
</div>
</div>  


);
}

export default About;
