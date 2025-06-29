import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'

function Sidenav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  document.title = "Plotify | Navigation";

  return (
    <>
      {/* Single Hamburger Icon for Mobile (Top Left Corner) */}
      <button
        className="md:hidden fixed top-4 left-4 z-60 text-white text-2xl p-2 bg-black/50 backdrop-blur-sm rounded-lg hover:bg-indigo-900/60 transition-all duration-300"
        onClick={toggleMenu}
        aria-label={isOpen ? "Close menu" : "Open menu"}
      >
        <i className={isOpen ? "ri-close-fill" : "ri-menu-fill"}></i>
      </button>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "-100%", opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="md:hidden fixed top-0 left-0 w-3/4 sm:w-2/5 h-screen bg-[url('/glassy.jpg')] bg-cover bg-fixed bg-center z-40 overflow-hidden"
          >
            <div className="w-full h-full bg-gradient-to-br from-black/90 via-indigo-900/80 to-purple-900/70 backdrop-blur-3xl p-4 sm:p-6 flex flex-col">
              <SidebarContent toggleMenu={toggleMenu} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Sidebar */}
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        className="hidden md:block w-full md:w-[25%] lg:w-[20%] h-screen border-r-2 border-white/10 bg-[url('/glassy.jpg')] bg-cover bg-fixed bg-center relative overflow-hidden"
      >
        <div className="absolute inset-0 pointer-events-none">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
        </div>
        <div className="w-full h-full bg-gradient-to-br from-black/90 via-indigo-900/80 to-purple-900/70 backdrop-blur-3xl p-4 sm:p-6 lg:p-8 relative z-10">
          <SidebarContent />
        </div>
      </motion.div>
    </>
  )
}

function SidebarContent({ toggleMenu }) {
  return (
    <>
      <h1 className="text-lg sm:text-xl lg:text-2xl font-bold text-white flex items-center">
        <i className="text-indigo-400 ri-movie-2-ai-fill mr-2"></i>
        <span>Plotify</span>
      </h1>
      <nav className="flex flex-col text-zinc-200 text-base sm:text-lg mt-6">
        <h1 className="font-semibold text-lg sm:text-xl text-white mt-6 mb-4">New Feeds</h1>
        <Link
          to="/trending"
          className="hover:bg-indigo-900/60 hover:text-white rounded-lg transition-all duration-300 py-2 px-3 sm:px-4"
          onClick={toggleMenu}
        >
          <i className="ri-fire-fill mr-2"></i>Trending
        </Link>
        <Link
          to="/popular"
          className="hover:bg-indigo-900/60 hover:text-white rounded-lg transition-all duration-300 py-2 px-3 sm:px-4"
          onClick={toggleMenu}
        >
          <i className="ri-glasses-fill mr-2"></i>Popular
        </Link>
        <Link
          to="/movies"
          className="hover:bg-indigo-900/60 hover:text-white rounded-lg transition-all duration-300 py-2 px-3 sm:px-4"
          onClick={toggleMenu}
        >
          <i className="ri-film-fill mr-2"></i>Movies
        </Link>
        <Link
          to="/tvshows" // Changed to lowercase for consistency
          className="hover:bg-indigo-900/60 hover:text-white rounded-lg transition-all duration-300 py-2 px-3 sm:px-4"
          onClick={toggleMenu}
        >
          <i className="ri-tv-fill mr-2"></i>TV Shows
        </Link>
        <Link
          to="/people"
          className="hover:bg-indigo-900/60 hover:text-white rounded-lg transition-all duration-300 py-2 px-3 sm:px-4"
          onClick={toggleMenu}
        >
          <i className="ri-team-fill mr-2"></i>People
        </Link>
      </nav>
      <hr className="border-none h-[1px] bg-white/20 mt-4" />
      <nav className="flex flex-col text-zinc-200 text-base sm:text-lg">
        <h1 className="font-semibold text-lg sm:text-xl text-white mt-6 mb-4">Inside Look</h1>
        <Link
          to="/whoweare"
          className="hover:bg-indigo-900/60 hover:text-white rounded-lg transition-all duration-300 py-2 px-3 sm:px-4"
          onClick={toggleMenu}
        >
          <i className="ri-information-fill mr-2"></i>Who we are
        </Link>
        <Link
          to="/contactus"
          className="hover:bg-indigo-900/60 hover:text-white rounded-lg transition-all duration-300 py-2 px-3 sm:px-4"
          onClick={toggleMenu}
        >
          <i className="ri-phone-fill mr-2"></i>Contact us
        </Link>
      </nav>
    </>
  )
}

export default Sidenav