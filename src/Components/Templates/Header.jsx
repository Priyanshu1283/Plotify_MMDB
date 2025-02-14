import axios from '../../utils/axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion';

function Header() {
  const [wallpaper, setWallpaper] = useState(null);
  useEffect(() => {
    let interval;
    const getWallpaper = async () => {
      try {
        const { data } = await axios.get("/trending/all/day");
        setWallpaper(data.results[Math.floor(Math.random() * data.results.length)]);
      } catch (error) {
        console.error("Error:", error);
      }
    };

    getWallpaper();

    interval = setInterval(() => {
      getWallpaper();
    }, 4000);

    return () => clearInterval(interval);
  }, []);
  return wallpaper && (
    <motion.div
      key={wallpaper?.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 2}}
    >
    <div style={{
        background: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${wallpaper.backdrop_path || wallpaper.profile_path})`,
        backgroundPosition: 'center',
        backgroundSize: "cover"
    }} className='relative w-full h-[58vh] md:h-[49vh] flex flex-col justify-end items-start pb-[6%] sm:py-[3%] px-[7%] '>
        <h1 className='w-2/3 text-3xl md:text-4xl font-black'>{wallpaper.name || wallpaper.title || wallpaper.original_name || wallpaper.original_title}</h1>
        <p className='w-2/3 mt-2 text-xs md:text-[13px] lg:text-base'>{wallpaper.overview.slice(0, 200)}...<Link to={`${wallpaper.media_type}/details/${wallpaper.id}`} className='text-blue-400 md:text-base text-[15px]'>more</Link></p>
        <p className='flex gap-1 mt-1 text-sm'>
            {wallpaper.release_date && <i className='text-yellow-500 ri-megaphone-fill'></i>}
            {wallpaper.release_date}
            <i className='text-yellow-500 ri-album-fill'></i>
            {wallpaper.media_type.toUpperCase()}
        </p>
        <Link to={`/${wallpaper.media_type}/details/${wallpaper.id}/trailer`} className='py-2 px-3 bg-[#6556cd] rounded-lg text-sm mt-3 md:mt-2'><i className="ri-play-large-fill"></i> Watch Trailer</Link>
    </div>
    </motion.div>
  )
}

export default Header