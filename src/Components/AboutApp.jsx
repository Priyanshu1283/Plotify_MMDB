import React from 'react'

const AboutApp = () => {
  return (
    <div>
      <h1 className='bg-zinc-400 text-pink-500 text-xl mb-5 mt-5'>Hindi me he samajh loo vai</h1>

      <h1  className='bg-zinc-300 text-green-500 text-xl mb-5 mt-5'>Dekh yrr ye wali jo website hai isme apan log koi bhee movie ka details jan sekte hai jo tmdb ke api me hai.. like ki kab bana , kab release hua aur bhee bhaut kutch </h1>

      <h1  className='bg-orange-300 text-xl mb-5 mt-5'>Issme movie ya fir koi bhee movie ka actor ka ware me aache se jan sekte hai </h1>

      <h2  className='bg-yellow-300 text-xl mb-5 mt-5'>Dekh yrr yedi kherea ya Achha lega ho to bass apna dekh lena Q ki mi iske through feedback nahi le sekta hau..</h2>

    <div className='flex item-center justify-center gap-8'>
      <img className='w-[40vw] h-[40vh] md:h-[45vh] object-cover rounded-t-xl transition-transform duration-300 group-hover:scale-105' src="cat.jpg" alt="" /> 

      <h1>Dekh bhai iss page ka UI next commite me thik kr dunga abhi bss kam chela lo..</h1>
      </div>
    </div>
  )
}

export default AboutApp
