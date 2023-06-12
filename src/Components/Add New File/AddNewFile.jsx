import React from 'react'
import "./addNewFile.scss"
import Sidebar from "../Sidebar/Sidebar"
import PlotsForm from '../View Files/plots'

const addNewFile = () => {
  return (
    <div className='addNewFile'>
        <Sidebar />
        <div className="addNewFileContainer">
          <PlotsForm/>
        </div>
    </div>
  )
}

export default addNewFile