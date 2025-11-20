import commonAPI from "./commonApi";
import SERVER_URL from "./SERVER_URL";
export const registerUserAPI=async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/register-user`,reqBody)
}
export const loginUserAPI=async(reqBody)=>{
    return await commonAPI('POST',`${SERVER_URL}/login`,reqBody)
}
export const addCourseAPI=async(reqBody,reqHeader)=>{
    return await commonAPI('POST',`${SERVER_URL}/add-course`,reqBody,reqHeader)
 
}
export const getAllCourseAPI=async(reqHeader)=>{
    return await commonAPI('GET',`${SERVER_URL}/get-course`,{},reqHeader)
 
}
export const getHomeCourseAPI=async()=>{
    return await commonAPI('GET',`${SERVER_URL}/get-Homecourse`,{})
 
}
export const CourseDetailsAPI=async(id)=>{
    return await commonAPI('GET',`${SERVER_URL}/get-coursebyId/${id}`,{})
 
}
export const deleteCourseAPI=async(id,reqHeader)=>{
    return await commonAPI('DELETE',`${SERVER_URL}/delete-course/${id}`,{},reqHeader)
}
export const EditCourseAPI=async(id,reqBody,reqHeader)=>{
    return await commonAPI('PUT',`${SERVER_URL}/edit-course/${id}`,reqBody,reqHeader)
 
}