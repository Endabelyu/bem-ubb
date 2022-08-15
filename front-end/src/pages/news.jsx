import React from 'react';
import Navbar from '../component/navbar';
import Footer from '../component/footer';

const news = () => {
  return (
    <div>
      <Navbar />
      <div className="mt-48 my-32 mx-10">
        <ul>
          <li>
            <iframe
              src="https://news.detik.com/berita/d-6213897/mahfud-sebut-kasus-brigadir-j-beda-dengan-kriminal-biasa-ini-alasannya"
              className="w-full h-[300px] border-2 border-gray-300"
              title="berita terbaru"
            />
          </li>
        </ul>
      </div>
      <Footer />
    </div>
  );
};

export default news;
