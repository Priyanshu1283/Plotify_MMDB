import React from 'react'
import { Link } from 'react-router-dom'
import noimage from '/no_image.jpg'

function Cards({data, title}) {
  return (
    <div className='pl-4 md:pl-0 lg:pl-14 w-full bg-[#1f1e24]'>
        <div className='flex flex-wrap justify-center'>
        {data.map((d, i) => {
            return (
                <Link to={`/${d.media_type || title}/details/${d.id} `} key={i} className={`relative md:w-[22%] ${(i + 1) % 4 !== 0 && "pr-[3%]"} pb-[8%] md:pb-[3%]`}>
                <img className='h-[44vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]' src={d.poster_path || d.backdrop_path || d.profile_path ? `https://image.tmdb.org/t/p/original/${d.poster_path || d.backdrop_path || d.profile_path}` : noimage} alt="" />
                <h1 className='text-2xl text-zinc-300 mt-2 font-semibold hover:text-[#6556cd]'>{d.name || d.title || d.original_name || d.original_title}</h1>
                {d.vote_average >= 0 && <div className='absolute top-6 right-10 w-[7vh] bg-yellow-500 flex justify-center items-center rounded-full p-1'>{((d.vote_average * 10).toFixed())/10}/10</div>}
                </Link>
            )
        })}
        </div>
    </div>
  )
}

export default Cards