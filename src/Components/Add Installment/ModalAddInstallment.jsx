import React from 'react'
import { useForm, useFieldArray ,Controller} from "react-hook-form";
import axios from 'axios';
import {baseURL} from '../../apis/baseurl';
import { useNavigate, useParams } from 'react-router-dom';
const ModalUpdate = ({setModalOn}) =>{
    const handleCancelClick = () => {
        setModalOn(false)
    }
    const navigate = useNavigate();
    const { register, control, handleSubmit, reset, trigger, setError } = useForm({
        // defaultValues: {}; you can populate the fields by this attribute 
      });
      // const createRecipe =useSelector(store=>store.CreateRecipe);
      const id = useParams()
      const { fields, append, remove } = useFieldArray({
        control,
        name: "totalNoOfInstallment"
      });
      const handleRegistration =async (value) =>{
        // let values = {RegNo,status,plotSize,securityCode,plotNo,BlockNo,OwnerPhoneNumber,OwnerName,OwnerCNIC,OwnerEmail,OwnerAddress,TotalPlotPrice,completedInstallments,PaidAmount,value}
          console.log("Values",value);
          try {
           
            // console.log("updatedValues",updatedValues);
            console.log(value, "form values");
            // console.log(actions, "form actionss");
            // setTrue(true);
            if(value.totalNoOfInstallment[0].customerBankAccountNumber!=="" || value.totalNoOfInstallment.paidAmount!=="" || value.totalNoOfInstallment.installmentDate!=="" || value.totalNoOfInstallment.remainingInstallment!==""){
            const { data } = await axios.put(
              `${baseURL}/api/v1/plot/updateInstallmentById/${id.id}`,
              value,
            )
            
            console.log(data, "dataaaa");
            if(data){
             alert("Update Successfully");
            }
            //  navigate("/ViewFiles");
        reset(); 
          }
          else{
            console.log("Enter values")
          }
         }catch (err) {
            console.log(err);
          }
        }
    return(
         <form  onSubmit={handleSubmit(handleRegistration)}>
        <div className='bg-zinc-200 fixed inset-0 z-50'>
             {/* {fields.map((item, index) => ( */}
            <div className="flex h-screen justify-center items-center">
          
                <div className="flex-col justify-center bg-white py-12 px-12 border-4 border-sky-500 rounded-xl"  style={{width:"60%"}}>
                    
           {/* {fields.map((element,index)=>(
            <> */}
            <label className="text-[#DAA520] text-xl font-bold block mt-4">New Installment</label><hr/>
             <label className="text-gray-600 font-bold text-3x1 block mt-4" name="paidAmount"  type="text" >Paid Amount</label>
            <input class="input outline-groove border-2 border-blue-500 py-2 pr-4 block w-full" name="paidAmount" {...register(`totalNoOfInstallment.${0}.paidAmount`)}  type="text" />
            <label className="text-gray-600 font-bold text-3x1 block mt-4" name="customerBankAccountNo"  type="number">Customer Bank Account No</label>
            <input class="input outline-groove border-2 border-blue-500 py-2 pr-4 block w-full" name="customerBankAccountNo" {...register(`totalNoOfInstallment.${0}.customerBankAccountNo`)}  />
            <label className="text-gray-600 font-bold text-3x1 block mt-4">Remaining Installment</label>
            <input class="input outline-groove border-2 border-blue-500 py-2 pr-4 block w-full" type="text" name="remainingInstallment" {...register(`totalNoOfInstallment.${0}.remainingInstallment`)}/>
            <label className="text-gray-600 font-bold text-3x1 block mt-4"  type="date">Installment Date</label>
            <input class="input outline-groove border-2 border-blue-500 py-2 pr-4 block w-full" type="date" name="installmentDate" {...register(`totalNoOfInstallment.${0}.installmentDate`)} />
        {/* </>
        ))} */}
                    <div class="grid grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 xs:grid-cols-1">
                        {/* <div class="">
                             <button onClick={()=>append()} className="mt-5 rounded w-52 px-4 py-2 text-white bg-[#DAA520] font-serif hover:bg-green-600 ">Add Installment</button>
                        </div> */}
                        {/* <button className="mt-4  bg-[#FF0000] font-serif hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded" type="button" onClick={() => remove(0)}>Delete</button> */}
                        <div class="">
                             <button type="submit" className="mt-5 rounded w-52 px-4 py-2 text-white font-serif bg-blue-400 hover:bg-green-600" >Submit</button>
                        </div>
                        <div class="">
                             <button type="submit" className="mt-5 rounded w-52 px-4 py-2 text-white font-serif bg-blue-400 hover:bg-green-600" onClick={()=>navigate("/AddInstallment")} >Close</button>
                        </div>
                    </div>
                </div>
               
             
            
          
            </div>
             {/* ))} */}
        </div>
        </form>
    )
}

export default ModalUpdate