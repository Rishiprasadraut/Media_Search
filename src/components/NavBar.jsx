import React from 'react'
import { Link } from 'react-router-dom'
const NavBar = () => {
  return (
    <div>
      <div className="flex justify-between items-center bg-blue-900 py-3 px-4 md:px-7">
            <h2 className="text-center p-2 sm:p-5 text-lg sm:text-2xl font-medium text-white">Media Search</h2>
           <div className="flex gap-2 sm:gap-5 items-center text-sm sm:text-xl">
             <Link className="text-sm sm:text-base font-medium active:scale-95 text-blue-800 bg-gray-300 rounded px-2 sm:px-4 py-1 sm:py-2" to='/'>Search</Link>
             <Link className="text-sm sm:text-base font-medium active:scale-95 text-blue-800 bg-gray-300 rounded px-2 sm:px-4 py-1 sm:py-2" to='/collection'>Collection</Link>
           </div>
            </div>
    </div>
  )
}

export default NavBar
