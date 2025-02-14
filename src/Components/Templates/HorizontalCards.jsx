import React from 'react'
import Dropdown from '../Templates/Dropdown';
import { Link } from 'react-router-dom';
import noimage from '/no_image.jpg'; 

function HorizontalCards({data, setCategory, heading} ) {
  return (
    <div className='w-full'>
        {data?.length > 0 ? (
            <div>
            <div className='mb-4 pt-4 flex justify-between'>
                <h1 className='text-3xl font-semibold text-zinc-400 hover:text-[#6556cd] duration-300'>{heading}</h1>
                <Dropdown setCategory={setCategory} title={"all"} options={["tv", "movie", "all"]}/>
            </div>
            <div className='w-full flex overflow-y-hidden'>
                {data.map((t, i) => (
                    <Link to={`/${t.media_type}/details/${t.id}`} key={i} className='min-w-[50%] sm:min-w-[30%] lg:min-w-[22%] md:min-w-[28%] h-[33vh] mr-4 bg-zinc-900 rounded-lg hover:scale-105 duration-300 hover:rounded-lg'>
                        <img className='w-full h-[50%] object-cover rounded-t-lg' src={t.backdrop_path || t.profile_path ?  `https://image.tmdb.org/t/p/original/${t.backdrop_path || t.profile_path}` : noimage} alt="" />
                        <div className='px-2 pt-3 h-[45%] overflow-y-auto'>
                            <h1 className='text-xl font-semibold'>{t.name || t.title || t.original_name || t.original_title}</h1>
                            <p className='mt-2 text-[13px]'>{t.overview.slice(0, 80)}...<span className='text-zinc-500'>more</span></p>
                        </div>
                    </Link>
                ))}
            </div>
            </div>
        ) : <h1 className='text-2xl hover:text-yellow-300 font-semibold text-center mt-20'>No Recommendations for now...</h1>}
    </div>
  )
}

export default HorizontalCards