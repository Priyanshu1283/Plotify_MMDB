import React from 'react';

function Loader() {
  return (
    <div className="h-screen w-screen flex justify-center items-center bg-black">
      <img src="/loader.gif" alt="Loading..." className="w-24 h-24 mr-5" />
    </div>
  );
}

export default Loader;
