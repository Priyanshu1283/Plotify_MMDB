import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { motion } from 'framer-motion'

function Whoweare() {
  const navigate = useNavigate();
  document.title = "Plotify | Who We Are";

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="min-h-screen w-full b bg-cover bg-fixed bg-center px-4 sm:px-6 md:px-[10%] flex flex-col relative overflow-hidden"
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
          <motion.img
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            src="/IMG_5846.JPG"
            alt="Your Profile"
            className="w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-xl mb-6"
          />
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-3xl md:text-4xl font-bold text-white mb-4 tracking-tight"
          >
          Priyanshu hu bhai
          </motion.h1>
          <div className="flex gap-5 mb-6 text-2xl md:text-2xl">
            <a
              href="https://www.instagram.com/pranshu_iq?igsh=N2FrODVwOGVyNjh3"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors duration-300"
              aria-label="Instagram profile"
            >
              <i className="ri-instagram-fill"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/priyanshu-kumar-03310a253?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors duration-300"
              aria-label="LinkedIn profile"
            >
              <i className="ri-linkedin-box-fill"></i>
            </a>
            <a
              href="https://www.snapchat.com/add/your_snapchat_id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-indigo-400 transition-colors duration-300"
              aria-label="Snapchat profile"
            >
              <i className="ri-snapchat-fill"></i>
            </a>
          </div>
         <div>
          <h2>Hey This is not Dynamic App coz ,This is using API related contenent</h2>
         </div>
        </div>
      </div>
    </motion.div>
  )
}

export default Whoweare