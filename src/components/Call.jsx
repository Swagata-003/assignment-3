import React, { useState } from 'react';
import Header from './Header';
import Sidebar from './Sidebar';
import Home from './Home';
import View from './View';
import KanbanBoard from './KanbanBoard';



const Call = () => {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false);
  const [activePage, setActivePage] = useState("dashboard");

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle);
  };

  return (
    <div className='grid-container'>
      <Header OpenSidebar={OpenSidebar} />
      <Sidebar 
        openSidebarToggle={openSidebarToggle} 
        OpenSidebar={OpenSidebar}
        setActivePage={setActivePage} // pass to sidebar
      />
      
      <main className='main-container'>
        {activePage === "dashboard" && <Home />}
        {activePage === "calendar" && <View />}
        {activePage === "kanban" && <KanbanBoard />}
        {/* You can add more pages here later */}
      </main>
    </div>
  );
};

export default Call;
