import React, { useState } from 'react'
import { Link } from 'react-router-dom';

const Header = () => {

  const [isOpen, setIsOpen] = useState(false);

 const toggleDropdown = () => {
    setIsOpen(!isOpen);
 };


  return (
    <nav className="fixed top-0 left-0 right-0 bg-white">
 <div className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="flex items-center justify-between h-16">
      <div className="flex items-center">
        <div className='flex-start'>
        <button  onMouseEnter={()=>toggleDropdown()} className="text-solid-700 hover:text-gray-900 px-3 py-2 rounded-md text-l font-medium">
          SHOP
        </button>
        {isOpen && (
        <div  className="dropdown-content absolute w-full bg-white shadow-lg rounded">
          <a
            href="#"
            className="block px-4 py-2 text-black hover:text-blue-500"
          >
            Item 1
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-black hover:text-blue-500"
          >
            Item 2
          </a>
          <a
            href="#"
            className="block px-4 py-2 text-black hover:text-blue-500"
          >
            Item 3
          </a>
        </div>
      )}
        </div>
        <Link to="/" className="text-solid-700 hover:text-gray-900 px-3 py-2 rounded-md text-l font-medium">
          STORY
        </Link>
      </div>

      <div className="text-center text-4xl text-solid-700 px-3 py-2 font-sans">
        DECEM<sup className="font-bold text-sm">10</sup>
      </div>

      <div className="flex items-center">
        <Link to="/" className="text-solid-700 hover:text-gray-900 px-3 py-2 rounded-md text-l font-medium">
          BASKET <i>(0)</i>
        </Link>
      </div>
    </div>
 </div>
</nav>
  )
}

export default Header