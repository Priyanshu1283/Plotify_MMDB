import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import { useEffect, useState } from 'react';
import Cards from './Templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './Templates/Dropdown';
import Topnav from './Templates/Topnav';

function Popular() {
  const navigate = useNavigate();
  const [popular, setpopular] = useState([]);
  const [category, setcategory] = useState("movie");
  const [page, setpage] = useState(1);
  const [hasMore, sethasMore] = useState(true);
  document.title = "CINÉCLAIR | Popular";

  const getPopular = async () => {
    try {
      const { data } = await axios.get(`/${category}/popular?page=${page}`);
      if (data.results.length > 0) {
        setpopular((previous) => [...previous, ...data.results]);
        setpage((prevPage) => prevPage + 1);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.error("Error: ", error);
    }
  };

  useEffect(() => {
    setpopular([]);
    setpage(1);
    sethasMore(true);
    getPopular();
  }, [category]);

  return popular.length !== 0 ? (
    <div className="w-screen min-h-screen bg-[url('/glassy.jpg')] bg-cover bg-fixed bg-center">
      <div className="w-full min-h-screen bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl">
        <div className="px-6 md:px-12 py-4 w-full flex flex-col md:flex-row justify-center items-center gap-4">
          <h1 className="w-full md:w-1/5 text-2xl font-bold text-white flex items-center">
            <i
              onClick={() => navigate(-1)}
              className="ri-arrow-left-line mr-3 text-3xl hover:text-indigo-400 cursor-pointer transition-colors duration-300"
            ></i>
            Popular
          </h1>
          <div className="w-full md:w-2/5">
            <Topnav />
          </div>
          <div className="w-full md:w-1/5">
            <Dropdown
              title={"Category"}
              options={["movie", "tv"]}
              setCategory={setcategory}
              selectedValue={category}
            />
          </div>
        </div>

        <InfiniteScroll
          dataLength={popular.length}
          next={getPopular}
          hasMore={hasMore}
          loader={
            <div className="flex justify-center items-center py-4">
              <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-400"></div>
            </div>
          }
        >
          <Cards data={popular} title={category} />
        </InfiniteScroll>
      </div>
    </div>
  ) : <Loader />;
}

export default Popular;