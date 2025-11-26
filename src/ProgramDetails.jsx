import React, { useEffect, useState } from "react";
import { Container, Row, Col, Badge, Button } from "react-bootstrap";
import { CourseDetailsAPI } from "./AllAPI";
import { useParams } from "react-router-dom";
import SERVER_URL from "./SERVER_URL";

function ProgramDetails() {
     const {id} = useParams()
     const [allCourses,setAllCourses] = useState([])
        console.log("all",allCourses);
        
         useEffect(() => {
            getAllCourse()
         }, [])
         
         const getAllCourse=async()=>{
              try{
         
              const result=await CourseDetailsAPI(id)
              console.log("details course",result);
              if(result.status==200){
            setAllCourses(result.data)
              }
          
               
              }
              catch(err){
                console.log(err);
                
              }
           }
       
  return (
    <div>
   
      <div
        style={{
          width: "100%",
          height: "300px", 
         backgroundImage: `url(${SERVER_URL}/uploads/${allCourses.image})`,

          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
      </div>

      <Container className="mt-4">

          <h1 className="text-center" style={{ color: "rgba(5, 18, 32, 1)", textShadow: "2px 2px 4px rgba(0,0,0,0.7)" }}>
        {allCourses?.Cname}
        </h1>
        <p className="text-center fw-bold" style={{fontFamily:"lora"}}>Department of {allCourses?.dept}</p>
        <Row className="justify-content-center">
          <Col xs={12} md={10} lg={8}>

          
            <div className="text-center mb-3">
              <Badge bg="info" className="me-2">  {allCourses?.level}</Badge>
              <Badge bg="secondary">{allCourses?.duration}</Badge>
            </div>

           
            <p style={{ lineHeight: "1.6" }}>
          {allCourses.description}
            </p>

        
            <h5 className="mt-3">Syllabus:</h5>
            <p>   {allCourses.syllabus}</p>

            {/* <p className="mb-1"><strong>Faculties:</strong>{allCourses.faculty}</p> */}
            <p className="mb-1"><strong>Fees:</strong> ₹{allCourses.fees}</p>

          
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default ProgramDetails;
