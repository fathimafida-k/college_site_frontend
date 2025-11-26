import React, { useState } from 'react';
import SideBar from './Sidebar';
import { addCourseAPI } from './AllAPI';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


function AddCourse() {

    const [imagePreview, setImagePreview] = useState(null);
const navigate = useNavigate()
      const [addCourse, setAddCourse] = useState({
  Cname: "",
  description: "",
  duration: "",
  level: "",
  fees: "",
  dept:"",
  syllabus: "",
  image: ""
});
console.log(addCourse);



const handleUpload=async()=>{
      const{Cname,description,duration,level,fees,syllabus,image,dept}= addCourse
      if(Cname&&description&&duration&&level&&fees&&syllabus&&image&&dept){
        //api

        //reqbody
        const reqBody = new FormData()
        reqBody.append("Cname",Cname)
        reqBody.append("description",description)
        reqBody.append("duration",duration)
        reqBody.append("level",level)
        reqBody.append("fees",fees)
        reqBody.append("syllabus",syllabus)
         reqBody.append("dept",dept)
        reqBody.append("image",image)
        //reqheader
        const token = sessionStorage.getItem("token")
        if(token){
          const reqHeader = {
            "content-type":"multipart/form-data",
            "authorization":`Bearer ${token}`
          }
          try{
     const result = await addCourseAPI(reqBody,reqHeader)
     console.log("course",result);
     if(result.status==200){
      toast.success("New Course added successfully")
      navigate('/program-manage')
     
    
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
        {/* Sidebar */}
        <div className="col-12 col-md-3 p-0">
          <SideBar />
        </div>

        {/* Main Content */}
        <div className="col-12 col-md-9 p-3">
          <h2 className="mt-4 text-center" style={{ color: "rgba(43, 34, 70, 1)", fontFamily: "Playfair Display" }}>
            Add New Course
          </h2>

          <div className="d-flex justify-content-center align-items-center mt-4">
            <div
              style={{
                border: "1px solid rgba(2, 8, 32, 0.95)",
                width: "95%",
                minHeight: "40rem",
                borderRadius: "25px",
                padding: "20px",
              }}
              className="shadow-sm"
            >
              <form>
                <h5 className='text-center'>Course Details</h5>

                <label>Course Name:</label>
                <input onChange={(e)=>setAddCourse({...addCourse,Cname:e.target.value})} type="text" className="form-control mt-1" placeholder="Enter course name" />

              

                <label className='mt-2'> Description:</label>
                <textarea onChange={(e)=>setAddCourse({...addCourse,description:e.target.value})}  className="form-control mt-1" placeholder="Enter full description" />

                <div className="d-flex gap-3 mt-3">
                  <div className="w-50">
                    <label>Duration:</label>
                    <input onChange={(e)=>setAddCourse({...addCourse,duration:e.target.value})}  type="text" className="form-control mt-1" placeholder="e.g. 6 months" />
                  </div>

                  <div className="w-50">
                    <label>Level:</label>
                    <select onChange={(e)=>setAddCourse({...addCourse,level:e.target.value})}  className="form-select mt-1">
                      <option value="" hidden>Select Level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <label className='mt-2'>Fee Details:</label>
                <input onChange={(e)=>setAddCourse({...addCourse,fees:e.target.value})}  type="text" className="form-control mt-1" placeholder="Enter fees" />

                <label className='mt-2'>Syllabus Details:</label>
                <textarea onChange={(e)=>setAddCourse({...addCourse,syllabus:e.target.value})}  className="form-control mt-1" placeholder="Enter syllabus topics separated by commas" />
   <div className="w-50">
                    <label>Department:</label>
                    <select onChange={(e)=>setAddCourse({...addCourse,dept:e.target.value})}  className="form-select mt-1">
                      <option value="" hidden>Select Dept</option>
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

                <h5 className='text-center mt-3'>Upload Course Image</h5>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
               {imagePreview ? 
                 <div style={{ marginTop: "10px" }}>
    <img
      src={imagePreview}
      alt="Course Preview"
      style={{ width: "150px", height: "150px", objectFit: "cover", borderRadius: "8px" }}
    />
  </div> :
                  <label  htmlFor="chooseFile" className="d-flex justify-content-center align-items-center border rounded" style={{ width:"100px", height:"100px", cursor:"pointer", backgroundColor:"#f8f9fa" }}>
                    <span style={{ fontSize:"2rem", color:"#888" }}>+</span>
                  </label>}
                   <input   onChange={(e) => {
    const file = e.target.files[0];
    if (file) {
      setAddCourse({ ...addCourse, image: file });
      setImagePreview(URL.createObjectURL(file)); 
    }
  }}
    id="chooseFile"
    type="file"
    style={{ display: "none" }}
  />
                
                </div>

                <div className='d-flex justify-content-center mt-4'>
                  <button
                  type="button"
                   onClick={handleUpload} className='btn text-light fw-bold' style={{ backgroundColor:"#071143ff", width:"30%" }}>Add Course</button>
                </div>
              </form>
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

export default AddCourse;
