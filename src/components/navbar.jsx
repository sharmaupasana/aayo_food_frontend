import React from 'react'

function NavBar() {
  return (
    <div className='bg-white shadow-md w-full'>
        <div className='w-[80%] flex items-center justify-between mx-auto py-3'>
            <img className='w-[6%] hover:rotate-[360deg] transition-all duration-500' src={require("../assets/logo.png")} alt="" />

            <ul className='flex gap-8'>
                <li className='font-semibold cursor-pointer transition-all duration-500 hover:text-primary'>Home</li>
                <li className='font-semibold cursor-pointer transition-all duration-500 hover:text-primary'>Restaurant</li>
                <li className='font-semibold cursor-pointer transition-all duration-500 hover:text-primary'>Order</li>
                <li className='font-semibold cursor-pointer transition-all duration-500 hover:text-primary'>Profile</li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar