import React from 'react'
import {BsFillBellFill,BsFillEnvelopeFill,BsPersonCircle,BsSearch,BsJustify} from 'react-icons/bs';
import './Head.css';
function Header({OpenSidebar}){
  return (
    <>
      <header className='header'>
        <div classname='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div classname='header-left'>
            <BsSearch classname='icon'/>
        </div>
        <div classname='header-right'>
            <BsFillBellFill classname='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>

      </header>
    </>

  )
}

export default Header
