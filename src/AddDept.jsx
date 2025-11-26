import React, { useEffect, useState } from 'react';
import SideBar from './Sidebar';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { addFacultyAPI } from './AllAPI';


function AddDept() {


const navigate = useNavigate()
      const [faculty, setFaculty] = useState({Fname:"",dept:"",desg:"",exp:"",qual:"",email:""} );
       const[preview,setpreview]=useState("")
console.log(faculty);
useEffect(() => {
 
  
   if(faculty.profile){
     setpreview(URL.createObjectURL(faculty.profile))
   }
   else{
    setpreview("")
   }
 
}, [faculty.profile])



const handleUpload=async()=>{
      const { Fname,dept,desg,exp,qual,email,profile}= faculty
      if(Fname&&dept&&desg&&exp&&qual&&email&&profile){
        //api

        //reqbody
        const reqBody = new FormData()
        reqBody.append("Fname",Fname)
        reqBody.append("dept",dept)
        reqBody.append("desg",desg)
        reqBody.append("exp",exp)
        reqBody.append("qual",qual)
        reqBody.append("email",email)
        reqBody.append("profile",profile)
    
  
        const token = sessionStorage.getItem("token")
        if(token){
          const reqHeader = {
            "content-type":"multipart/form-data",
            "authorization":`Bearer ${token}`
          }
          try{
     const result = await addFacultyAPI(reqBody,reqHeader)
     console.log("faculty",result);
     if(result.status==200){
      toast.success("Faculty added successfully")
      navigate('/faculty-manage')
     
    
     }
     else{
      toast.error(result.response.data)
     }
     
     
          }
          catch(err){
            console.log(err);
            

          }
        }
      }
      else{
        toast.warning("Please enter the field completely")
      }
    }

  return (
    <div className="container-fluid">
      <div className="row flex-nowrap">
     
        <div className="col-12 col-md-3 p-0">
          <SideBar />
        </div>

  
        <div className="col-12 col-md-9 p-3">
           <h2 
    className='text-center mb-5' 
    style={{ 
      fontFamily: "Merriweather, serif", 
      fontWeight: 700,
      color: "#1A3C8E",
      fontSize: "2.2rem"
    }}
  >
   Add Faculty
  </h2>


          <div className="d-flex justify-content-center align-items-center mt-4">
            <div
              style={{
                border: "1px solid rgba(4, 34, 155, 0.95)",
                width: "95%",
                minHeight: "40rem",
                borderRadius: "25px",
                padding: "20px",
              }}
              className="shadow-sm"
            >
              <div>
                

               <div className="d-flex gap-3 mt-3">
                  <div className="w-50">
                    <label>Faculty Name:</label>
                    <input 
                    onChange={(e)=>setFaculty({...faculty,Fname:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>

                  <div className="w-50">
                    <label>Email:</label>
                    <input 
                   onChange={(e)=>setFaculty({...faculty,email:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>
                </div>

              

             

                <div className="d-flex gap-3 mt-3">
                  <div className="w-50">
                    <label>Department:</label>
                    <input 
                   onChange={(e)=>setFaculty({...faculty,dept:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>

                  <div className="w-50">
                    <label>Designation:</label>
                    <input 
                    onChange={(e)=>setFaculty({...faculty,desg:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>
                </div>

                 <div className="d-flex gap-3 mt-3">
                  <div className="w-50">
                    <label>Qualification:</label>
                    <input 
                   onChange={(e)=>setFaculty({...faculty,qual:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>

                  <div className="w-50">
                    <label>Experience:</label>
                    <input 
                     onChange={(e)=>setFaculty({...faculty,exp:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>
                </div>

             

              

                <h5 className=' mt-3'>Profile Image</h5>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
            
       <label
  htmlFor="chooseFile"
  className="d-flex justify-content-center align-items-center border rounded"
  style={{
    width: "100px",
    height: "100px",
    backgroundColor: "#f8f9fa",
    overflow: "hidden",
  }}
>
  {preview ? (
    <img
      src={preview}
      alt="Preview"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  ) : (
    <span style={{ fontSize: "2rem", color: "#888" }}>+</span>
  )} 
</label>
<input
  onChange={(e) =>
    setFaculty({ ...faculty, profile: e.target.files[0] })
  }
  id="chooseFile"
  type="file"
  style={{ display: "none" }}
/>
                
                </div>

                <div className='d-flex justify-content-center mt-4'>
                  <button
                  type="button"
                   onClick={handleUpload}
                    className='btn text-light fw-bold' style={{ backgroundColor:"#F4C430", width:"30%" }}>Upload</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @media (max-width: 768px) {
          .row { flex-direction: column; }
          .col-md-3, .col-md-9 { width: 100%; }
          h2 { font-size: 1.5rem; }
        }
      `}</style>
    </div>
  );
}

export default AddDept;
