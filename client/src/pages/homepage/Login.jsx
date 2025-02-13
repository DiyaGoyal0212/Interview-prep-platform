import React, { useContext, useState } from 'react'
import loginIcons from "../../assets/signin.gif";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';
import SummaryApi from '../../commonapi/index';
import {toast} from 'react-toastify';
import Context from '../../context';

const Login = () => {
  const [showPassword, setPassword] = useState(false);
  const [data, setData] = useState({
    email : "",
    password: ""
  })

  const navigate = useNavigate();
  const {fetchUserDetails}  = useContext(Context)

  const handleOnChange = (e) => {
    const {name, value} = e.target
    setData((previous) => {
      return{
        ...previous, [name]:value
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    const dataResponse = await fetch(SummaryApi.signIn.url, {
      method: SummaryApi.signIn.method,
      credentials : 'include',
      headers: {
      "content-type" : "application/json"
      },
      body: JSON.stringify(data)
  })

  const dataApi = await dataResponse.json();

  if(dataApi.success){
    toast.success(dataApi.message)
    navigate('/');
    fetchUserDetails()
  }
  if(dataApi.error){
    toast.error(dataApi.message)
  }


  }
  console.log("data login", data);

  return (
    <>
    <section className='login pt-6'>
        <div className='container mx-auto p-4 pt-10'>
            <div className='bg-blue-100 p-4 w-full max-w-sm mx-auto rounded-xl outline-double'>
                <div className='w-20 h-20 mx-auto'>
                    <img src={loginIcons} alt='login' className='rounded-full'/>
                </div>

                <form className='pt-6 flex flex-col gap-3' onSubmit={handleSubmit}>
                  <div className='grid'>
                    <label>Email: </label>
                    <div className='bg-blue-50 p-2'>
                      <input type='email' placeholder='Enter Email'name="email" value={data.email} onChange={handleOnChange} className='h-full w-full p-2 outline-none bg-transparent'/>
                    </div>
                  </div>

                  <div>
                    <label>Password</label>
                    <div className='bg-blue-100 p-2 flex'>
                      <input type={showPassword ? "text" : "password"}  placeholder="Enter Password"name='password' value={data.password} onChange={handleOnChange} className='h-full w-full outline-none bg-transparent' />  
                      <div className='cursor-pointer text-lg' onClick={() => setPassword(previous => !previous) }>
                        <span>
                          {
                            showPassword ? <FaEyeSlash/> : <FaEye/>
                          }   
                        </span>
                      </div>
                    </div>
                    <Link to={'/forgot-password'} className='block w-fit ml-auto hover:underline hover:text-red-600'>Forgot Password?</Link>
                  </div>

                  <div className='my-4'>
                    <button className='bg-blue-600 text-white px-8 py-2 w-full max-w-[250px] mx-auto rounded-full hover:scale-110 transition-all block mt-4'>Login</button>
                  </div>
                </form>

                <p className='my-3 text-center'>Don't have account ? <Link to={"/signup"} className='text-red-600 hover:text-red-700 hover:underline'>Sign up</Link></p>
            </div>
            
        </div>
    </section>
    </>
  )
}

export default Login
