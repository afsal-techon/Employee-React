

import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

  const navigatte = useNavigate()

  const handleLogout = () =>{
    localStorage.removeItem('token');
    navigatte('/login')

  }
  return (
  
        <div className='bg-teal-600 flex items-center justify-between px-12 py-2'>
            <p className='text-white'>Welcome, Admin</p>
            <button onClick={handleLogout} className='bg-teal-700 px-4 py-1 text-white rounded-sm cursor-pointer'>Logout</button>
        </div>

  )
}

export default Navbar