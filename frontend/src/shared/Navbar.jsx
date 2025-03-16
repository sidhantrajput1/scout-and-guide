"use client"

import { useState } from "react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [aboutDropdownOpen, setAboutDropdownOpen] = useState(false)
  const [programsDropdownOpen, setProgramsDropdownOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const toggleAboutDropdown = () => {
    setAboutDropdownOpen(!aboutDropdownOpen)
  }

  const toggleProgramsDropdown = () => {
    setProgramsDropdownOpen(!programsDropdownOpen)
  }

  return (
    <nav className="bg-white border-b  border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <a href="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-blue-700">Scout & Guide Trust</span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-4">
            <a href="/" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700">
              Home
            </a>

            {/* About Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 flex items-center"
              >
                About Us
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {aboutDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a href="/about" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Who We Are
                    </a>
                    <a href="/about/mission" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Our Mission
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Programs Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProgramsDropdown}
                className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700 flex items-center"
              >
                Programs
                <svg
                  className="ml-1 h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {programsDropdownOpen && (
                <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    <a href="/programs/scout-guide" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                      Scout & Guide Training
                    </a>
                    <a
                      href="/programs/self-defense"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Self-Defense
                    </a>
                    <a
                      href="/programs/digital-learning"
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                    >
                      Digital Learning
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="/schools" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700">
              Schools
            </a>

            <a href="/volunteer" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700">
              Volunteer
            </a>

            <a href="/events" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700">
              Events
            </a>

            <a href="/contact" className="px-3 py-2 text-sm font-medium text-gray-700 hover:text-blue-700">
              Contact
            </a>
          </div>

          <div className="hidden md:flex md:items-center">
            <a
              href="/register"
              className="mr-2 px-4 py-2 text-sm font-medium text-blue-700 border border-blue-700 rounded-md hover:bg-blue-50"
            >
              Register
            </a>
            <a
              href="/donate"
              className="px-4 py-2 text-sm font-medium text-white bg-blue-700 rounded-md hover:bg-blue-800"
            >
              Donate
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="flex md:hidden items-center">
            <a
              href="/register"
              className="mr-2 px-3 py-1 text-sm font-medium text-blue-700 border border-blue-700 rounded-md hover:bg-blue-50 hidden sm:block"
            >
              Register
            </a>
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-blue-700 focus:outline-none"
            >
              {isMenuOpen ? (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white">
            <a href="/" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Home
            </a>

            {/* Mobile About Dropdown */}
            <div className="relative">
              <button
                onClick={toggleAboutDropdown}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 flex justify-between items-center"
              >
                About Us
                <svg
                  className={`h-4 w-4 transform ${aboutDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {aboutDropdownOpen && (
                <div className="pl-4">
                  <a href="/about" className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700">
                    Who We Are
                  </a>
                  <a
                    href="/about/mission"
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700"
                  >
                    Our Mission
                  </a>
                </div>
              )}
            </div>

            {/* Mobile Programs Dropdown */}
            <div className="relative">
              <button
                onClick={toggleProgramsDropdown}
                className="w-full text-left px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700 flex justify-between items-center"
              >
                Programs
                <svg
                  className={`h-4 w-4 transform ${programsDropdownOpen ? "rotate-180" : "rotate-0"}`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {programsDropdownOpen && (
                <div className="pl-4">
                  <a
                    href="/programs/scout-guide"
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700"
                  >
                    Scout & Guide Training
                  </a>
                  <a
                    href="/programs/self-defense"
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700"
                  >
                    Self-Defense
                  </a>
                  <a
                    href="/programs/digital-learning"
                    className="block px-3 py-2 text-sm font-medium text-gray-600 hover:text-blue-700"
                  >
                    Digital Learning
                  </a>
                </div>
              )}
            </div>

            <a href="/schools" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Schools
            </a>

            <a href="/volunteer" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Volunteer
            </a>

            <a href="/events" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Events
            </a>

            <a href="/contact" className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-blue-700">
              Contact
            </a>

            <div className="pt-4 pb-3 border-t border-gray-200">
              <div className="flex items-center px-3">
                <a
                  href="/donate"
                  className="w-full px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-md hover:bg-blue-800"
                >
                  Donate
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

