import React from 'react'
import ReactPlayer from 'react-player'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate, useNavigation } from 'react-router-dom';

function Trailer() {
  const navigate = useNavigate();
  const {pathname} = useLocation(); 
  const category = pathname.includes("movie") ? "movie" : "tv"; 
  const ytvideo = useSelector(state => state[category].info.videos);
  return (
    <div className="absolute w-screen top-0 left-0 h-screen flex items-center justify-center bg-[#000000d0] z-100">
      <Link onClick={() => navigate(-1)} className='fixed left-[5%] top-[5%] hover:text-[#6556cd] ri-close-fill mr-3 text-3xl'></Link> 

      {ytvideo?.key ? (<ReactPlayer height={"80%"} width={"90%"} url={`https://www.youtube.com/watch?v=${ytvideo.key}`}/>) : <h1 className='text-3xl hover:text-yellow-300'>No trailer found!</h1>}
    </div>
  )
}

export default Trailer