import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import {baseURL} from '../../apis/baseurl';
import { useNavigate } from 'react-router-dom'
const Modal = ({setModalOn}) =>{
  const navigate = useNavigate();
    const [datasss,setData] =useState([]);
    const [deleted,selectDeleted]= useState();
     const id = useParams();
     console.log("id",id.id);
    useEffect( () => {
        async function data(){
      //  await axios.get("http://localhost:5000/api/v1/plot/getplot")
      await fetch(`${baseURL}/api/v1/plot/getplots`)
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
      console.log("PLOTS DETAILS",datasss.data);
      const deletePlots =async ()=>{
           console.log("deleted",deleted);
           if(deleted !== undefined || []){
          try{
          // let deleted="6368b1922a6b1af86c8b1807";
        //  let id = param.deleted
        //  console.log("Idsss",id);
        // let value = deleted;
          await axios.delete(`${baseURL}/api/v1/plot/deletePlots`, {
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

    {/* Modal Triggered Function */}
    const handleCancelClick = () => {
        // setModalOn(false)
        navigate("/ViewFiles");
    }

    return(
        //Modal Popped Up
        <div className='bg-zinc-200 fixed inset-0 z-50'>
            <div className="flex h-screen justify-center items-center">
                <div className="flex-col justify-center bg-white py-2 px-12 border-4 border-sky-500 rounded-xl" style={{width:"60%"}}>

        {/*Table of the Installments */}   
        <table class="w-full table-auto">
        <thead class="bg-gray-100 border-b-2 border-gray-300 text-left w-full">
          <tr>
         
            <th class="p-3 text-sm font-semibold tracking-wide"> Paid Amounts (Remaining) </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Customer Bank Account No </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Remaining Installment</th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Installment Date </th> 
           
          </tr>
        </thead>
        
        {/*Dynamic Data from the Database*/}  
        <tbody class=" w-full overflow-y-scroll w-full" style={{height: "55vh"}}>
        {datasss.data && datasss.data
    .filter((x) => x._id === id.id)
    .map((element) => ( 
     
                
                  
                  element.totalNoOfInstallment.map((element,index) =>{      
                   
                      return(
                        
                        <tr class="bg-white border border-gray-300" key={index}>
                   <td className='p-3 text-sm text-gray-700'>{ element.customerBankAccountNo}</td>
                    <td className='p-3 text-sm text-gray-700'>{ element.installmentDate }</td> 
                    <td className='p-3 text-sm text-gray-700'>{ element.paidAmount }</td>
                    <td className='p-3 text-sm text-gray-700'>{ element.remainingInstallment }</td> 
                  </tr>
                    )
})
                    
             
  ))} 
              
     
        </tbody>
        </table>
         
                    <div class="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                        <div class="">
                             <button onClick={handleCancelClick} className="mt-3 rounded w-52 px-4 py-2 text-white font-serif bg-blue-400 hover:bg-green-600">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Modal