import React, { useState } from 'react'
import NavBar from '../components/NavBar/NavBar'
import { Sidebar } from '../components/SideBar/SideBar'
import { useNavigate } from 'react-router-dom'


export default function Home () {
  const [sidebarOpen, setsidebarOpen] = useState(false)

  const openSidebar = () => {
    setsidebarOpen(true)
  }
  const closeSidebar = () => {
    setsidebarOpen(false)
  }

  return (
    <div className='w-full h-full flex flex-row'>
      <div className='flex basis-1/5'>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
      </div>
      <div className="sticky top-0 z-10 bg-white basis-4/5 justify-between rounded-l-2xl">
      {(() => {
            switch (window.location.pathname) {
              case '/accounts':
                return <NavBar page='account'/>
              case '/events':
                return <NavBar page='event'/>
              case '/logs':
                return <NavBar page='log'/>
              default:
                return <NavBar page='home'/>
        }
      })()}        
      </div>
    </div>
)}