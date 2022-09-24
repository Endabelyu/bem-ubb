import React, { useState } from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';
import Form from './form';
import Image from '../assets/images.js';
// import { useEffect } from 'react';

const News = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    if (e.detail === 2) {
      setShow(!show);
      console.log(show);
    }
  };
  return (
    <div className="relative h-full">
      <Navbar />
      <div className="mt-[200px] mb-32 mx-10 h-screen">
        <div
          onClick={handleClick}
          className="h-16 w-16 bg-red-400 absolute right-10 opacity-0"
        />
        <Form
          onClick={handleClick}
          type="text"
          labelName="Tambah berita disini"
          placeHolder="masukan url disini"
          styleContainerInput="border-2 border-slate-00 p-2 rounded-lg"
          className={`${show ? 'block' : 'hidden'}`}
        />
        <ul className="w-full mx-auto">
          <li className="w-2/4  flex flex-col mx-auto gap-x-6">
            <div className="flex w-full gap-x-5">
              <img
                className="w-2/5 rounded-lg"
                src={Image.kampusUBB}
                alt="aaa"
              />
              <div>
                <p className="text-xl">aa</p>
                <p className="text-lg text-slate-400">times</p>
              </div>
            </div>
            <button
              className={`${
                show ? 'block' : 'hidden'
              } bg-red-400 rounded-lg mt-5 w-full`}
            >
              Hapus
            </button>
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default News;
