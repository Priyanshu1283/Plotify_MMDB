import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Topnav from './Templates/Topnav';
import Dropdown from './Templates/Dropdown';
import axios from '../utils/axios';
import Cards from './Templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';

function Trending() {
    const navigate = useNavigate();
    const [trending, settrending] = useState([]);
    const [category, setcategory] = useState("all");
    const [duration, setduration] = useState("day");
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Plotify || Trending";

    const getTrending = async () => {
        try {
            const { data } = await axios.get(`/trending/${category}/${duration}?page=${page}`);
            
            if (data.results.length > 0) {
                settrending((previous) => [...previous, ...data.results]);
                setpage((prevPage) => prevPage + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    };

    useEffect(() => {
        settrending([]);
        setpage(1);
        sethasMore(true);
        getTrending();
    }, [category, duration]);

    return trending.length !== 0 ? (
        <div className="w-screen min-h-screen bg-[url('/glassy.jpg')] bg-cover bg-fixed bg-center">
            <div className="w-full min-h-screen bg-gradient-to-br from-black/80 to-black/60 backdrop-blur-xl">
                <div className="px-6 md:px-12 py-4 w-full flex flex-col md:flex-row justify-center items-center gap-4">
                    <h1 className="w-full md:w-1/5 text-2xl font-bold text-white flex items-center">
                        <i 
                            onClick={() => navigate(-1)} 
                            className="ri-arrow-left-line mr-3 text-3xl hover:text-indigo-400 cursor-pointer transition-colors duration-300"
                        ></i>
                        Trending
                    </h1>
                    <div className="w-full md:w-2/5">
                        <Topnav />
                    </div>
                    <div className="w-full md:w-1/5">
                        <Dropdown 
                            title={"Category"} 
                            options={["movie", "tv", "all"]} 
                            setCategory={setcategory} 
                            selectedValue={category}
                        />
                    </div>
                    <div className="w-full md:w-1/5">
                        <Dropdown 
                            title={"Duration"} 
                            options={["day", "week"]} 
                            setCategory={setduration} 
                            selectedValue={duration}
                        />
                    </div>
                </div>

                <InfiniteScroll 
                    dataLength={trending.length}
                    next={getTrending}
                    hasMore={hasMore}
                    loader={
                        <div className="flex justify-center items-center py-4">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-indigo-400"></div>
                        </div>
                    }
                >
                    <Cards data={trending} title={category} />
                </InfiniteScroll>
            </div>
        </div>
    ) : <Loader />;
}

export default Trending;