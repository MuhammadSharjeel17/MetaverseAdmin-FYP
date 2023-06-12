import React from "react";
import { useState , useEffect } from "react";
import axios from 'axios';
import { useForm, useFieldArray ,Controller} from "react-hook-form";
import {baseURL} from '../../apis/baseurl';
// import '../index.css';
const PlotsForm = () => {
  const d =new Date();
  const months = d.getFullYear() + "-" +(d.getMonth()+1);
   console.log("months",months);
   const date =d.getFullYear() + "-" +(d.getMonth()+1)+ "-" + d.getDate();

   console.log("months",months);
  const [itWorks, setItWorks] = useState(false);
  function handleClick(){ setItWorks(!itWorks) }
  function handleClickOpen(){ 
    setItWorks(false) 
  }
  function handleClickClose(){ 
      setItWorks(true) 
    }
            // const fetchsData =async () => {
            //   return await axios.get(`http://localhost:3000/api/recipes/getrecipes`)
            //         .then((response) => console.log(response.data));}
            //         useEffect(() => {
            //           fetchsData();
            //           },[]);
 
//   const { register, handleSubmit , reset } = useForm();
  const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  // const createRecipe =useSelector(store=>store.CreateRecipe);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "totalNoOfInstallment"
  });
  const handleRegistration =async (value) =>{
      console.log("Values",value);
      try {
       
        console.log(value, "form values");
        // console.log(actions, "form actionss");
        // setTrue(true);
        if(value !== undefined || ""){
        const { data } = await axios.post(
          `${baseURL}/api/v1/plot/addPlot`,
          {
          
            value,months,date
          ,
        } 
        );
        console.log(data, "dataaaa");
         alert("File Added Successfully");
    reset(); 
      } }catch (err) {
        console.log(err);
      }
    }
    
  return (
    <React.Fragment>
      
      <form
        className="w-[70%] bg-white m-auto rounded shadow-xl py-4 spacing-y-4 mt-9 px-12 border "
        onSubmit={handleSubmit(handleRegistration)}
      >
        <h1 className="text-center text-[#DAA520] font-serif  flex justify-center     text-7xl font-semibold mt-10">Product Details</h1>
        <label className="text-gray-600  font-bold">Product Title</label>
        <input
          className="input border-solid border-gray-300 border outline-none py-2 px-4 w-full rounded text-gray-700"
          // name="title"
          placeholder="Enter Product Title..."
          // autoFocus
          // ref={register({
          //   required: "Please enter a job title",
          // })}
          name="regNo" {...register('regNo', { required: "Product Title is required." })}
        />
        {/* {errors.title && (
          <div className="mb-3 text-normal text-red-500">
            {errors.title.message}
          </div>
        )} */}

        <label className=" text-gray-600 font-bold  text-3x1 block ">Security Code</label>
        <input
          className="input border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="location"
          type="text"
          placeholder="Enter Security Code..."
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="securityCode" {...register('securityCode')}
        />
          <br/>
        
       
        
        <label className=" text-gray-600 font-bold block mt-1">
          Plot Size
        </label>
        <label className=" inline-block text-gray-600 font-bold">
          <input
            className=" input mt-2 mr-1"
            // name="jobtype"
            type="radio"
            name="plotSize"
            {...register('plotSize')}
            value="5marla"
            // ref={register({
            //   required: "Please select a job type",
            // })}
          />
          5 Marla<br/>
        </label><br/>
        <label className=" inline-block text-gray-600 font-bold">
          <input
            className="input mt-2 mr-1"
            // name="jobtype"
            type="radio"
            name="plotSize"
            {...register('plotSize')}
            value="7marla"
            // ref={register({
            //   required: "Please select a job type",
            // })}
          />
          7 Marla<br/>
        </label><br/>
        <label className=" inline-block text-gray-600 font-bold">
          <input
            className="input mt-2 mr-1"
            // name="jobtype"
            type="radio"
            name="plotSize"
            {...register('plotSize')}
            value="10marla"
            // ref={register({
            //   required: "Please select a job type",
            // })}
          />
          10 Marla<br/>
        </label><br/>
        <label className=" inline-block text-gray-600 font-bold">
          <input
            className="mt-2 mr-1"
            // name="jobtype"
            type="radio"
            name="plotSize"
            {...register('plotSize')}
            value="1kanal"
            // ref={register({
            //   required: "Please select a job type",
            // })}
          />
          1 Kanal<br/>
        </label><br/>
        <label className="text-gray-600 font-bold block mt-2">
          Plot Number
        </label>
        <input
          className="input border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="link"
          type="text"
          placeholder="Enter Plot Number"
          // ref={register({
          //   required: "Please enter a link",
          // })}
          name="plotNo" {...register('plotNo', { required: "plotNumber is required." })}
        />
            
        {/* {errors.link && (
          <div className="mb-3 text-normal text-red-500 ">
            {errors.link.message}
          </div>
        )} */}
         <label className="text-gray-600 font-bold text-3x1 block mt-4">Block Name</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="location"
          type="text"
          placeholder="Enter Block Name..."
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="blockName" {...register('blockName', { required: "blockName is required." })}
          

        />
        <label className="text-gray-600 font-bold block mt-4">Status</label>
        <label className="inline-block text-gray-600 font-bold">
          <input
            className="input mt-2 "
            // name="jobtype"
            type="radio"
            name="status"
            {...register('status')}
            value="Open"
            onClick={handleClickOpen}
            checked = {!itWorks}
            // ref={register({
            //   required: "Please select a job type",
            // })}
          />
          Open
        </label>
         <br/>
        <label className=" inline-block text-gray-600 font-bold">
          <input
            className="input mt-2 mr-1"
            // name="jobtype"
            type="radio"
            name="status"
            onClick={handleClickClose}
            {...register('status')}
            value="Close"
            // ref={register({
            //   required: "Please select a job type",
            // })}
          />
          Close<br/>
        </label>
       
       
      <button className="mt-4  bg-[#DAA520] font-serif hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
        type="button"
        onClick={() => append()}
      >
        Add Installment
      </button>
      

        
        <button
          className="mt-4 w-full bg-[#DAA520] font-serif hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Save
        </button>

      </form>
    </React.Fragment>
  );
};

export default PlotsForm;