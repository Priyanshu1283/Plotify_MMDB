import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion'

function Trailer() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const category = pathname.includes("movie") ? "movie" : "tv";
  const ytvideo = useSelector(state => state[category].info.videos);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="fixed w-screen h-screen top-0 left-0 flex items-center justify-center bg-[url('/glassy.jpg')] bg-cover bg-fixed bg-center z-[100]"
    >
      <div className="w-full h-full bg-black/80 backdrop-blur-xl flex items-center justify-center">
        <Link
          onClick={() => navigate(-1)}
          className="fixed left-4 md:left-8 top-4 md:top-8 text-white text-3xl hover:text-indigo-400 transition-colors duration-300 ri-close-fill"
        ></Link>

        {ytvideo?.key ? (
          <div className="relative w-[90%] max-w-5xl h-[50vh] md:h-[80vh] rounded-lg overflow-hidden shadow-2xl border border-white/10">
            <ReactPlayer
              height="100%"
              width="100%"
              url={`https://www.youtube.com/watch?v=${ytvideo.key}`}
              controls
              playing
              className="absolute top-0 left-0"
            />
          </div>
        ) : (
          <h1 className="text-2xl md:text-3xl text-white font-semibold hover:text-yellow-400 transition-colors duration-300">
            No trailer found!
          </h1>
        )}
      </div>
    </motion.div>
  )
}

export default Trailer