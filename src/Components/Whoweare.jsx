import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Whoweare() {
    const navigate = useNavigate();
  return (
    <div className='h-full w-full'>
        <nav className='h-[9vh] w-full text-zinc-100 flex items-center justify-between py-5 md:py-0 gap-5 text-xl mb-2 md:px-[10%]' >
            <Link to={"/"} className='bg-yellow-500 w-24 px-2 py-2 md:text-xs text-sm rounded-lg font-semibold text-center'>Go Home</Link>
            <Link onClick={() => navigate(-1)} className='hover:text-[#6556cd] ri-arrow-left-line mr-3 text-3xl md:text-2xl'></Link>
        </nav>
        <div className='flex flex-col justify-center items-center pt-10  pointer-event-none'>
            <h1 className='font-semibold text-3xl'>HELLOO</h1>
            <h2 className='text-center pt-5'>This page will be <br />updated in next commit <br />😁</h2>
        </div>
    </div>
  )
}

export default Whoweare