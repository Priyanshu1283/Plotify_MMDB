import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { asyncloadperson, removeperson } from '../../store/actions/personActions';
import { Link, useLocation, useNavigate, useParams } from 'react-router-dom';
import Loader from '../Loader';
import HorizontalCards from './HorizontalCards'; // Corrected import
import Topnav from './Topnav';
import Dropdown from './Dropdown';
import { motion } from 'framer-motion'
import noimage from '/no_image.jpg'

function PersonDetails() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { id } = useParams();
  const { info } = useSelector((state) => state.person);
  const dispatch = useDispatch();
  const [category, setCategory] = useState("movie");

  useEffect(() => {
    dispatch(asyncloadperson(id))
    return () => {
      dispatch(removeperson());
    }
  }, [id, dispatch])

  return info ? (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-screen min-h-screen bg-[url('/')] bg-cover bg-fixed bg-center px-4 sm:px-6 md:px-[10%] flex flex-col overflow-y-auto pb-16"
    >
      <div className="w-full min-h-screen bg-gradient-to-br from-black/85 to-indigo-900/70 backdrop-blur-2xl rounded-xl shadow-2xl">
        {/* PART 1 NAV */}
        <nav className="h-[10vh] w-full text-white flex items-center justify-between sm:justify-start gap-4 sm:gap-6 py-4 text-lg">
          <Link
            to={"/"}
            className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-white px-4 py-2 rounded-full font-semibold text-sm hover:scale-105 hover:shadow-xl transition-all duration-300"
          >
            Go Home
          </Link>
          <Link
            onClick={() => navigate(-1)}
            className="hover:text-indigo-400 ri-arrow-left-line text-2xl sm:text-xl transition-colors duration-300"
            aria-label="Go back"
          ></Link>
          <div className="w-full sm:w-3/4 md:w-2/3">
            <Topnav />
          </div>
        </nav>

        <div className="w-full flex flex-col md:flex-row gap-6 md:gap-10 mt-4">
          {/* LEFT SECTION */}
          <div className="md:w-1/4 w-full">
            {/* PART 2 POSTER */}
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="w-full h-[40vh] md:h-[50vh] object-cover rounded-xl shadow-xl border border-white/10 hover:scale-[1.02] transition-transform duration-300"
              src={info.detail?.profile_path ? `https://image.tmdb.org/t/p/original/${info.detail.profile_path}` : noimage}
              alt={info.detail?.name || 'Person'}
            />
            {/* PART 3 SOCIALS */}
            <div className="flex gap-5 pt-5 text-2xl sm:text-xl">
              {info.externalid?.wikidata_id && (
                <a
                  target="_blank"
                  className="text-white hover:text-indigo-400 transition-colors duration-300"
                  href={`https://www.wikidata.org/wiki/${info.externalid.wikidata_id}`}
                  aria-label="Wikidata profile"
                >
                  <i className="ri-earth-fill"></i>
                </a>
              )}
              {info.externalid?.facebook_id && (
                <a
                  target="_blank"
                  className="text-white hover:text-indigo-400 transition-colors duration-300"
                  href={`https://www.facebook.com/p/${info.externalid.facebook_id}/`}
                  aria-label="Facebook profile"
                >
                  <i className="ri-facebook-box-fill"></i>
                </a>
              )}
              {info.externalid?.instagram_id && (
                <a
                  target="_blank"
                  className="text-white hover:text-indigo-400 transition-colors duration-300"
                  href={`https://www.instagram.com/${info.externalid.instagram_id}/`}
                  aria-label="Instagram profile"
                >
                  <i className="ri-instagram-fill"></i>
                </a>
              )}
              {info.externalid?.imdb_id && (
                <a
                  target="_blank"
                  className="text-white hover:text-indigo-400 transition-colors duration-300 text-base sm:text-sm"
                  href={`https://www.imdb.com/name/${info.externalid.imdb_id}/`}
                  aria-label="IMDb profile"
                >
                  IMDb
                </a>
              )}
            </div>
            {/* PART 4 INFO */}
            <h1 className="text-xl md:text-2xl text-white font-bold mt-6 mb-4">Person Info</h1>
            <div className="space-y-3 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              <h1 className="text-base md:text-lg text-white font-medium">
                <span className="font-normal text-zinc-300">Known for: </span>
                {info.detail.known_for_department || 'Unknown'}
              </h1>
              <h1 className="text-base md:text-lg text-white font-medium">
                {info.detail.gender === 2 ? "Male" : info.detail.gender === 1 ? "Female" : "Unknown"}
              </h1>
              <h1 className="text-base md:text-lg text-white font-medium">
                <span className="font-normal text-zinc-300">Birth date: </span>
                {info.detail.birthday || 'Unknown'}
              </h1>
              <h1 className="text-base md:text-lg text-white font-medium">
                <span className="font-normal text-zinc-300">Death date: </span>
                {info.detail.deathday ? info.detail.deathday : "Still alive"}
              </h1>
              <h1 className="text-base md:text-lg text-white font-medium">
                <span className="font-normal text-zinc-300">Place of Birth: </span>
                {info.detail.place_of_birth || 'Unknown'}
              </h1>
            </div>
          </div>

          {/* RIGHT SECTION */}
          <div className="md:w-3/4 w-full md:ml-8">
            <motion.h1
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="text-3xl md:text-4xl font-extrabold text-white mt-4 mb-5 tracking-tight"
            >
              {info.detail.name}
            </motion.h1>
            <h1 className="text-lg md:text-xl text-white font-semibold mb-3">Overview</h1>
            <p className="text-white text-sm md:text-base leading-relaxed mb-6 bg-black/30 backdrop-blur-sm rounded-lg p-4 border border-white/10">
              {info.detail.biography || 'No biography available.'}
            </p>
            <HorizontalCards data={info.combinedcredits.cast} heading="Famous for" />
            <div className="w-full flex justify-between items-center mt-6 mb-4">
              <h1 className="text-lg md:text-xl text-white font-semibold">Acting</h1>
              <Dropdown
                title="Category"
                options={["tv", "movie"]}
                setCategory={setCategory} // Fixed to enable category switching
                selectedValue={category}
              />
            </div>
            <div className="w-full h-[40vh] md:h-[50vh] overflow-y-auto bg-black/40 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 p-5">
              {info[category + "credits"].cast.map((c, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -15 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.07 }}
                  className="text-white text-base md:text-lg hover:bg-indigo-900/60 hover:rounded-lg p-3 transition-all duration-300 cursor-pointer"
                >
                  <Link to={`/${category}/details/${c.id}/`}>
                    <span className="font-medium truncate">
                      {c.name || c.title || c.original_name || c.original_title}
                    </span>
                    <span className="mx-2">-</span>
                    {c.character && (
                      <span className="text-sm md:text-base block ml-5 text-zinc-300">
                        Character: {c.character}
                      </span>
                    )}
                  </Link>
                </motion.li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  ) : <Loader />;
}

export default PersonDetails;