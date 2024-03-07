import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { logo, sun,thirdweb } from '../assets';
import { navlinks } from '../constants';

const Icon = ({ styles, name, imgUrl, isActive, disabled, handleClick }) => (
  <div className={`w-[48px] h-[48px] rounded-[10px] ${isActive && isActive === name && 'bg-[#2c2f32]'} flex justify-center items-center ${!disabled && 'cursor-pointer'} ${styles}`} onClick={handleClick}>
    {!isActive ? (
      <img src={imgUrl} alt="fund_logo" className="w-1/2 h-1/2" />
    ) : (
      <img src={imgUrl} alt="fund_logo" className={`w-1/2 h-1/2 ${isActive !== name && 'grayscale'}`} />
    )}
  </div>
)

const Sidebar = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState('dashboard');

  return (
    <div className="flex justify-evenly items-center flex-row w-full top-5 p-2 ">


      <div className=" flex flex-row justify-between items-center bg-black rounded-[20px] w-full py-4 mt-12">
        <div className="flex flex-row justify-center items-center gap-3 ml-3">
          {navlinks.map((link) => (
            <Icon 
            className="text-blue-400"
              key={link.name}
              {...link}
              isActive={isActive}
              handleClick={() => {
                if(!link.disabled) {
                  setIsActive(link.name);
                  navigate(link.link);
                }
              }}
            />
          ))}
        </div>

        
        <Link to="/profile">
        <div className="w-[52px] h-[52px] mr-10 rounded-full bg-[#2c2f32] flex justify-center items-center cursor-pointer">
          <img src={thirdweb} alt="user" className="w-[60%] h-[60%] object-contain" />
        </div>
      </Link>
       
      </div>
    </div>
  )
}

export default Sidebar