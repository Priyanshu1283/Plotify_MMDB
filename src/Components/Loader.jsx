import React from 'react';

function Loader() {
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center  bg-cover bg-fixed bg-center">
      <div className="bg-black/80 backdrop-blur-xl rounded-xl p-8 shadow-xl border border-white/10">
        <div className="relative w-16 h-16">
          <div className="absolute inset-0 border-4 border-t-indigo-400 border-r-indigo-400 border-b-transparent border-l-transparent rounded-full animate-spin"></div>
          <div className="absolute inset-1 border-4 border-t-transparent border-r-transparent border-b-purple-400 border-l-purple-400 rounded-full animate-spin-slow"></div>
        </div>
        <p className="mt-4 text-white text-lg font-medium">Loading...</p>
      </div>
    </div>
  );
}

export default Loader;