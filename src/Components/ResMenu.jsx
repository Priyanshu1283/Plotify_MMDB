import React from 'react'
import { Link } from 'react-router-dom'

function ResMenu() {
  return (
    <>
        <h1 className="font-bold text-4xl mb-5 text-white">
            <i className="text-[#6556cd] ri-movie-2-fill mr-1"></i>
            <span>Plotify </span>
          </h1>
          <div className="flex flex-col gap-y-6 pt-8">
            <Link to="/trending" className="text-3xl text-white font-semibold">Trending</Link>
            <Link to="/popular" className="text-3xl text-white font-semibold">Popular</Link>
            <Link to="/movies" className="text-3xl text-white font-semibold">Movies</Link>
            <Link to="/TVshows" className="text-3xl text-white font-semibold">TV Shows</Link>
            <Link to="/people" className="text-3xl text-white font-semibold">People</Link>
            <hr className="mt-6"/>
            <div className="flex flex-col gap-y-2 mt-6">
              <Link to="/whoweare" className="text-2xl text-white font-semibold text-zinc-400">About Me</Link>
              <Link to="/contactus" className="text-2xl text-white font-semibold text-zinc-400">Contact Us</Link>
            </div>
          </div>
    </>
  )
}

export default ResMenu