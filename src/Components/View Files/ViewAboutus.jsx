import React from 'react'
import axios from 'axios';
import "./viewFiles.scss"
import Sidebar from '../Sidebar/Sidebar'
import {useState,useEffect} from 'react';
import  {useNavigate, useParams} from 'react-router-dom'
import Modal from './ModalViewInstallment';
import {baseURL} from '../../apis/baseurl';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
// const itemsPerPage = 3;
function ViewAboutus(currentItems)  {
  const [datasss,setData] =useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  const [deleted,selectDeleted]= useState();
  const [search, setSearch] = useState();
  const navigate = useNavigate();
  // console.log(search);
  const param = useParams();
  console.log("currentitems1",currentItems.currentItems);
  const [modalOn, setModalOn] = useState(false);
  let paidAmounts;
  const clicked = (element) =>{
    setModalOn(true)
   

  }
 
  // console.log(id);
  // const 
  useEffect( () => {
    async function data(){
  //  await axios.get("http://localhost:5000/api/v1/plot/getplot")
  await fetch(`${baseURL}/api/details/getmessage`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) =>{
        if(actualData!== [] || ""){
        setData(actualData);
        console.log("Plots Details",actualData)
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
      // setData(actualData)
    }
    data();
  }, []);
 
  
  // useEffect(()=>
  // {
  //   handlePageClick();
  // },[]);
  // console.log("PLOTS DETAILS",datasss);
  const deletePlots =async ()=>{
    console.log("deleted",deleted);
    if(deleted !== undefined || []){
   try{
   
   await axios.delete(`${baseURL}/api/recipes/deleterecipes`, {
     data: {
       deleted,
     },
   });
  
   } 

 catch(err){
   console.log(err);
 }
 
  console.log("id",deleted)
}
}
    //  deletePlots();
  return (
    <div className='viewFiles'>
       {/*Sidebar Component */}
       <Sidebar />

       {/*Main Section/Container starts here*/}
       <div className="viewFilesContainer overflow-auto h-screen" style={{
        padding:"2%"
       }}>

        {/*Model Triggers Here*/}
        {modalOn && <Modal setModalOn={setModalOn} />}

        {/*Search Button */}
        <input onChange={(e)=>setSearch(e.target.value)} style={{borderRadius: '50px'}} type="text" class=" text-black-700 border border-2 border-blue-700  hover:border-2 w-48 bg-gray-100 p-2 my-1 hover:p-2 hover:my-1" placeholder='search'/>

        {/*Display All the Plots */}
        <table class="w-full table-auto">
        <thead class="bg-gray-100 border-b-2 border-gray-300 text-left w-full">
          <tr>
          <th class=" p-3 text-sm font-semibold tracking-wide"> Sr. No </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Full Name </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Email </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Message </th>
            {/* <th class="p-3 text-sm font-semibold tracking-wide"> Preparation Time </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Servings</th> */}
            
            <th class="p-3 text-sm font-semibold tracking-wide"> </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> </th>
          </tr>
        </thead>
        <tbody class="items-center justify-between w-full">
        {datasss.data ?  datasss.data.filter((element)=>{
          if(search=="" || search==null || search==undefined){
            return element
          }
          else if((element.title.includes(search))){
            return element
          }
          return search==="" ? element : element.title.includes(search);
        }).map((element ,index)=>{  
return (
          <tr class="bg-white border border-gray-300" key={index}>
             <td className='p-3 text-sm text-gray-700'>{index+1}. </td>
            {/* <td className='p-3 text-sm text-gray-700'>{element.title} </td> */}
           
            {/* <td className='p-3 text-sm text-gray-700'> {element.regNo} </td> */}
            <td className='p-3 text-sm text-gray-700'> {element ? element.Name: ""} </td>
            <td className='p-3 text-sm text-gray-700'> {element ?element.email : ""} </td>
            <td className='p-3 text-sm text-gray-700'> {element ?element.message : ""} </td>
            {/* <td className='p-3 text-sm text-gray-700'> {element.serving} </td> */}

          {/* {
            element.totalNoOfInstallment.map((x)=>(
            paidAmounts =  x.paidAmount 
            ))
          } */}
            
             
          
            
          </tr>

)}):"Loading...."}
        </tbody>
        </table>
       </div>
      
      
   
    </div>
  )
}
const AboutItems=({itemsPerPage})=> {
  const [datasss,setData] =useState([]);
  const [itemOffset, setItemOffset] = useState(0);
  useEffect( () => {
    async function data(){
  //  await axios.get("http://localhost:5000/api/v1/plot/getplot")
  await fetch(`${baseURL}/api/details/getmessage`)
      .then((response) => {
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        return response.json();
      })
      .then((actualData) =>{
        if(actualData!== [] || ""){
        setData(actualData);
        console.log("Plots Details",actualData)
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
      // setData(actualData)
    }
    data();
  }, []);
  
  
  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = datasss.data ?(datasss.data.slice(itemOffset, endOffset)):"";
  console.log("currentItems",currentItems)
  const pageCount =  Math.ceil((datasss.data ? datasss.data.length : "") / itemsPerPage );
  console.log("pageCount",pageCount);
  // Invoke when user click to request another page.
  const handlePageClick = (event) => {
    const newOffset =  ((event.selected * itemsPerPage) %  datasss.data.length);
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
     
      <div className='bg-white '>
         <ViewAboutus currentItems={currentItems} />
         <div>
      <ReactPaginate className='flex justify-center  rounded text-white space-x-6 font-bold p-4 bg-green-600 text-xl font-serif'
        breakLabel="..."
        nextLabel="next >"
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel="< previous"
        renderOnZeroPageCount={null}
      />
      </div>
      </div>
    </>
  );
}

// Add a <div id="container"> to your HTML to see the componend rendered.
export default  AboutItems 