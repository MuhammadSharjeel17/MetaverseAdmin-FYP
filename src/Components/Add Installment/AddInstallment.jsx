import React from 'react'
import axios from 'axios';
import "./addInstallment.scss"
import Sidebar from '../Sidebar/Sidebar'
import { useState , useEffect } from "react";
import { useForm, useFieldArray ,Controller} from "react-hook-form";
import {baseURL} from '../../apis/baseurl';
import  {useNavigate, useParams} from 'react-router-dom'
import Modal from './ModalAddInstallment';

const AddInstallment = () => {
  const navigate = useNavigate();
  const [datasss,setData] =useState([]);
  const [deleted,selectDeleted]= useState();
  const [search, setSearch] = useState();
  console.log(search);
  const param = useParams();
   
  const [modalOn, setModalOn] = useState(false);

  const clicked = () =>{
    setModalOn(true)
  }
 
  // console.log(id);
  // const 
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
  // console.log("PLOTS DETAILS",datasss);
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
    //  deletePlots();
  return (
    <div className='viewFiles'>
       <Sidebar />

       {//Add Installment Modals
       }
       
       <div className="viewFilesContainer overflow-scroll h-screen" style={{
        padding:"2%"
       }}>
       
        {modalOn && <Modal setModalOn={setModalOn} />}
        <input onChange={(e)=>setSearch(e.target.value)} style={{borderRadius: '50px'}} type="text" class=" text-black-700 border border-2 border-blue-700  hover:border-2 w-48 bg-gray-100 p-2 my-1 hover:p-2 hover:my-1" placeholder='search'/>
        
        <table class="w-full table-auto">
        <thead class="bg-gray-100 border-b-2 border-gray-300 text-left w-full">
          <tr>
          <th class="w-20 p-3 text-sm font-semibold tracking-wide"> Sr. No </th>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide"> Reg No. </th>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide"> Security Code </th>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide"> Plot Size </th>
            <th class="w-20 p-3 text-sm font-semibold tracking-wide"> Plot No </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Block Name </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Status </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Owner Name </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Owner CNIC </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Owner Address </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Owner Contact </th>
            {/* <th class="p-3 text-sm font-semibold tracking-wide"> Owner Email </th> */}
            <th class="p-3 text-sm font-semibold tracking-wide"> Paid Amount </th>
            {/* <th class="p-3 text-sm font-semibold tracking-wide"> Paid Amounts (Remaining) </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Customer Bank Account No </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Remaining Installment</th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Installment Date </th> */}
            <th class="p-3 text-sm font-semibold tracking-wide"> Completed Installment </th>
            <th class="p-3 text-sm font-semibold tracking-wide"> Total Amount </th>
            <th class="p-3 text-sm font-semibold tracking-wide">2</th>
            <th class="p-3 text-sm font-semibold tracking-wide"> 2</th>
            <th class="p-3 text-sm font-semibold tracking-wide"> 2</th>
          </tr>
        </thead>
        <tbody class="items-center justify-between w-full" >
        {datasss.data && datasss.data.filter((element)=>{
          if(search=="" || search==null || search==undefined){
            return element
          }
          else if((element.regNo.includes(search))||(element.securityCode.includes(search))||(element.ownerName.toLowerCase().includes(search))){
            return element
          }
          // return search==="" ? element : element.regNo.includes(search);
        }).map((element ,index)=>{  
return (
          <tr class="bg-white border border-gray-300" key={index}>
             <td className='w-20 p-3 text-sm text-gray-700'>{index+1}. </td>
            <td className='w-20 p-3 text-sm text-gray-700'>{element.regNo} </td>
            <td className='w-20 p-3 text-sm text-gray-700'> {element.securityCode} </td>
            {/* <td className='p-3 text-sm text-gray-700'> {element.regNo} </td> */}
            <td className='w-20 p-3 text-sm text-gray-700'> {element.plotSize} </td>
            <td className='p-3 text-sm text-gray-700'> {element.plotNo} </td>
            <td className='p-3 text-sm text-gray-700'> {element.blockName} </td>
            <td className='p-3 text-sm text-gray-700'> {element.status} </td>
            <td className='p-3 text-sm text-gray-700'> {element.ownerName} </td>
            <td className='p-3 text-sm text-gray-700'> {element.ownerCNIC} </td>
            <td className='p-3 text-sm text-gray-700'> {element.ownerAddress} </td>
            {/* <td className='p-3 text-sm text-gray-700'> {element.ownerEmail} </td> */}
            <td className='p-3 text-sm text-gray-700'> {element.ownerPhoneNumber} </td>
            <td className='p-3 text-sm text-gray-700'> {element.totalPaidAmount}</td>
            {/* <td className='p-3 text-sm text-gray-700'>{element.totalAmount - element.totalPaidAmount} </td> */}
            {/* <td className='p-3 text-sm text-gray-700'>{element.totalNoOfInstallment[].customerBankAccountNo}</td>
            <td className='p-3 text-sm text-gray-700'>{element.totalNoOfInstallment[].remainingInstallment} </td> 
            <td className='p-3 text-sm text-gray-700'>{element.totalNoOfInstallment[].remainingInstallment} </td> */}
            <td className='p-3 text-sm text-gray-700'> {element.completedInstallments} </td>
            <td className='p-3 text-sm text-gray-700'>{element.totalAmount} </td>
            <td className='p-3 text-sm text-gray-700'>
              <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-4 rounded" onClick={()=>navigate( `/update/${element._id} `)}>Edit</button>
            </td>
            <td className='p-3 text-sm text-gray-700'>
            <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-4 rounded" onClick={()=>selectDeleted(element._id)}>Delete</button>
            </td>

            <td className='p-3 text-sm text-gray-700'>
            <button class="bg-green-500 hover:bg-green-700 text-white w-52 text-base font-semibold py-1 px-4 rounded" onClick={
              ()=>{
               navigate(`/modal/${element._id}`)
                setModalOn(true)
              }
            }>Add Installment</button>
            </td>

          </tr>

)})}
        </tbody>
        </table>
       </div>
    </div>
  )
}

export default AddInstallment