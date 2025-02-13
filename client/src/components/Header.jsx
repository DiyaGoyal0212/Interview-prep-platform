import React, {useState} from 'react'
import {GrSearch} from "react-icons/gr";
import {FaRegCircleUser} from "react-icons/fa6";
import { FaShoppingCart } from 'react-icons/fa';
import {Link} from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import SummaryApi from '../commonapi/index';
import {toast} from 'react-toastify'
import { setUserDetails } from '../store/userSlice';
import ROLE from '../commonapi/role';

const Header = () => {
  const user = useSelector(state => state?.user?.user)
  const dispatch = useDispatch()
  const [menuDisplay, setMenuDisplay] = useState(false)

  console.log("user header", user)

  const handleLogout = async() => {
    const fetchData = await fetch(SummaryApi.Logout_user.url, {
      method : SummaryApi.Logout_user.method,
      credentials : 'include'
    })

    const data = await fetchData.json()

    if(data.success){
      toast.success(data.message)
      dispatch(setUserDetails(null))
    }
    if(data.error){
      toast.error(data.message)
    }
  }

  return (
    <header className='h-19 shadow-md bg-white'>
      <div className="h-full container mx-auto flex items-center px-3 justify-between">
        <div className="text-start text-2xl my-4 font-bold text-blue-500">
          <Link to={"/"}>GlobalGoods</Link> 
        </div>

        <div className='hidden lg:flex items-center w-full justify-between max-w-sm border rounded-l-xl focus-within:shadow-lg pl-3 outline-none'>
          <input type='text' placeholder='Search products here' className='w-full outline-none' />
          <div className='text-lg flex items-center bg-blue-500 min-w-[50px] h-8 justify-center rounded-r-xl text-white '>
            <GrSearch/>
          </div>
        </div>

        <div className='flex items-center gap-10'>
          <div className='relative flex justify-center'>
            {
              user?._id && (
                <div className='text-2xl cursor-pointer relative flex justify-center'onClick={()=> setMenuDisplay(previous => !previous) }>
                  {user?.profilePic ? (
                    <img src={user?.profilePic} className='w-10 h-10 rounded-full' alt={user?.name} />
                  ) : (
                    <FaRegCircleUser/>
                  )}
                </div>
              )
            }
            

            { 
              menuDisplay && (
              <div className='absolute bg-white bottom-0 top-11 h-fit p-2 shadow-lg rounded '>
                <nav>
                  {
                    user?.role === ROLE.ADMIN && (
                      <Link to={"admin-panel"} className='whitespace-nowrap hidden md:block hover:bg-slate-200 p-2' >Admin Panel</Link>
                    )
                  }
                  
                </nav>
              </div>
            )}
          </div>

          <div className='text-2xl cursor-pointer flex items-center relative'>
            <span><FaShoppingCart/></span>
            <div className='bg-blue-500 text-white w-5 h-5 rounded-full p-1 flex items-center justify-center absolute -top-3 -right-3 '>
              <p className='text-sm'>0</p>
            </div>
          </div>

          <div>
            {
              user?._id ? (
                <button onClick={handleLogout} className='bg-blue-600 rounded-full text-white py-1 px-4 font-center hover:bg-blue-400'>Logout</button>
              ) : 
              (
                <Link to={"/login"} className='bg-blue-600 rounded-full text-white py-1 px-4 font-center hover:bg-blue-400'>Login</Link>
              )
            }
            
          </div>
        </div>


      </div>
    </header>
  )
}

export default Header
