import React, { useState } from 'react'
import logo from "../../assets/logo.png";
import { IoIosEye , IoIosEyeOff} from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import user_img from "../../assets/User_img.png";
import { useDispatch } from 'react-redux';
import { registerUser } from '@/store/auth-slice';
import GoogleLoginButton from '@/components/common/googleBtn';
import { toast } from "react-toastify"; 

const initialState = {
  userName : "",
  email : "",
  password : "",
  MCID : `MC${Math.floor(100000 + Math.random() * 900000)}`
}


const Register = () => {

  const [openEye,setOpenEye] = useState(false);
  const [formData,setFormData] = useState(initialState);
  const [alertMessage, setAlertMessage] = useState("");
  const navigate = useNavigate();

  const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const isValidUsername = (userName) => /^[a-zA-Z0-9_]{3,}$/.test(userName);
  const isValidPassword = (password) => password.length >= 6;

  const isFormValid = 
    isValidUsername(formData.userName) && 
    isValidEmail(formData.email) && 
    isValidPassword(formData.password);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!isFormValid) {
      setAlertMessage("Invalid input. Please check the fields.");
      return;
    }
    setAlertMessage("");
    // dispatch(registerUser(formData)).then((data)=>{
    //   if(data?.payload?.success) {
    //     //create a toast (success in black)
    //     navigate("/auth/getStarted");
    //     console.log("Registration Successfull");

    //   }else {
    //     //create a toast (failure in red)
    //   }
      
    // });
     
    dispatch(registerUser(formData))
  .unwrap()
  .then((data) => {
    toast.success("Registration Successful", { theme: "dark" });
    navigate("/auth/getStarted");
  })
  .catch((err) => {
    toast.error(err.message || "User already exists", { theme: "dark" });
  });
  }

  return (
    <div className='mx-auto lg:w-[60%] md:w-[50%] sm:w-[60%] w-[100%] max-w-md space-y-6 text-center flex flex-col items-center justify-center font-poppins overflow-y-scroll scrollbar-hide mb-10'>
      
      <div className='flex flex-col items-center justify-center mt-10'>
        <img src={logo} alt="Root-Ed" className='lg:[60%] md:[50%] sm:[40%] w-[30%]'/>
      </div>
      
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-sm text-black mt-3'>Join over  <span className='text-[#40B47C] font-bold ml-1 mr-1'>2M</span> global social users</h2>
        <img src={user_img} alt="Motren-connect" className='w-[4rem]'/>
      </div>

      <div className='flex flex-col items-center justify-center gap-3'>
        <h2 className='font-medium lg:text-[1.2rem] md:text-[1rem] sm:text-[1rem] text-[1rem] text-[#626262]'>SignUp Account</h2>
        <div className='flex items-center justify-center gap-2'>
          <p className='font-medium lg:text-[1rem] md:text-[.8rem] sm:text-[.8rem] text-[.8rem]'>Already have an aacount ?</p>
          <p className='font-medium lg:text-[1rem] md:text-[.8rem] sm:text-[.8rem] text-[.8rem] text-[#40B47C] cursor-pointer' onClick={()=>navigate("/auth/login")}>Link to your account</p>
        </div>
      </div>
      <div className='bg-white/100 rounded-2xl p-6 w-[90%] max-w-md flex flex-col items-center justify-center border border-[#ccc]'>
          <div>
          <div className='flex flex-col items-center justify-center gap-3 mt-5 w-full'>
              <input 
                  type="text" 
                  className='bg-[#f4f3f3] lg:w-[80%] md:w-[90%] sm:w-[95%] w-[100%] lg:p-3 md:p-3 sm:p-3 p-3 rounded-[.5rem] outline-none border-none font-poppins font-light lg:text-[1rem] md:text-[1rem] sm:text-[1rem] text-[.8rem]' 
                  placeholder='UserName' 
                  name="userName"
                  value={formData.userName} 
                  onChange={handleChange}/>

              <input 
                  type="text" 
                  className='bg-[#f4f3f3] lg:w-[80%] md:w-[90%] sm:w-[95%] w-[100%] lg:p-3 md:p-3 sm:p-3 p-3 rounded-[.5rem] outline-none border-none font-poppins font-light lg:text-[1rem] md:text-[1rem] sm:text-[1rem] text-[.8rem]' 
                  placeholder='Email' 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}/>

              <div className='relative w-full'>
                <input 
                  type={openEye ? "text" : "password"} 
                  name="password"
                  className='bg-[#f4f3f3] lg:w-[80%] md:w-[90%] sm:w-[95%] w-[100%] lg:p-3 md:p-3 sm:p-3 p-3 rounded-[.5rem] outline-none border-none font-poppins font-light lg:text-[1rem] md:text-[1rem] sm:text-[1rem] text-[.8rem]' 
                  placeholder='password'
                  value={formData.password} 
                  onChange={handleChange}/>

                <div className='absolute top-4 lg:right-12 md:right-12 sm:right-11 right-5 text-gray-400'>{openEye ? <span onClick={()=>setOpenEye(false)}><IoIosEye /></span> : <span onClick={()=>{setOpenEye(true)}}><IoIosEyeOff /></span>}</div>
              </div>
              {alertMessage && (
                <div className='text-red-400 w-[90%]font-poppins text-sm'>
                  {alertMessage}
                </div>
              )}
              <div className='lg:w-[100%] md:w-[95%] sm:[100%] w-[130%] mt-3 flex flex-col items-center justify-center gap-2'>
                <button className='bg-primary_button lg:p-[.6rem] ms:p-[.5rem] sm:p-[.5rem] p-[.5rem] rounded-[.5rem] lg:w-[80%] md:w-[85%] sm:[80%] w-[70%] lg:text-[1rem] md:text-[1rem] sm:text-[1rem] text-[1rem] text-white' onClick={(e)=>{handleSubmit(e)}}>Sign Up</button>
                
              </div>
              {/* OAuth Google Authentication */}
                <div className='lg:w-[80%] md:w-[85%] sm:[80%] w-[90%]'>
                  <GoogleLoginButton/>
                </div>
              <h2 className='text-gray-400 text-sm '>Already have an account? <Link className='text-primary_button' to="/auth/login">Sign In</Link>. connect now!</h2>
          </div>
          </div>
      </div>
    </div>
  )
}

export default Register;