import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadmovie, removemovie } from '../../store/actions/movieActions';
import { Link, Outlet, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import HorizontalCards from './HorizontalCards';
import Topnav from './Topnav';

function movieDetails() {
  const {pathname} = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.movie); // From store.
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(asyncloadmovie(id))
    return () => {
      // cleanup
      dispatch(removemovie());
    }
  }, [id, dispatch])

  return info ? (
    <>
      <div style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.2), rgba(0,0,0,0.5), rgba(0,0,0,0.7)), url(https://image.tmdb.org/t/p/original/${info.detail.backdrop_path})`,
        backgroundPosition: 'center',
        backgroundSize: "cover"
      }} className='relative w-screen h-[200vh] md:h-[130vh] px-[8%]'>

      {/* PART 1 NAV*/}
      <nav className='h-[9vh] w-full text-zinc-100 flex items-center  gap-5 text-xl mb-2'>
      <Link to={"/"} className='bg-yellow-500 w-24 px-2 py-2 text-xs rounded-lg font-semibold text-center'>Go Home</Link>
      <Link onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line sm:mr-1 lg:mr-3 text-2xl'></Link> 
      <a target='_blank' className='hover:text-[#6556cd] duration:200' href={info.detail.homepage}><i className="ri-external-link-fill"></i></a>
      <a target='_blank' className='hover:text-[#6556cd] duration:200' href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}><i className="ri-earth-fill"></i></a>
      <a target='_blank' className='hover:text-[#6556cd] duration:200' href={`https://www.instagram.com/${info.externalid.instagram_id}/`}><i className="ri-instagram-fill"></i></a>
      <a target='_blank' className='hover:text-[#6556cd] duration:200' href={`https://www.imdb.com/title/${info.externalid.imdb_id}/`}>imdb</a>
      <Topnav />
      </nav>

      {/* PART 2 POSTER & DETAILS */}
      <div className='w-full flex flex-col md:flex-row'>
        <img className='h-[60vh] mb-4 md:pb-0 md:h-[50vh] object-cover shadow-[8px_17px_38px_2px_rgba(0,0,0,0.5)]' src={`https://image.tmdb.org/t/p/original/${info.detail.poster_path || info.detail.backdrop_path}`} alt="" />

        <div className='content ml-[5%]'>
          <h1 className={`${([info.detail.name, info.detail.title, info.detail.original_name, info.detail.original_title].some(text => text?.length > 22)) ? "text-5xl" : "text-6xl"} text-white font-bold`}>
            {info.detail.name || info.detail.title || info.detail.original_name || info.detail.original_title}
          </h1>


          <div className='flex items-center gap-x-3 mt-2'>
            <span className='w-[7vh] bg-yellow-500 flex justify-center items-center rounded-full p-1'>{((info.detail.vote_average * 10).toFixed())/10}/10</span>
            <h1>{info.detail.release_date}</h1>
            <h1>{info.detail.runtime}min</h1>
          </div>
          <div className='mt-1'><h1><span className='font-semibold'>Genre: </span> {info.detail.genres.map((g, i) => (g.name)).join(", ")}</h1></div>

          {info.detail.tagline.length > 0 && <h1 className='text-xl font-semibold italic text-zinc-200 mt-4'>{info.detail.tagline}</h1>}
          <h1 className='text-xl mt-4 mb-1 font-semibold'>Overview.</h1>
          <p className='font-semibold mb-6'>{info.detail.overview.slice(0, 400)}..</p>
        <Link to="trailer" className='py-3 px-4 bg-[#6556cd] rounded-lg font-semibold'><i className="ri-play-large-fill"></i> Watch Trailer</Link>
        </div>

      </div>

      {/* PART 3 PROVIDERS */}
      <div className='w-[30vh] mt-8 md:mt-0'>
        {info.watchproviders && info.watchproviders.flatrate && (
          <div className='flex mt-5 items-center gap-x-3'>
            <h1 className='hover:text-[#6556cd]'>Watch on  : </h1>
            {info.watchproviders.flatrate.map((w, i) => {
            return <img key={i} className='hover:scale-110 w-[5vh] h-[5vh] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />
            })}
          </div>
        )}
        {info.watchproviders && info.watchproviders.buy && (
          <div className='flex mt-5 items-center gap-x-3'>
            <h1 className='hover:text-[#6556cd]'>Buy on : </h1>
            {info.watchproviders.buy.map((w, i) => {
            return <img key={i} className='hover:scale-110 w-[5vh] h-[5vh] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />
            })}
          </div>
        )}
        {info.watchproviders && info.watchproviders.rent && (
          <div className='flex mt-5 items-center gap-x-3'>
            <h1 className='hover:text-[#6556cd]'>Rent on : </h1>
            {info.watchproviders.rent.map((w, i) => {
            return <img key={i} className='hover:scale-110 w-[5vh] h-[5vh] object-cover rounded-md' src={`https://image.tmdb.org/t/p/original/${w.logo_path}`} alt='' />
            })}
          </div>
        )}

        {!info.watchproviders && <h1 className='mt-5 text-lg ml-3 font-semibold hover:text-yellow-300'> This Movie is Currently Unavailable in India!</h1>}
      </div>

      {/* PART 4 RECOMMENDATIONS */}
      <HorizontalCards data={info.recommendations.length > 0 ? info.recommendations : info.similar} setCategory={info.recommendations.media_type} heading={"You might also like.."}/>
      
      <Outlet />
    </div>
    </>
    
  ) : <Loader />;
}

export default movieDetails