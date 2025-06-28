import { useNavigate } from 'react-router-dom';
import axios from '../utils/axios';
import React, { useEffect, useState } from 'react'
import Cards from './Templates/Cards';
import Loader from './Loader';
import InfiniteScroll from 'react-infinite-scroll-component';
import Dropdown from './Templates/Dropdown';
import Topnav from './Templates/Topnav';


function People() {
    const navigate = useNavigate();
    const [people, setpeople] = useState([]);
    const [category, setcategory] = useState("popular");
    const [page, setpage] = useState(1);
    const [hasMore, sethasMore] = useState(true);
    document.title = "Plotify || People";

    const getPeople = async () => {
        try {
            const { data } = await axios.get(`/person/${category}?page=${page}`);
            
            if (data.results.length > 0) {
                setpeople((previous) => [...previous, ...data.results]);
                setpage((prevPage) => prevPage + 1);
            } else {
                sethasMore(false);
            }
        } catch (error) {
            console.error("Error: ", error);
        }
    };
    useEffect(() => {
        setpeople([]);
        setpage(1);
        sethasMore(true);
        getPeople();
    }, [category]);

  return people.length !== 0 ? (
    <div className='w-screen min-h-screen bg-[#1f1e24]'>
        <div className='px-12 w-full flex justify-center items-center mb-2'>
            <h1 className='w-[20%] text-2xl font-semibold text-zinc-400'>
                <i onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line mr-4'></i> People
            </h1>
            <div className='w-[60%]'><Topnav /></div>
            <Dropdown title={"Category"} options={["popular"]} setCategory={setcategory} selectedValue={category}/>
            <div className='w-[2%] bg-red-200'></div>
        </div>

        <InfiniteScroll 
            dataLength={people.length}
            next={getPeople}
            hasMore={hasMore}
            loader={<h1>loading...</h1>}
        >
            <Cards data={people} title="people"/>
        </InfiniteScroll>
    </div>
    ) : <Loader />;
}

export default People