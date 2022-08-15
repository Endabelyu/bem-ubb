import React from 'react';
import Navbar from './component/navbar';
import BEM from './component/bem';
import Kabinet from './component/kabinet';
import Kontak from './component/form';
import { Helmet } from 'react-helmet';
import Image from './assets/images';
import Footer from './component/footer';
function App() {
  return (
    <div className="App bg-[#ffffff]">
      <Helmet>
        <meta charSet="utf-8" />
        <title className="font-bold">BEM KM UBB</title>
        <link rel="icon" href={Image.logoBEM} />
      </Helmet>
      <Navbar />
      <BEM />
      <Kabinet />
      <Kontak />
      <Footer />
    </div>
  );
}

export default App;
