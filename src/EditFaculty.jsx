import React, { useEffect, useState } from 'react';
import SideBar from './Sidebar';
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import { addFacultyAPI, EditCourseAPI, EditFacultyAPI, getfacultyAPI } from './AllAPI';
import SERVER_URL from './SERVER_URL';
function EditFaculty() {
const navigate = useNavigate();

 const { id } = useParams();
 const [allFaculty,setallFaculty] = useState([])
 const [edit,setEdit] = useState({Fname:"",dept:"",desg:"",exp:"",qual:"",email:"",profile:null})
 const [preview,setPreview] = useState("")
    console.log(allFaculty);
    
     useEffect(() => {
        getAllFaculty()
     }, [])

     useEffect(() => {
    if (allFaculty.length > 0) {
      const faculty = allFaculty.find(item => item._id === id);
      if (faculty) {
  
        setEdit({
          Fname: faculty.Fname || "",
          dept: faculty.dept || "",
          desg: faculty.desg || "",
          exp: faculty.exp || "",
          qual: faculty.qual || "",
          email: faculty.email || "",
          profile: null 
        });
        
        setPreview(faculty.profile ? `${SERVER_URL}/uploads/${faculty.profile}` : null);
      }
    }
  }, [allFaculty, id]);
     
     
     const getAllFaculty=async()=>{
    
          
       
          
          try{
     
          const result=await getfacultyAPI()
          console.log("get faculty",result);
          if(result.status==200){
        setallFaculty(result.data)
          }
      
           
          }
          catch(err){
            console.log(err);
            
          }
       }







const handleUpload = async (e) => {
    e.preventDefault(); 

    const { Fname, dept, desg, exp, qual, email, profile } = edit;

  

    const reqBody = new FormData();
    reqBody.append("Fname", Fname);
    reqBody.append("dept", dept);
    reqBody.append("desg", desg);
    reqBody.append("exp", exp);
    reqBody.append("qual", qual);
    reqBody.append("email", email);
  
   
    
    
    if (profile) {
      reqBody.append("profile", profile);
    }

    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
         
        "authorization": `Bearer ${token}`
      };
      try {
      
        const result = await EditFacultyAPI(id,reqBody, reqHeader);
        console.log("edited faculty",result);
        
        
        if (result.status === 200) {
          toast.success("Faculty Details updated successfully");
          navigate('/faculty-manage');
        } 
      } catch (err) {
        console.log(err);
        toast.error("An unexpected error occurred during update.");
      }
    } else {
      toast.error("Session expired. Please log in again.");
    }
  };



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
   Edit Details
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
                    value={edit.Fname}
                    onChange={(e)=>setEdit({...edit,Fname:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>

                  <div className="w-50">
                    <label>Email:</label>
                    <input 
                           value={edit.email}
                   onChange={(e)=>setEdit({...edit,email:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>
                </div>

              

             

                <div className="d-flex gap-3 mt-3">
                    <div className="w-50">
                    <label>Department:</label>
                        
                    <select 
                       value={edit.dept}
                    onChange={(e)=>setEdit({...edit,dept:e.target.value})}  className="form-select mt-1">
                      <option value="" hidden>Select Department</option>
                      <option value="Computer Science">Computer Science</option>
                       <option value="English">English</option>
                       <option value="Commerce">Commerce</option>
                       <option value="Mathematics">Mathematics</option>
                        <option value="Physics">Physics</option>
                       <option value="History">History</option>
                       <option value="Botany">Botany</option>
                       <option value="Chemistry">Chemistry</option>
                       <option value="MicroBiology">MicroBiology</option>
                    
                    </select>
                  </div>

                  <div className="w-50">
                    <label>Designation:</label>
                    <input 
                           value={edit.desg}
                    onChange={(e)=>setEdit({...edit,desg:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>
                </div>

                 <div className="d-flex gap-3 mt-3">
                  <div className="w-50">
                    <label>Qualification:</label>
                    <input 
                           value={edit.qual}
                   onChange={(e)=>setEdit({...edit,qual:e.target.value})}
                      type="text" className="form-control mt-1"  />
                  </div>

                  <div className="w-50">
                    <label>Experience:</label>
                    <input 
                           value={edit.exp}
                     onChange={(e)=>setEdit({...edit,exp:e.target.value})}
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
 onChange={(e) => {
  setEdit({ ...edit, profile: e.target.files[0] });
  setPreview(URL.createObjectURL(e.target.files[0]));
}}

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

export default EditFaculty;
