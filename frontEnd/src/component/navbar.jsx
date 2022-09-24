import React, { useState } from 'react';
import { SiLinktree } from 'react-icons/si';
import { SiInstagram } from 'react-icons/si';
import { SiYoutube } from 'react-icons/si';
import { FiSearch } from 'react-icons/fi';
import { BsInfoLg } from 'react-icons/bs';
import { ImNewspaper } from 'react-icons/im';
import { IoHome } from 'react-icons/io5';
import { MdOutlineEventAvailable } from 'react-icons/md';
import { MdPermContactCalendar } from 'react-icons/md';
import Images from '../assets/images.js';
import { Link } from 'react-scroll';
import { openVideo } from './bem';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  const anchorData = {
    target: '_blank',
    youtube:
      'https://www.youtube.com/channel/UCLO2C-uhlR-x4LBqkpwv7xA/featured',
    linktree: 'https://linktr.ee/bemkmubb',
    instagram: 'https://www.instagram.com/bemkmubb/',
  };
  return (
    <div className="p-2 shadow-xl top-0 left-0 bg-[#ffff] fixed z-10 w-full">
      <div className="flex  justify-between my-2">
        <ul className="flex ">
          <li>
            <a href={anchorData.youtube} target={anchorData.target}>
              <SiYoutube className=" hover:text-red-600 cursor-pointer  mx-4 text-xl " />
            </a>
          </li>
          <li>
            <a href={anchorData.linktree} target={anchorData.target}>
              <SiLinktree className=" hover:text-green-600 hover:drop-shadow-md cursor-pointer mx-4 text-xl" />
            </a>
          </li>
          <li>
            <a href={anchorData.instagram} target={anchorData.target}>
              <SiInstagram className="ig hover:text-fuchsia-500 cursor-pointer mx-4 text-xl" />
            </a>
          </li>
        </ul>
        <FiSearch className="hover:text-sky-400 cursor-pointer mx-4 text-xl" />
      </div>
      <hr className="bg-bg-zinc-500" />
      <div className="navbar-container flex md:flex justify-between  my-2.5 pl-6 pr-6 md:px-36 ">
        <div className="md:mr-[80px]">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            offset={-200}
            duration={1000}
          >
            <img
              src={Images.logoBEM}
              className=" cursor-pointer md:object-center w-16 h-16  md:h-20  md:w-20"
              alt="Logo-BEM-UBB"
            />
          </Link>
        </div>
        <input
          onClick={handleNav}
          type="checkbox"
          className="absolute h-[50px] w-[50px] right-[30px] z-[15] opacity-0 border-none md:hidden"
        />
        <div
          id="hbcon"
          className={
            ' flex flex-col justify-center h-[40px] w-[40px] mt-1.5 right-5 z-10 md:hidden '
          }
        >
          <span className="line1 h-[7px] w-full mt-2  rounded-sm bg-cyan-300 transition ease-in-out duration-[600ms]" />
          <span className="line2  h-[7px]  mt-2  w-full rounded-sm bg-cyan-300 ease-in-out transition duration-[600ms]" />
          <span className="line3  h-[7px]  mt-2 w-full rounded-sm bg-cyan-300 transition ease-in-out duration-[600ms]" />
        </div>
        <ul
          className={
            'sidebarcon absolute w-1/2 h-[100vh]  px-5 py-6 right-0 top-[8.5rem] bg-white justify-around text-[#4E5166] transition duration-500 translate-x-full md:right-none md:static  md:flex  md:px-0 md:w-[90%] md:translate-x-0 md:h-auto align-middle md:py-5'
          }
        >
          <li className="mb-5 cursor-pointer  hover:text-sky-400 ">
            <NavLink to="/">
              <IoHome className="inline text-2xl mr-2 align-top" /> Beranda
            </NavLink>
          </li>
          <li className="mb-5 cursor-pointer  hover:text-sky-400">
            <Link
              activeClass="active"
              onClick={openVideo}
              spy={true}
              smooth={true}
              offset={50}
              duration={500}
            >
              <BsInfoLg className="inline align-top text-xl" /> Tentang Kami
            </Link>
          </li>
          <li className="mb-5 cursor-pointer  hover:text-sky-400">
            <NavLink to="/event">
              <MdOutlineEventAvailable className="inline text-2xl mr-2 align-top" />
              Event
            </NavLink>
          </li>
          <li className="mb-5 cursor-pointer  hover:text-sky-400">
            <NavLink to="/news">
              <ImNewspaper className="inline text-2xl mr-2 align-top" />
              News
            </NavLink>
          </li>
          <li className="mb-5 cursor-pointer  hover:text-sky-400">
            <Link
              activeClass="active"
              to="kontak"
              spy={true}
              smooth={true}
              offset={-150}
              duration={1000}
            >
              <MdPermContactCalendar className="inline text-2xl mr-2 align-top" />
              Kontak
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
