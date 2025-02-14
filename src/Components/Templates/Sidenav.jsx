import React from 'react'
import { Link } from 'react-router-dom'

function Sidenav() {
  return (
    <div className={`hidden md:block w-[20%] h-full border-r-2 border-zinc-500 lg:p-6 md:px-3 md:py-6`}>
        <h1 className='lg:text-2xl md:text-lg font-bold'>
            <i className="text-[#6556cd] ri-movie-2-ai-fill mr-1"></i>
            <span>CINÉCLAIR</span>
        </h1>
        <nav className='flex flex-col text-zinc-400 text-lg text-md'>
            <h1 className='font-semibold text-xl mt-7 mb-4 text-white'>New Feeds</h1>
            <Link to="/trending" className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-200 py-3 px-4'><i className="ri-fire-fill mr-1"></i>Trending</Link>
            <Link to="/popular" className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-200 py-3 px-4'><i className="ri-glasses-fill mr-1"></i>Popular</Link>
            <Link to="/movies" className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-200 py-3 px-4'><i className="ri-film-fill mr-1"></i>Movies</Link>
            <Link to="/TVshows" className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-200 py-3 px-4'><i className="ri-tv-fill mr-1"></i>TV Shows</Link>
            <Link to="/people" className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-200 py-3 px-4'><i className="ri-team-fill mr-1"></i>People</Link>
        </nav>   
        <hr className='border-none h-[1px] bg-zinc-500 mt-4'/>
        <nav className='flex flex-col text-zinc-400 text-lg text-md'>
            <h1 className='font-semibold text-xl mt-6 mb-4 text-white'>Inside Look</h1>
            <Link to="/whoweare" className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-200 py-3 px-4'><i className="ri-information-fill mr-1"></i>Who we are</Link>
            <Link to="/contactus" className='hover:bg-[#6556CD] hover:text-white rounded-lg duration-200 py-3 px-4'><i className="ri-phone-fill mr-1"></i>Contact us</Link>
        </nav>      
    </div>
    
  )
}

export default Sidenav