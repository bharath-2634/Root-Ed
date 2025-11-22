import React, { useState } from 'react';
import logo from "../../assets/logo.png";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";
import { Link, useNavigate } from 'react-router-dom';
import user_img from "../../assets/User_img.png";
import { useDispatch } from 'react-redux';
import { loginUser } from '@/store/auth-slice';
import GoogleLoginButton from '@/components/common/googleBtn';
import { toast } from "react-toastify"; 


const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const [openEye, setOpenEye] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();


  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(formData)).then((data)=>{

      if(data?.payload?.success) {
        toast.success(data?.payload?.message || "Login successful!", {
          style: { backgroundColor: "black", color: "dark" }, 
        });
        navigate("/main/home");
      }else {
        toast.error(data?.payload?.message || "Login failed!");
      }
    })
  }



  return (
    <div className='mx-auto lg:w-[60%] md:w-[50%] sm:w-[60%] w-[100%] max-w-md space-y-6 text-center flex flex-col items-center justify-center font-poppins overflow-auto mb-10'>
      <div className='flex flex-col items-center justify-center mt-10'>
        <img src={logo} alt="Root-Ed" className='lg:[60%] md:[50%] sm:[40%] w-[30%]'/>
      </div>
      <div className='flex flex-col items-center justify-center gap-2'>
        <h2 className='text-sm text-black mt-3'>Join over  <span className='text-[#40B47C] font-bold ml-1 mr-1'>2M</span> global social users</h2>
        <img src={user_img} alt="Motren-connect" className='w-[4rem]' />
      </div>

      <div className='flex flex-col items-center justify-center gap-3'>
        <h2 className='font-medium lg:text-[1.2rem] md:text-[1rem] sm:text-[1rem] text-[1rem] text-[#626262]'>Welcome Back !</h2>
        <div className='flex items-center justify-center gap-2'>
          <p className='font-medium lg:text-[1rem] md:text-[.8rem] sm:text-[.8rem] text-[.8rem]'>Don't have an account ?</p>
          <p className='font-medium lg:text-[1rem] md:text-[.8rem] sm:text-[.8rem] text-[.8rem] text-[#40B47C] cursor-pointer' onClick={()=>navigate("/auth/register")}>Create an account</p>
        </div>
      </div>

      <div className='bg-white/100 rounded-2xl p-6 w-[90%] max-w-md flex flex-col items-center justify-center border border-[#ccc]'>
        
        <div className='flex flex-col items-center justify-center gap-3 mt-5 w-full'>
          {/* Email Input */}
          <input 
            type="text" 
            name="email"
            value={formData.email} 
            onChange={handleChange}
            className='bg-[#f4f3f3] lg:w-[80%] md:w-[90%] sm:w-[95%] w-[90%] lg:p-3 md:p-3 sm:p-3 p-3 rounded-[.4rem] outline-none border-none font-poppins font-light lg:text-[1rem] md:text-[1rem] sm:text-[1rem] text-[.8rem]' 
            placeholder='UserName/Email' 
          />

          {/* Password Input */}
          <div className='relative w-full'>
            <input 
              type={openEye ? "text" : "password"} 
              name="password"
              value={formData.password} 
              onChange={handleChange}
              className='bg-[#f4f3f3]  lg:w-[80%] md:w-[90%] sm:w-[95%] w-[90%] lg:p-3 md:p-3 sm:p-3 p-3 rounded-[.4rem] outline-none border-none font-poppins font-light lg:text-[1rem] md:text-[1rem] sm:text-[1rem] text-[.8rem]' 
              placeholder='Password' 
            />
            <div className='absolute top-4 lg:right-12 md:right-12 sm:right-11 right-5 text-gray-400'>
              {openEye ? 
                <span onClick={() => setOpenEye(false)}><IoIosEye /></span> : 
                <span onClick={() => setOpenEye(true)}><IoIosEyeOff /></span>
              }
            </div>
          </div>

          <div className='w-[100%] mt-3 flex flex-col items-center justify-center gap-2'>
            <button className='bg-primary_button lg:p-[.6rem] ms:p-[.5rem] sm:p-[.5rem] p-[.5rem] rounded-[.5rem] lg:w-[80%] md:w-[85%] sm:[80%] w-[90%] lg:text-[1rem] md:text-[1rem] sm:text-[1rem] text-[1rem] text-white' onClick={(e)=>{handleSubmit(e)}}>Sign in</button>
          </div>
          
            <div className='lg:w-[80%] md:w-[85%] sm:[80%] w-[90%]'>
              <GoogleLoginButton/>
            </div>

          <h2 className='text-gray-400 text-sm'>
            Don't have an account? 
            <Link className='text-primary_button' to="/auth/register"> Sign up</Link>. It's free!
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Login;
