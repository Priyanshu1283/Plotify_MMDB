import { useEffect, useState } from 'react'
import axios from '../../utils/axios';
import { Link } from 'react-router-dom';
import no_image from '/no_image.jpg';

function Topnav() {
  const [query, setquery] = useState("");
  const [searches, setSearches] = useState([]);

  useEffect(() => {
    const getSearches = async () => {
      try {
        const { data } = await axios.get(`/search/multi?query=${query}`);
        setSearches(data.results);
      } catch (error) {
        console.error("Error: ", error);
      }
    };
    getSearches();
  }, [query]);

  return (
    <div className="w-full h-[10vh] relative md:flex justify-center items-center hidden">
      <div className="flex items-center w-3/4 md:w-2/3 relative bg-black/30 backdrop-blur-md rounded-full shadow-lg border border-white/10">
        <i className="ri-search-line text-xl text-zinc-300 absolute left-4"></i>
        <input
          onChange={(e) => setquery(e.target.value)}
          value={query}
          className="w-full p-3 pl-12 bg-transparent outline-none border-none text-white placeholder-zinc-400 text-lg transition-all duration-300 focus:ring-2 focus:ring-indigo-400 rounded-full"
          type="text"
          placeholder="Search anything..."
        />
        {query.length > 0 && (
          <i
            onClick={() => setquery("")}
            className="ri-close-fill text-zinc-300 text-xl absolute right-4 cursor-pointer hover:text-indigo-400 transition-colors duration-300"
          ></i>
        )}
      </div>
      <div className="absolute top-[100%] w-3/4 md:w-2/3 max-h-[50vh] bg-black/80 backdrop-blur-lg rounded-lg shadow-xl border border-white/10 overflow-auto z-[99999] mt-2">
        {searches.map((search, index) => (
          <Link
            to={`/${search.media_type === "person" ? "people" : search.media_type}/details/${search.id}`}
            key={index}
            className="p-4 px-6 w-full flex items-center text-white font-medium border-b border-white/10 hover:bg-indigo-900/50 hover:scale-[1.02] hover:px-8 transition-all duration-300"
          >
            <img
              className="w-16 h-16 object-cover rounded-lg mr-4 shadow-md transition-transform duration-300 hover:scale-105"
              src={search.backdrop_path || search.profile_path ? `https://image.tmdb.org/t/p/original/${search.backdrop_path || search.profile_path}` : no_image}
              alt={search.name || search.title || search.original_name || search.original_title}
            />
            <span className="truncate">{search.name || search.title || search.original_name || search.original_title}</span>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Topnav;