import React from 'react'
import "./home.scss"
import Sidebar from "../Sidebar/Sidebar"
import '../Sidebar/sideStyle.scss';
import ViewFiles from '../View Files/ViewFiles'
import Dashboard from '../Dashboard'

const home = () => {
  return (
    <>
    {/* <div className="flex ">
    <div className=" shadow-xl   w-fit">
      <Sidebar/> 
      </div>
    <div className='bg-white w-full  m-0   text-center'>
      <div className="flex justify-center space-x-5">
      <img src="./Logo-01.ico" alt="logo" className=" mt-6 rounded w-[70px] h-[70px]"/>
       <h1 className="text-6xl  font-bold mt-9 text-gray-600 underline text-center">Admin Dashboard</h1>
       </div>
        // <div className="homeContainer">
         
        //  <Dashboard/>
        // </div>
    </div>
    </div> */}
     <div className='addNewFile'>
        <Sidebar />
        <div className="addNewFileContainer">
        <div className="flex justify-center space-x-5">
      <img src="./Logo-01.ico" alt="logo" className=" mt-6 rounded w-[70px] h-[70px]"/>
       <h1 className="text-6xl  font-bold mt-9 text-gray-600 underline text-center">Admin Dashboard</h1>
      
       </div>
       <div>
        <Dashboard/>
       </div>
       
        </div>
        
    </div>
   
    </>
  )
}

export default home