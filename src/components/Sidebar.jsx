import React from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './Side.css';
import {Bs0Square, Bs123, BsBackpack2, BsBook, BsBookFill, BsBookmark, BsBookmarkFill, BsCart3,BsFillGearFill,BsFillGrid3X3GapFill,BsGrid1X2Fill,BsPersonCircle, BsSquareFill} from 'react-icons/bs';
function Sidebar({ openSidebarToggle, OpenSidebar, setActivePage }) {
  return (
    <>
      <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
        <div className='sidebar-title'>
          <div className='sidebar-brand'>
            <BsBook className='icon-header' />
            E-library&nbsp;&nbsp;&nbsp;
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
          </div>
        </div>
        <ul className='sidebar-list'>
          <li className='sidebar-list-item' onClick={() => setActivePage("dashboard")}>
            <BsGrid1X2Fill className='icon' /> Dashboard
          </li>
          <li className='sidebar-list-item' onClick={() => setActivePage("register")}>
            <BsPersonCircle className='icon' /> Register
          </li>
          <li className='sidebar-list-item' onClick={() => setActivePage("login")}>
            <BsPersonCircle className='icon' /> Login
          </li>
          <li className='sidebar-list-item' onClick={() => setActivePage("books")}>
            <BsBookFill className='icon' /> Books Available
          </li>
          <li className='sidebar-list-item' onClick={() => setActivePage("categories")}>
            <BsFillGrid3X3GapFill className='icon' /> Categories
          </li>
          <li className='sidebar-list-item' onClick={() => setActivePage("borrowed")}>
            <BsBookFill className='icon' /> Books Borrowed
          </li>
          <li className='sidebar-list-item' onClick={() => setActivePage("calendar")}>
            <BsFillGrid3X3GapFill className='icon' /> Calendar
          </li>
          <li className='sidebar-list-item' onClick={() => setActivePage("kanban")}>
          <BsFillGrid3X3GapFill className='icon' /> Kanban Board
          </li>

        </ul>
      </aside>
    </>
  );
}

export default Sidebar;
