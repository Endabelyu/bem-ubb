import React, { useState } from 'react';
import Navbar from '../component/navbar';
import Image from '../assets/images';
import Footer from '../component/footer';
import Form from './form';

const Event = () => {
  const [show, setShow] = useState(false);

  const handleClick = (e) => {
    if (e.detail === 2) {
      setShow(!show);
      console.log(show);
    }
  };
  return (
    <React.Fragment>
      <div className="relative">
        <Navbar />
        <div className="mt-48 my-32 mx-10"></div>
        <main className="mt-48 my-32">
          <div
            onClick={handleClick}
            className="h-10 w-10 bg-red-400 absolute right-10 opacity-0 "
          />
          <Form
            type="file"
            labelName="Tambah pamflet disini"
            styleContainerInput=""
            placeHolder=""
            className={`${show ? 'block' : 'hidden'}`}
          />
          <ul className="w-full ">
            <li>
              <img
                src={Image.kampusUBB}
                alt="Gambar Kampus UBB"
                className=" w-2/4 shadow-2xl mx-auto rounded-xl shadow-blue-500"
              />
              <button
                className={`${
                  show ? 'block' : 'hidden'
                }  bg-red-400 rounded-lg mt-10 w-2/4 mx-auto`}
              >
                Hapus
              </button>
            </li>
          </ul>
        </main>
        <Footer />
      </div>
    </React.Fragment>
  );
};

export default Event;
