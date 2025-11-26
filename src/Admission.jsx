import React, { useEffect, useState } from 'react'
import { getHomeCourseAPI, newAdmisssionAPI } from './AllAPI';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Admission() {
    const [allCourses,setAllCourses] = useState([])
     const [admission,setAdmission] = useState({ Sname:"",mail:"",phone:"",address:"",course:"",qualification:"",grade:""})
     const navigate = useNavigate()

        console.log(admission);
        
         useEffect(() => {
            getAllCourse()
         }, [])
         
         const getAllCourse=async()=>{
         try{
         
              const result=await getHomeCourseAPI()
              console.log("header course",result);
              if(result.status==200){
            setAllCourses(result.data)
              }
          
               
              }
              catch(err){
                console.log(err);
                
              }
           }
      const handleUpload=async()=>{
     console.log("Button clicked!"); 

      const{ Sname,mail,phone,address,course,qualification,grade}= admission

   if(Sname && mail && phone && address && course&&qualification&&grade){

            try{
     const result = await newAdmisssionAPI(admission)
     console.log("admission",result);
     if(result.status==200){
        navigate('/')
      toast.success("Admission form submitted. We will contact you shortly for further details.")
    setAdmission({ Sname:"",mail:"",phone:"",address:"",course:"",qualification:"",grade:""})
    

     }
     else{
      toast.error(result.response.data)
     }
     
     
          }
          catch(err){
            console.log(err);
            

          }
        
      }
      else{
        toast.warning("Please enter the field completely")
      }
    }     
  return (
    <div className='d-flex justify-content-center' style={{minHeight:"100vh"}}>
  <div
  style={{
    background: "#f8f9fa",
    padding: "1.5rem",
    borderRadius: "10px",
    boxShadow: "0 0 10px rgba(33, 28, 28, 0.08)",
    width:"60vw",
    minHeight:"12rem"  
  }}
>
  <h4 className='text-center' style={{ fontFamily: "Inter", marginBottom: "1rem" }}>
    Admission Form
  </h4>

  <div>
  
    <label
      style={{ display: "block", fontSize: "0.9rem", marginBottom: "0.2rem" }}
    >
      Full Name
    </label>
    <input
      onChange={(e)=>setAdmission({...admission,Sname:e.target.value})}
      type="text"
      className="form-control"
      placeholder="Enter your full name"
    />


    <label
      style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}
    >
      Email
    </label>
    <input
        onChange={(e)=>setAdmission({...admission,mail:e.target.value})}
      type="email"
      className="form-control"
      placeholder="Enter your email"
    />

   
    <label
      style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}
    >
      Phone Number
    </label>
    <input
        onChange={(e)=>setAdmission({...admission,phone:e.target.value})}
      type="text"
      className="form-control"
      placeholder="Enter phone number"
    />

    {/* Address */}
    <label
      style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}
    >
      Address
    </label>
    <textarea
        onChange={(e)=>setAdmission({...admission,address:e.target.value})}
      className="form-control"
      placeholder="Enter your address"
    ></textarea>

   


  
    <label
      style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}
    >
      Course
    </label>
    <select
       onChange={(e)=>setAdmission({...admission,course:e.target.value})}
      className="form-control"
    >
      <option>Select Course</option>
      {allCourses?.map(pro=>(
        <option value={pro.Cname}>{pro.Cname}</option>
    )) }
     
    </select>


    <label
      style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}
    >
      Qualification
    </label>
    <input
       onChange={(e)=>setAdmission({...admission,qualification:e.target.value})}
      type="text"
      className="form-control"
      placeholder="Enter the stream also"
    />

   
    <label
      style={{ display: "block", fontSize: "0.9rem", marginTop: "1rem" }}
    >
      Percentage / Grade
    </label>
    <input
       onChange={(e)=>setAdmission({...admission,grade:e.target.value})}
      type="text"
      className="form-control"
      placeholder="Enter percentage or grade"
    />

  
    <button
     onClick={handleUpload}
      style={{
        marginTop: "1.5rem",
        width: "100%",
        background: "#1A3C8E",
        color: "#fff",
        border: "none",
        padding: "0.8rem",
        fontSize: "1rem",
        borderRadius: "5px",
        cursor: "pointer",
        fontWeight: "600"
      }}
    >
      Submit Application
    </button>
  </div>
</div>


    </div>
  )
}

export default Admission