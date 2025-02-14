import React, { useEffect, useState } from 'react'
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
    document.title = "CINÉCLAIR | Trending ";


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
        <div className='w-screen min-h-screen bg-[#1f1e24]'>
            <div className=' px-12 w-full flex justify-center items-center mb-2 mt-2 md:mt-0'>
                <h1 className='w-[50%] md:w-[20%] text-2xl font-semibold text-zinc-400'>
                    <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line mr-4'></i> Trending
                </h1>
                <div className='w-[60%]'><Topnav /></div>
                <Dropdown title={"Category"} options={["movie", "tv", "all"]} setCategory={setcategory} selectedValue={category}/>
                <div className='w-[2%] bg-red-200'></div>
                <Dropdown title={"Duration"} options={["day", "week"]} setCategory={setduration} selectedValue={duration}/>
            </div>

            <InfiniteScroll 
                dataLength={trending.length}
                next={getTrending}
                hasMore={hasMore}
                loader={<h1>loading...</h1>}
            >
                <Cards data={trending} title={category}/>
            </InfiniteScroll>
        </div>
    ) : <Loader />;
}

export default Trending;
