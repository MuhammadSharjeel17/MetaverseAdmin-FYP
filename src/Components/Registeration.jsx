import React from 'react';
// import '../index.css'
// import '../index.css'
import '../App.css';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useForm } from "react-hook-form";
import {baseURL} from '../apis/baseurl';
const Registeration = () => {
    const navigate = useNavigate();
    const { register, handleSubmit } = useForm();
  const handleRegistration =async (value) =>{
    // const [data,setData] = useState();
      console.log("Values",value);
      try {
        
        // console.log(value, "form values");
        // const compare = await axios.get(
        //   "http://localhost:8080/api/user/getregister",
         
        // );
        // console.log("compare",compare)
        // console.log("compareEmail",compare.email)
        // console.log("compareEmailValue",value.email)
        // if(compare.email === value.email){
        //  alert("Email already exist")
        // }
        // else{
        // console.log(actions, "form actionss");
        // setTrue(true);
        if(value !== undefined || ""){
          // await fetch("http://localhost:5000/api/user/getRegister")
          // .then((response) => {
          //   console.log(response);
           
          // })
          
  
          // setData(actualData)
        
        const { data } = await axios.post(
          `${baseURL}/api/user/setregister`,
          value
        );
        console.log(data, "dataaaa");
if(data.status ===false){
         alert(data.message);
}
else if(data.status === true ){
  if(value.password !== value.cPassword){
    alert("Password does not matched")
  }
  else if(data.password === data.cPassword){
  alert("Signup Successfull")
  navigate("/")
  }
}
          // actions.resetForm();
         
          // navigate("/plots");
          
       
        
       
      // }
     }
    }catch (err) {
        console.log(err);
      }
    }
  return (
    <>
    <div className="m-4 flex justify-between">
        <div>
            {/* <img src="./logo.jpeg" className="w-[90px] h-[90px] rounded-xl" alt="logo" /> */}
            <h1>Metaverse Shopping Mall</h1>
        </div>
        <div>
        <button className="w-[100px] h-[60px] hover:bg-black border border-white text-white font-serif font-bold rounded-xl   outline-none" onClick={()=>navigate("/")}>Login</button>
        </div>
    </div>
    <h1 className="outline-none  py-2 pr-4 block w-full text-center text-5xl text-[#d4af37] font-bold">Welcome to Ideal Residencia</h1>
    <h1 className="outline-none py-2 pr-4 block w-full text-center text-3xl text-[#d4af37] font-bold">Focus on your dreams</h1>
    <div class="container mt-9 flex justify-center items-center h-screen mx-auto ">
    <form  action="#" class="w-40 p-4" onSubmit={handleSubmit(handleRegistration)}>
    <div className="flex justify-center text-center items-center">
    <img src="./logo.jpeg" className="w-[70px] h-[70px] flex justify-center text-center items-center rounded-xl" alt="logo" />

        </div>
        <div className="flex justify-center text-center items-center">
        <h1 className="outline-none py-2 pr-4 block w-full text-center font-serif text-5xl text-white font-bold">Registeration</h1>
        </div>
      <div class="p-3">
        <input class="outline-none py-2 pr-4 block w-full" name="name" {...register('name')} type="text" placeholder="Username" required />
      </div>
      <div class="p-3">
        <input class="outline-none py-2 pr-4 block w-full" name="email" {...register('email')} type="email" placeholder="Enter Email Id" required />
      </div>
      <div class="p-3">
        <input type="password" name="password" {...register('password')} placeholder="Password" class="outline-none py-2 pr-4 block w-full" required />
      </div>
      <div class="p-3">
        <input class="outline-none py-2 pr-4 block w-full"name="cPassword" {...register('cPassword')} type="password" placeholder="Confirm Password" required />
      </div>
      <div class="p-3">
        <input class="outline-none py-2 pr-4 block w-full" name="phoneNumber" {...register('phoneNumber')} type="number" placeholder="Enter Mobile Number" required />
      </div>
      <div class="p-3 pt-4">
      <button type="submit" class="w-full text-white py-2 pr-4">
      Register
      </button>
      </div>
      <div className='text-center' >
            <span class=" border-none font-serif    border border-pink-600 rounded-xl w-full h-12 text-blue-500">Or</span><br/>
            <span class=" border-none font-serif    border border-pink-600 rounded-xl w-full h-12 text-blue-500">Already have a Account</span>
           
            </div>
      <button class=" border-none font-serif    border border-pink-600 rounded-xl w-full h-12 text-white" onClick={()=>navigate("/")}>Login</button>
    </form>
   </div>
   </>
  )
}

export default Registeration