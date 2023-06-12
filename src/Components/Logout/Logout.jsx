import React from 'react'
import "./logout.scss"
import Sidebar from "../Sidebar/Sidebar"

const logout = () => {
  return (
    <div className='logout'>
        <Sidebar />
        <div className="logoutContainer">
          Logout Main Container
        </div>
    </div>
  )
}

export default logout