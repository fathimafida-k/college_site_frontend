import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { toast, ToastContainer } from 'react-toastify';
import { loginUserAPI, registerUserAPI } from './AllAPI';


function Auth({insideregister}) {
    const [userData , setuserData] = useState({name:"",email:"",password:"",role:""})
console.log(userData);
const navigate = useNavigate()

  const handleRegister=async()=>{
    const{name,email,password,role} = userData
    if(name&&email&&password&&role){
      try{
       const result = await registerUserAPI(userData)
       console.log(result);
       if(result.status==200){

        toast.success("Registered Succesfully. Please login to get access of your account")
        navigate('/login')
        setuserData({name:"",email:"",password:""})


       }

       else if(result.status==406){
        
        toast.error(result.response.data)
       }
       
      }
      catch(err){
        console.log(err);
        
      }
    }
    else{
      toast.warning("Enter the fields completely")
    }
  }

const handleLogin=async()=>{
     const{email,password} = userData
     if(email&&password){
      const result = await loginUserAPI(userData)
      console.log("login",result);
      if(result.status==200){

       
        sessionStorage.setItem("user",JSON.stringify(result.data.user))
           sessionStorage.setItem("token",result.data.token)

    //    const role = result.data.user.role; 
    //     if(role=="admin"){
          navigate('/program-manage')
    //     }
    //     else if(role=="user"){
    //       navigate('/user')
    //     }
       
      }
      else if(result.status==403){
 toast.error(result.response.data)
      }
      
     }
     else{
      toast.warning ("Enter the fields completely")
     }
  }

  return (
<div style={{width:"100vw",height:"100%",backgroundColor:"white"
}}>
       <h2 className='text-center pt-5' style={{color:"#04033afd",fontFamily:"Playfair display"}}>{insideregister ? "Create your Account" :"Login to your Account"}</h2>
    <div className='d-flex justify-content-center align-items-center mt-2' style={{height:"100vh"}}>
     
        <div className='d-flex justify-content-center align-items-center flex-column' style={{ width:"38rem",height:"30rem",background:"linear-gradient(135deg, #0A1A47, #162B76)",borderRadius:"5px"}}>

         {insideregister && <input onChange={(e)=>setuserData({...userData,name:e.target.value})} style={{width:"80%"}} className='form-control' type="text" placeholder='Username' />} <br />

            <input onChange={(e)=>setuserData({...userData,email:e.target.value})}  style={{width:"80%"}}  className='form-control' type="text" placeholder='Email' /> <br />
           

            <input onChange={(e)=>setuserData({...userData,password:e.target.value})} style={{width:"80%"}} className='form-control' type="text" placeholder='Password' /> <br />

            {insideregister && (
  <select
    className="form-control"
    style={{ width: "80%", marginBottom: "1rem" }}
    defaultValue=""
    onChange={(e)=>setuserData({...userData,role:e.target.value})} 
  >
    <option value="" disabled>
      Register As
    </option>
    <option value="student">Student</option>
    <option value="faculity">Faculty</option>
  </select>
)}


  {insideregister ?     <button onClick={handleRegister}  className='btn mt-3 fw-bold' style={{fontFamily:"lora",backgroundColor:"#ffffffff",color:"rgba(0, 0, 0, 1)",width:"30%"}}>Register</button>
:
<button onClick={handleLogin} className='btn mt-3 fw-bold' style={{fontFamily:"lora",backgroundColor:"#c9d0cfff",color:"rgba(0, 0, 0, 1)",width:"30%"}}>Login</button>}

 { insideregister ?     <p style={{fontFamily:"poppins",color:"white"}}>Already have an account ? <Link to={'/login'} style={{color:"rgba(49, 102, 105, 1)"}}>Login</Link></p>
 :
         <p className='mt-2' style={{fontFamily:"poppins",color:"white"}}>*Admin access only </p>}
        </div>
            </div>
</div>
  )
}

export default Auth