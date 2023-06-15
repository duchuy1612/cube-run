import React, { useState, useEffect } from 'react'
import { useSelector } from 'react-redux'

import NavBar from '../components/NavBar/NavBar'
import { Sidebar } from '../components/SideBar/SideBar'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  const [sidebarOpen, setsidebarOpen] = useState(false)

  const userLogin = useSelector((state) => state.userLogin)
  const { userCred } = userLogin
  const openSidebar = () => {
    setsidebarOpen(true)
  }
  const closeSidebar = () => {
    setsidebarOpen(false)
  }

  return (
    <div className='w-full h-full'>
        <div className="sticky top-0 z-10">
            <NavBar />
        </div>
        <Sidebar sidebarOpen={sidebarOpen} closeSidebar={closeSidebar} />
    </div>
)}