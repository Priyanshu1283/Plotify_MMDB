import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Contactus() {
  const navigate = useNavigate();
  document.title = "Plotify || Support";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen w-full  px-4 sm:px-6 md:px-[10%] flex flex-col relative overflow-hidden"
    >
      {/* Particle Effect Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="particle particle-1"></div>
        <div className="particle particle-2"></div>
        <div className="particle particle-3"></div>
        <div className="particle particle-4"></div>
      </div>
      <div className="w-full min-h-screen bg-gradient-to-br from-black/90 via-indigo-900/80 to-purple-900/70 backdrop-blur-3xl rounded-xl shadow-2xl relative z-10">
        {/* Navigation */}
        <nav className="h-[10vh] w-full text-white flex items-center justify-between sm:justify-start gap-4 sm:gap-6 py-4 text-lg">
          <Link
            to={"/"}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 hover:shadow-xl transition-all duration-300"
            aria-label="Go to homepage"
          >
            Go Home
          </Link>
          <Link
            onClick={() => navigate(-1)}
            className="hover:text-indigo-400 ri-arrow-left-line text-2xl sm:text-xl transition-colors duration-300"
            aria-label="Go back"
          ></Link>
        </nav>
        {/* Main Content */}
        <div className="flex flex-col justify-center items-center pt-16 md:pt-24 min-h-[80vh] text-center">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-6 tracking-tight"
          >
            Hey, oops!
          </motion.h1>
          <motion.a
            href="tel:+918102346798"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-lg md:text-xl text-indigo-400 font-medium underline hover:text-indigo-300 transition-colors duration-300 mb-8"
            aria-label="Contact phone number"
          >
            +91 8102346798
          </motion.a>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-lg md:text-xl text-zinc-200 font-medium leading-relaxed bg-black/30 backdrop-blur-sm rounded-lg p-6 border border-white/10 max-w-md"
          >
            This page will be <br /> updated in next commit <br /> 😁
          </motion.h2>
        </div>
      </div>
    </motion.div>
  )
}

export default Contactus