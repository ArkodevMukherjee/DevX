import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='w-full h-auto text-white p-5'>
      <div className='flex justify-between items-center'>
        <div className="left">
          &lt; DevX /  &gt;
        </div>

        {/* Hamburger Button */}
        <button
          className='lg:hidden block'
          onClick={toggleMenu}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Desktop Menu */}
        <div className="hidden lg:block">
          <ul className='flex flex-row gap-5'>
            <li className="hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-pink-500 transition-all duration-300">Home</li>
            <li className="hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-pink-500 transition-all duration-300">About</li>
            <li className="hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-pink-500 transition-all duration-300">Comments</li>
            <li className="hover:text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-violet-500 hover:from-violet-500 hover:to-pink-500 transition-all duration-300">Contact</li>
          </ul>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden w-full mt-4">
          <ul className='flex flex-col gap-4'>
            <li className="hover:text-amber-400">Home</li>
            <li className="hover:text-amber-400">About</li>
            <li className="hover:text-amber-400">Comments</li>
            <li className="hover:text-amber-400">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  )
}

export default Navbar