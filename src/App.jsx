import { Route, Routes } from 'react-router-dom'
import Home from './Components/Home'
import Trending from './Components/Trending'
import Popular from './Components/Popular'
import Movie from './Components/Movie'
import TVshows from './Components/TVshows'
import People from './Components/People'
import MovieDetails from './Components/Templates/movieDetails'
import TvDetails from './Components/Templates/TvDetails'
import PersonDetails from './Components/Templates/PersonDetails'
import Trailer from './Components/Templates/Trailer'
import Whoweare from './Components/Whoweare'
import Contactus from './Components/Contactus'

function App() {
  return (
    <div className="w-screen min-h-screen bg-cover bg-fixed bg-center text-white flex font-sans">
      <div className="w-screen min-h-screen bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-2xl flex transition-all duration-500 ease-in-out">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/trending" element={<Trending />} />
          <Route path="/popular" element={<Popular />} />
          <Route path="/movies" element={<Movie />} />
          <Route path="/movie/details/:id" element={<MovieDetails />}>
            <Route path="Trailer" element={<Trailer />} />
          </Route>
          <Route path="/tvshows" element={<TVshows />} />
          <Route path="/tv/details/:id" element={<TvDetails />}>
            <Route path="Trailer" element={<Trailer />} />
          </Route>
          <Route path="/people" element={<People />} />
          <Route path="/people/details/:id" element={<PersonDetails />} />
          <Route path="/whoweare" element={<Whoweare />} />
          <Route path="/contactus" element={<Contactus />} />
        </Routes>
      </div>
    </div>
  )
}

export default App