import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";

import { AiFillHome } from "react-icons/ai";
import { IoMdMenu } from "react-icons/io";
import Icon from './Icon';


function Nav() {
  return (
    <div className='bg-zinc-900 absolute bottom-0 left-0 right-0 h-16 flex justify-evenly items-center'>
        <Icon IconButton={IoMdMenu} color='white' size='30'/>
        <Icon IconButton={AiFillHome} color='white' size='30'/>
        <Icon IconButton={FaArrowLeftLong} color='white' size='30'/>
    </div>
  )
}

export default Nav