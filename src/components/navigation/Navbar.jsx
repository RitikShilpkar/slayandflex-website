import { useState } from 'react'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="w-full bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex justify-between items-center h-20">
          <div className="flex-shrink-0">
            <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              SlayAndFlex
            </h1>
          </div>
          
          <div className="hidden md:flex space-x-8">
            <a href="#services" className="text-gray-700 hover:text-purple-600 font-medium">Services</a>
            <a href="#why-us" className="text-gray-700 hover:text-purple-600 font-medium">Why Us</a>
            <a href="#contact" className="text-gray-700 hover:text-purple-600 font-medium">Contact</a>
          </div>

          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </div>

      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="px-4 py-2 space-y-1">
            <a href="#services" className="block py-2 text-gray-700 hover:bg-gray-100">Services</a>
            <a href="#why-us" className="block py-2 text-gray-700 hover:bg-gray-100">Why Us</a>
            <a href="#contact" className="block py-2 text-gray-700 hover:bg-gray-100">Contact</a>
          </div>
        </div>
      )}
    </nav>
  )
} 