import React, { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import { Link } from 'react-router-dom';
import no_image from '/no_image.jpg';

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const getSearches = async() => {
      try {
          const {data} = await axios.get(`/search/multi?query=${query}`);
          setSearches(data.results);
      }
      catch (error) {
        console.error("Error : ", error);
      }
    }
    getSearches();
  },[query]);
  return (
    <div className='hidden w-full h-[9vh] relative md:flex justify-center items-center'>
        <div className='flex items-center w-[70%] relative'>
          <i className="ri-search-line text-2xl text-zinc-400 absolute left-2"></i>
          <input onChange={(e) => setquery(e.target.value)} value={query} className='w-[50%] mx-10 p-5 pl-10 bg-transparent outline-none border-none text-zinc' type="text" placeholder='Search anything..'/>
        {query.length > 0 && <i onClick={() => setquery("")} className="ri-close-fill text-zinc-400 text-2xl absolute right-12"></i>}
        </div>
        <div className='absolute top-[100%] w-[62%] max-h-[45vh] bg-zinc-200 overflow-auto rounded z-99999'>
            {searches.map((search, index) => {
              return ( // used search.media_type like this becoz of problem between person and people. (Fix it bro).
                <Link to={`/${search.media_type == "person" ? "people" : search.media_type}/details/${search.id}`} key={index} className='p-4 px-7 w-full flex justify-start items-center text-zinc-700 font-semibold border-b-2 border-zinc-100 hover:text-black hover:bg-zinc-300 hover:scale-105 hover:px-10 duration-200'>
                  <img className='w-[10vh] h-[10vh] object-cover rounded-md mr-6 shadow-lg' src={search.backdrop_path || search.profile_path ? `https://image.tmdb.org/t/p/original/${search.backdrop_path || search.profile_path}` : no_image} />
                  <span>{search.name || search.title || search.original_name || search.original_title}</span>
                </Link>
              )
            })}
        </div>
    </div>
  )
}

export default Topnav;