import React from 'react';
import { BsSuitHeartFill } from 'react-icons/bs';
import { AiOutlineCopyrightCircle } from 'react-icons/ai';

const footer = () => {
  const BEM = {
    url: 'https://bem-ubb.netlify.app/',
    target: '_blank',
  };

  return (
    <div className="p-10 border-t-2 border-gray-400 bg-[#4E5166] ">
      <div className="flex flex-col justify-center ">
        <p className=" text-center text-slate-50 text-md">
          Made With
          <span>
            <BsSuitHeartFill className="inline mx-2 text-xl text-red-600" />
          </span>
          by
          <a
            href={BEM.url}
            target={BEM.target}
            className="ml-2 hover:underline"
          >
            BEM KM UBB
          </a>
        </p>
        <p className=" text-center text-md text-slate-50 ">
          <span>
            <AiOutlineCopyrightCircle className="inline mx-1 text-lg align-top" />
          </span>
          BEM KM UBB, All right Reversed | 2022
        </p>
      </div>
    </div>
  );
};

export default footer;
