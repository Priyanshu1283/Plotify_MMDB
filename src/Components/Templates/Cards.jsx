import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/no_image.jpg'
import { motion } from 'framer-motion'

function Cards({ data, title }) {
  return (
    <div className="w-full bg-transparent px-4 md:px-6 lg:px-12">
      <div className="flex flex-wrap justify-center gap-4 md:gap-6">
        {data.map((d, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
            className="w-full sm:w-1/2 md:w-1/4 lg:w-1/5 relative"
          >
            <Link
              to={`/${d.media_type || title}/details/${d.id}`}
              className="group block bg-black/30 backdrop-blur-sm rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-white/10"
            >
              <img
                className="w-full h-[40vh] md:h-[45vh] object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105"
                src={
                  d.poster_path || d.backdrop_path || d.profile_path
                    ? `https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path || d.profile_path}`
                    : noimage
                }
                alt={d.name || d.title || d.original_name || d.original_title || 'Media'}
              />
              <div className="p-4">
                <h1 className="text-lg md:text-xl text-white font-semibold truncate group-hover:text-indigo-400 transition-colors duration-300">
                  {d.name || d.title || d.original_name || d.original_title}
                </h1>
              </div>
              {d.vote_average >= 0 && (
                <div className="absolute top-4 right-4 w-12 h-12 bg-gradient-to-br from-yellow-400 to-yellow-600 text-white flex justify-center items-center rounded-full text-sm font-medium shadow-md">
                  {((d.vote_average * 10).toFixed()) / 10}/10
                </div>
              )}
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Cards