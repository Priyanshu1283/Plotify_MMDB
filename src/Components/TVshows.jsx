import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import Cards from './Templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './Templates/Dropdown';
import Topnav from './Templates/Topnav';

function TVshows() {
    const navigate = useNavigate();
    const [tv, settv] = useState([]);
    const [category, setcategory] = useState("airing_today");
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "CINÉCLAIR | tvs";

    const getTv = async () => {
        try {
            const { data } = await axios.get(`/tv/${category}?page=${page}`);
            
            if (data.results.length > 0) {
                settv((previous) => [...previous, ...data.results]);
                setpage((prevPage) => prevPage + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    };
    useEffect(() => {
        settv([]);
        setpage(1);
        sethasMore(true);
        getTv();
    }, [category]);

  return tv.length !== 0 ? (
    <div className='w-screen min-h-screen bg-[#1f1e24]'>
        <div className='px-12 w-full flex justify-center items-center mb-2'>
            <h1 className='w-[20%] text-2xl font-semibold text-zinc-400'>
                <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line mr-4'></i> TV shows
            </h1>
            <div className='w-[60%]'><Topnav /></div>
            <Dropdown title={"Category"} options={["on_the_air","popular","top_rated","airing_today"]} setCategory={setcategory} selectedValue={category}/>
            <div className='w-[2%] bg-red-200'></div>
        </div>

        <InfiniteScroll 
            dataLength={tv.length}
            next={getTv}
            hasMore={hasMore}
            loader={<h1>loading...</h1>}
        >
            <Cards data={tv} title="tv"/>
        </InfiniteScroll>
    </div>
    ) : <Loader />;
}

export default TVshows