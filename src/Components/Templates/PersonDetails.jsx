import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson, removeperson } from '../../store/actions/personActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import HorizontalCards from './HorizontalCards';
import Topnav from './Topnav';
import Dropdown from './Dropdown';

function personDetails() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person); // From store.
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncloadperson(id))
    return () => {
      // cleanup
      dispatch(removeperson());
    }
  }, [id, dispatch])

  return info ? (
    <div className='px-[10%] w-screen flex flex-col overflow-y-auto pb-14'>
      {/* PART 1 NAV*/}
      <nav className='h-[9vh] w-full text-zinc-100 flex items-center justify-between md:justify-normal py-5 md:py-0 gap-5 text-xl mb-2'>
      <Link to={"/"} className='bg-yellow-500 w-24 px-2 py-2 md:text-xs text-sm rounded-lg font-semibold text-center'>Go Home</Link>
      <Link onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line mr-3 text-3xl md:text-2xl'></Link>
      <Topnav />
      </nav>

      <div className='w-full flex flex-col md:flex-row'>
        <div className='md:w-[25%] w-full'>
          {/* PART 2 POSTER*/}
          <img className='h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]' src={info.detail .profile_path ? `https://image.tmdb.org/t/p/original/${info.detail .profile_path}` : noimage} alt="" />
          {/* PART 3 SOCIALS */}
          <div className='md:text-2xl text-4xl flex gap-x-3 pt-4'>
            <a target='_blank' className='hover:text-[#6556cd]' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
            <a target='_blank' className='hover:text-[#6556cd]' href={`https://www.facebook.com/p/${info.externalid.facebook_id}/`}><i className="ri-facebook-box-fill"></i></a>
            <a target='_blank' className='hover:text-[#6556cd]' href={`https://www.instagram.com/${info.externalid.instagram_id}/`}><i className="ri-instagram-fill"></i></a>
             <a target='_blank' className='hover:text-[#6556cd]' href={`https://www.imdb.com/name/${info.externalid.imdb_id}/`}>imdb</a>
          </div>
          {/* PART 4 INFO */}
          <h1 className='text-2xl text-zinc-400 font-semibold mt-4 mb-3'>Person Info.</h1>
          <h1 className='text-xl text-zinc-400 font-semibold'><span className='font-normal text-lg'>Known for </span> {info.detail.known_for_department}</h1>
          <h1 className='text-lg text-zinc-400 font-semibold'>{info.detail.gender === 2 ? "Male" : "Female"}</h1>
          <h1 className='text-lg text-zinc-400 font-semibold'><span className='font-normal text-md'>Birth date: </span>{info.detail.birthday}</h1>
          <h1 className='text-lg text-zinc-400 font-semibold'><span className='font-normal text-md'>Death date: </span>{info.detail.deathday ? info.detail.deathday : "Still alive"}</h1>
          <h1 className='text-lg text-zinc-400 font-semibold'><span className='font-normal text-md'>Place of Birth: </span>{info.detail.place_of_birth}</h1>
        </div>

        {/* PART 4 DETS AND INFO*/}
        <div className='md:w-[75%] md:ml-[4%] w-[100%]'>
          <h1 className='text-4xl font-black mt-3 mb-4'>{info.detail.name}</h1>
          <h1 className='text-xl mb-3 md:mb-0 text-zinc-400 font-semibold'>Overview</h1>
          <p className='text-zinc-100 mb-4 md:mb-0'>{info.detail.biography}</p>
          <HorizontalCards data={info.combinedcredits.cast} heading="Famous for"/>
          <div className='w-full flex justify-between mt-5 '>
            <h1 className='text-xl text-zinc-400 font-semibold'>Acting</h1>
            <Dropdown title='Category' options={["tv", "movie"]} setCategory={e => e} selectedValue="movie"/>
          </div>
          <div className='text-zinc-400 w-full h-[50vh] overflow-x-hidden overflow-y-auto shadow-2xl mt-5 p-5'>
            {info[category + "credits"].cast.map((c, i) => {
              return (
                <li key={i} className='hover:text-white hover:bg-zinc-900 rounded-md text-xl p-2 duration-300 cursor-pointer'>
                <Link to={`/${category}/details/${c.id}/`}><span className='mr-2'>{c.name || c.title || c.original_name || c.original_title}</span><span>-</span><span className='text-lg block ml-5 mt-3'>{c.character && `Character name : ${c.character}`}</span></Link>
                </li> 
              )
            })}
          </div>
        </div>
      </div>
    </div> 
  ) : <Loader />;
}

export default personDetails