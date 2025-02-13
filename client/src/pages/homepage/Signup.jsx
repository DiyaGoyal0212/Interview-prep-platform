import React, { useState } from 'react';
import loginIcons from "../../assets/signin.gif";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import imageTobase64 from '../../helpers/imageTobase64';
import SummaryApi from '../../commonapi/index';
import {toast} from 'react-toastify';

const Signup = () => {
    const [showPassword, setPassword] = useState(false);
    const [confirmPassword, setconfirmPassword] = useState(false);
  const [data, setData] = useState({
    email : "",
    password: "",
    name: "",
    confirmPassword : "",
    profilePic : ""
  })

  const navigate = useNavigate()

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setData((previous) => {
      return{
        ...previous, [name]:value
      }
    });
  }

  const handleUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
        try {
            const imagePic = await imageTobase64(file);
            console.log("imagePic", imagePic);
            setData((previous) => ({
                ...previous,
                profilePic: imagePic
            }));
        } catch (error) {
            console.error("Error converting image to base64", error);
        }
    }
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(data.password === data.confirmPassword){
      // console.log("SummaryApi.signup.url", SummaryApi.signup.url);
      //backend data to frontend
        const dataResponse = await fetch(SummaryApi.signup.url, {
          method: SummaryApi.signup.method,
          headers: {
          "content-type" : "application/json"
        },
        body: JSON.stringify(data)
      })

      const dataApi = await dataResponse.json();

      //toastify
      if(dataApi.success){
        toast.success(dataApi.message)
        navigate('/login');
      }
      else if(dataApi.error){
        toast.error(dataApi.message)
      }
      console.log("data", dataApi);
    }
  else{
    toast.error("Passwords don't match! Please check again.");
  }
};

  console.log("data login", data);

  return (
    <>
    <section className='signup pt-4'>
        <div className='container mx-auto p-4 pt-10'>
            <div className='bg-blue-100 p-4 w-full max-w-sm mx-auto rounded-xl outline-double'>
                <div className='w-20 h-20 mx-auto relative overflow-hidden rounded-full'>
                    <div>
                        <img src={data.profilePic || loginIcons} alt='Profile' className='rounded-full' />   
                    </div>
                    <form>
                        <label>
                            <div className='text-xs bg-slate-200 pb-5 pt-2 cursor-pointer font-medium text-center py-4 absolute bottom-0 w-full bg-opacity-75'>
                                Upload Photo
                            </div>
                            <input type="file" className='hidden' onChange={handleUpload} accept="image/*" />
                        </label>
                    </form>
                </div>

                <form className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit}>
                <div className='grid'>
                    <label>Name: </label>
                    <div className='bg-blue-50 p-2'>
                      <input type='text' placeholder='Enter your name'name="name" value={data.name} onChange={handleOnChange} className='h-full w-full p-2 outline-none bg-transparent' required/>
                    </div>
                  </div>

                  <div className='grid'>
                    <label>Email: </label>
                    <div className='bg-blue-50 p-2'>
                      <input type='email' placeholder='Enter Email'name="email" value={data.email} onChange={handleOnChange} className='h-full w-full p-2 outline-none bg-transparent' required/>
                    </div>
                  </div>

                  <div>
                    <label>Password: </label>
                    <div className='bg-blue-100 p-2 flex'>
                      <input type={showPassword ? "text" : "password"}  placeholder="Enter Password"name='password' value={data.password} onChange={handleOnChange} className='h-full w-full outline-none bg-transparent' required />  
                      <div className='cursor-pointer text-lg' onClick={() => setPassword((previous) => !previous) }>
                        <span>
                          {
                            showPassword ? <FaEyeSlash/> : <FaEye/>
                          }   
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <label>Confirm Password: </label>
                    <div className='bg-blue-100 p-2 flex'>
                      <input type={confirmPassword ? "text" : "password"}  placeholder="Enter confirm password"name='confirmPassword' value={data.confirmPassword} onChange={handleOnChange} className='h-full w-full outline-none bg-transparent' required />  
                      <div className='cursor-pointer text-lg' onClick={() => setconfirmPassword((previous) => !previous) }>
                        <span>
                          {
                            showPassword ? <FaEyeSlash/> : <FaEye/>
                          }   
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className='my-3'>
                    <button className='bg-blue-600 text-white px-8 py-2 w-full max-w-[250px] mx-auto rounded-full hover:scale-110 transition-all block mt-4'>Sign Up</button>
                  </div>
                </form>

                <p className='my-3 text-center'>already have account ? <Link to={"/login"} className='text-red-600 hover:text-red-700 hover:underline'>Login</Link></p>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Signup
