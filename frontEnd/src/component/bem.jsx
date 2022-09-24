import React from 'react';
import Image from '../assets/images';

const openVideo = () => {
  window.open('https://youtu.be/4aw10ZYs9Fk ', '_blank');
};
const bem = () => {
  return (
    <div id="home" className="mt-48 text-center ">
      <h1 className=" text-[#0471A6] font-['Montserrat'] italic  text-xl font-bold my-4 drop-shadow-md shadow-black md:text-4xl">
        "Kembali Mengudara Bersama Energi Baru"
      </h1>
      <img
        className="w-full h-full md:3/4 md:3/4 mx-auto"
        src={Image.presWapres}
        alt="foto Presiden dan Wakil Presiden"
      />
      <div
        onClick={openVideo}
        className="  w-36 h-12 mx-auto hover:scale-125 delay-75 cursor-pointer text-xl  border-black border rounded-md p-2 m-4 md:text-2xl md:w-44 hover:text-sky-400 hover:border-sky-400"
      >
        BEM KM UBB
      </div>
      <div className="my-4  mx-auto p-4 border-black border rounded-md w-[85%] md:w-[50%]">
        <h2 className="font-bold text-md md:text-2xl my-2">
          Visi BEM KM UBB 2022
        </h2>
        <p className="italic text-sm md:text-xl">
          "Restorasi BEM KM UBB sebagai suluh perjuangan dan Energi Karya dalam
          pengabdian untuk Bangka Belitung dan Indonesia."
        </p>
      </div>
    </div>
  );
};

export default bem;
export { openVideo };
