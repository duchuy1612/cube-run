import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import { Sidebar } from '../../components/SideBar/SideBar'

export default function Home () {
  const [sidebarOpen, setsidebarOpen] = useState(false)

  const openSidebar = () => {
    setsidebarOpen(true)
  }
  const closeSidebar = () => {
    setsidebarOpen(false)
  }

  return (
    <div className='window'>
        
    </div>
)}