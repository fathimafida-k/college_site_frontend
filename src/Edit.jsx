import React, { useEffect, useState } from 'react';
import SideBar from './Sidebar';
import { EditCourseAPI, getAllCourseAPI } from './AllAPI'; 
import { toast } from 'react-toastify';
import { useNavigate, useParams } from 'react-router-dom';
import SERVER_URL from './SERVER_URL'; 



function Edit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [allCourses, setAllCourses] = useState([]);
  const [getCourse, setGetCourse] = useState(null);
  
  // 1. Image States: imagePreview holds the existing URL; preview holds the URL for a newly selected file.
  const [imagePreview, setImagePreview] = useState(null);
  const [preview, setPreview] = useState("");
  
  const [addCourse, setAddCourse] = useState({
    Cname: "",
    description: "",
    duration: "",
    level: "",
    fees: "",
    syllabus: "",
    faculty: "",
    image: null // Stores the new File object
  });

  // Function to fetch all courses (needed to find the specific course data)
  const getAllCourse = async () => {
    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
        "content-type": "application/json",
        "authorization": `Bearer ${token}`
      };
      try {
        const result = await getAllCourseAPI(reqHeader);

        if (result.status === 200) {
          setAllCourses(result.data);
        }
      } catch (err) {
        console.log(err);
      }
    }
  };

  // Fetch all courses on component mount
  useEffect(() => {
    getAllCourse();
  }, []);

  // Find the course to edit and populate state
  useEffect(() => {
    if (allCourses.length > 0) {
      const course = allCourses.find(item => item._id === id);
      if (course) {
        setGetCourse(course);
        setAddCourse({
          Cname: course.Cname || "",
          description: course.description || "",
          duration: course.duration || "",
          level: course.level || "",
          fees: course.fees || "",
          syllabus: course.syllabus || "",
          faculty: course.faculty || "",
          image: null // Keep this null initially
        });
        // Set imagePreview to the URL of the existing image for display
        setImagePreview(course.image ? `${SERVER_URL}/uploads/${course.image}` : null);
      }
    }
  }, [allCourses, id]);

  // Handle new file selection and preview
  useEffect(() => {
    const file = addCourse.image;
    if (file && file instanceof File) {
      if (file.type === "image/png" || file.type === "image/jpg" || file.type === "image/jpeg") {
        setPreview(URL.createObjectURL(file));
      } else {
        toast.error("Invalid file type. Please select a PNG, JPG, or JPEG image.");
        setPreview("");
        setAddCourse({ ...addCourse, image: null });
      }
    } else if (!file) {
      setPreview("");
    }
  }, [addCourse.image]);

  // Handle form submission
  const handleUpload = async (e) => {
    e.preventDefault(); // 🛑 FIX: Prevents the page from reloading on button click

    const { Cname, description, duration, level, fees, syllabus, faculty, image } = addCourse;

    if (!Cname || !description || !duration || !level || !fees || !syllabus || !faculty) {
      toast.warning("Please fill all required fields");
      return;
    }

    const reqBody = new FormData();
    reqBody.append("Cname", Cname);
    reqBody.append("description", description);
    reqBody.append("duration", duration);
    reqBody.append("level", level);
    reqBody.append("fees", fees);
    reqBody.append("syllabus", syllabus);
    reqBody.append("faculty", faculty);
    
    // Append the new image only if one was selected
    if (image) {
      reqBody.append("image", image);
    }

    const token = sessionStorage.getItem("token");
    if (token) {
      const reqHeader = {
         
        "authorization": `Bearer ${token}`
      };
      try {
      
        const result = await EditCourseAPI(id,reqBody, reqHeader);
        console.log("result",result);
        
        
        if (result.status === 200) {
          toast.success("Course updated successfully");
          navigate('/program-manage');
        } else {
          toast.error(result.response?.data || "Error updating course");
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
      <div className=" flex-nowrap">
        {/* Sidebar */}
       

        {/* Main Content */}
        <div className=" p-3">
          <h2 className="mt-4 text-center" style={{ color: "rgba(43, 34, 70, 1)", fontFamily: "Playfair Display" }}>
            Edit Course Details
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
                <input
                  value={addCourse.Cname}
                  onChange={(e) => setAddCourse({ ...addCourse, Cname: e.target.value })}
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter course name"
                />

                <label className='mt-2'>Description:</label>
                <textarea
                  value={addCourse.description}
                  onChange={(e) => setAddCourse({ ...addCourse, description: e.target.value })}
                  className="form-control mt-1"
                  placeholder="Enter full description"
                />

                <div className="d-flex gap-3 mt-3">
                  <div className="w-50">
                    <label>Duration:</label>
                    <input
                      value={addCourse.duration}
                      onChange={(e) => setAddCourse({ ...addCourse, duration: e.target.value })}
                      type="text"
                      className="form-control mt-1"
                      placeholder="e.g. 6 months"
                    />
                  </div>
                  <div className="w-50">
                    <label>Level:</label>
                    <select
                      value={addCourse.level}
                      onChange={(e) => setAddCourse({ ...addCourse, level: e.target.value })}
                      className="form-select mt-1"
                    >
                      <option value="" hidden>Select Level</option>
                      <option value="Beginner">Beginner</option>
                      <option value="Intermediate">Intermediate</option>
                      <option value="Advanced">Advanced</option>
                    </select>
                  </div>
                </div>

                <label className='mt-2'>Fee per Sem:</label>
                <input
                  value={addCourse.fees}
                  onChange={(e) => setAddCourse({ ...addCourse, fees: e.target.value })}
                  type="number"
                  className="form-control mt-1"
                  placeholder="Enter fees"
                />

                <label className='mt-2'>Syllabus Details:</label>
                <textarea
                  value={addCourse.syllabus}
                  onChange={(e) => setAddCourse({ ...addCourse, syllabus: e.target.value })}
                  className="form-control mt-1"
                  placeholder="Enter syllabus topics separated by commas"
                />

                <label className='mt-2'>Faculty Name:</label>
                <input
                  value={addCourse.faculty}
                  onChange={(e) => setAddCourse({ ...addCourse, faculty: e.target.value })}
                  type="text"
                  className="form-control mt-1"
                  placeholder="Enter faculty name"
                />

                <h5 className='text-center mt-3'>Upload Course Image</h5>
                <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                  <div className='col-3'>
                    <input
                      onChange={(e) => setAddCourse({ ...addCourse, image: e.target.files[0] })}
                      style={{ display: "none" }}
                      id='chosefile'
                      type="file"
                    />
                    <label htmlFor="chosefile">
                      <img
                        style={{ borderRadius: "8px", objectFit: "cover" }}
                        // 2. Image Source Logic: Use new preview if available, otherwise use existing image URL
                        src={preview || imagePreview || 'https://via.placeholder.com/150'} 
                        alt="Course Image"
                        width={"100%"}
                        height={"70%"}
                      />
                    </label>
                  </div>
                </div>

                <div className='d-flex justify-content-center mt-4'>
                  <button
                    type="button"
                    onClick={handleUpload}
                    className='btn text-light fw-bold'
                    style={{ backgroundColor: "#071143ff", width: "30%" }}
                  >
                    Update Course
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Edit;