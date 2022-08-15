import React from 'react';
import Navbar from '../component/navbar';
import Image from '../assets/images';
import Footer from '../component/footer';

const event = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-48 my-32">
        <div className="mx-auto ">
          <img
            src={Image.kampusUBB}
            alt="Gambar Kampus UBB"
            className=" w-34 h-34 shadow-2xl mx-auto rounded-xl shadow-blue-500"
          />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default event;
