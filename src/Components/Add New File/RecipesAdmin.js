import React from "react";
import { useState , useEffect } from "react";
// import { useSelector } from 'react-redux';
import { useForm, useFieldArray ,Controller} from "react-hook-form";
// import { useDispatch } from 'react-redux';
import axios from 'axios';
import Sidebar from "../Sidebar/Sidebar";
// import { useForm } from "react-hook-form";
// import '../index.css';
import { useNavigate } from "react-router-dom";
const RecipesAdmin = () => {
  // const dispatch = useDispatch();
  const [file , setFile]=useState();
  const [itWorks, setItWorks] = useState(false);
    const [fileObj, setFileObject] = useState([]);
    const [fileArray, setFileArray] = useState([]);
    
  // const { register, errors, handleSubmit } = useForm();
  const [fieldss, setFields] = useState([{ value: null }]);
  const navigate = useNavigate();
  const uploadMultipleFiles = (e) => {
    console.log("1");
    setFile(e.target.files);
    fileObj.splice(0, fileObj.length);
    fileArray.splice(0, fileArray.length);
    fileObj.splice(0, fileObj.length);
    fileArray.splice(0, fileArray.length);
    fileObj.push(e.target.files);
    for (let i = 0; i < fileObj[0].length; i++) {
      fileArray.push(URL.createObjectURL(fileObj[0][i]));
    }
  };
  // const fetchData =async () => {
  //   return await fetch("http://localhost:3000/api/details/getaboutUs")
  //         .then((response) => response.json())
  //         .then((data) => console.log(data));}
  //         useEffect(() => {
  //           fetchData();
  //           });
            const fetchsData =async () => {
              return await axios.get("http://localhost:3000/api/recipes/getrecipes")
                    .then((response) => console.log(response.data));}
                    useEffect(() => {
                      fetchsData();
                      },[]);
  function handleChange(i, event) {
    const values = [...fields];
    values[i].value = event.target.value;
    setFields(values);
  }
//  const  ImageUploader = async(value)=>{
  // if(file){
    // const formData = new FormData();
    // formData.append("image" , file)
    // const responses = await fetch("http://localhost:3000/api/picture",{
    //   method : "POST",
    //   body : formData
    // }).then(responses =>responses.json())
    // alert(JSON.stringify(responses))
    
      // dispatch(createRecipe(file))
      
  // }
  // else{
  //   console.log("No file")
  // }
//   console.log(file);
//   if(file){
//   const formData = new FormData();
//   formData.append('image', file);
//   axios.post('http://localhost:3000/api/recipes/setrecipes').then((res)=>{
//   console.log("res",res);
//   })
// }
// else{
//   alert("error")
// }
//   }
  function handleAdd() {
    const values = [...fields];
    values.push({ value: null });
    setFields(values);
  }

  function handleRemove(i) {
    const values = [...fields];
    values.splice(i, 1);
    setFields(values);
  }
  

  // const onSubmit = async (data) => {
  //   // const fields = { fields: data };
  // };
  
  const { control, register, handleSubmit , reset, formState: { errors }, } = useForm();
  const {fields, append, remove } = useFieldArray({
    control,
    name: "steps",
    names: "ingredients"
  });
  // const createRecipe =useSelector(store=>store.CreateRecipe);
  const handleRegistration = async (values)=>{
    try{
     
    
          console.log(file)
          // const datas = new FormData();
          // datas.append('file', file);
          // console.log(file);
          console.log(values)
          // const send={datas,values};
          try {
              const { data } = await axios.post("http://localhost:8080/api/product/createproduct",values)
                  // {
                  //     headers: {
                  //         mode: 'no-cors',
                  //         // 'Authorization': `${admin}`,
                  //         accept: "application/json",
                  //         "Content-Type": "multipart/form-data",

                  //     },
                  // }

              
             console.log(data)

              if (data) {

                  alert('Product Added Successfully')
                  reset();
                
              }

          } catch (err) {
              console.log(err)
          }
      
      
  }catch(error){
     console.log(error);

  }
  }

  return (
    <React.Fragment>
       <div className='addNewFile'>
        <Sidebar />
        <div className="addNewFileContainer">
          
      
      <h1 className="text-center text-[#8d4199] font-serif  flex justify-center     text-7xl font-semibold mt-10">3D PRODUCT</h1>
      <form
        className="w-[70%] bg-white m-auto rounded shadow-xl py-10 spacing-y-4 mt-9 px-12 border "
        // onSubmit={handleSubmit(onSubmit) }
        onSubmit={handleSubmit(handleRegistration)}
      >
        <label className="text-gray-600  font-bold">Title</label>
        <input
          className="border-solid border-gray-300 border outline-none py-2 px-4 w-full rounded text-gray-700"
          // name="title"
          placeholder="Enter Product Title..."
          // autoFocus
          // ref={register({
          //   required: "Please enter a job title",
          // })}
          name="title" {...register('title', { required: "title is required." })}
        />
          {errors.title && errors.title.message && <div className="text-red-500">{errors.title.message}</div>}
          <label className="text-gray-600 py-2  font-bold" htmlFor="category">Choose a category:</label>

          <select className="border-solid border-gray-300 border outline-none py-2 px-4 w-full rounded text-gray-700" {...register("category", { required: "Please select a category" })}>
        <option value="">--Select--</option>
        <option value="men">Men</option>
        <option value="women">Women</option>
        <option value="bags">Bags</option>
        <option value="shirts">Shirts</option>
        <option value="shoes">Shoes</option>
      </select>
      {errors.category && <p>{errors.category.message}</p>}<br/>
        <label className="text-gray-600  font-bold">3D Image Url</label>
        <input
          className="border-solid border-gray-300 border outline-none py-2 px-4 w-full rounded text-gray-700"
          // name="title"
          placeholder="Enter 3D Image Url"
          // autoFocus
          // ref={register({
          //   required: "Please enter a job title",
          // })}
          name="image" {...register('image', { required: "ImageUrl is required." })}
        />
       {errors.image && errors.image.message && <div className="text-red-500">{errors.image.message}</div>}
        
        {/* <div className=" flex justify-center items-center">
                    {(fileArray || []).map((url) => (

    <img
  style={{ width:"500px", height: "300px" }}
  src={url}
  alt="..."
  key={url}
  className="p-4 border-2 border-orange-500 mx-2 my-2"
 
/>

  ))}
  <div className="w-full mt-3 flex justify-center items-center">
   {file && <img className='h-[15rem] w-full' src={URL.createObjectURL(file)}
  alt='img' />}
  </div>
  </div>
        <div class="flex max-w-full justify-center mt-8">
    <div class="rounded-lg border-solid border-gray-300 bg-gray-50 w-full">
        <div class="m-4">
          
            <div class="flex items-center justify-center w-full">
                <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col items-center justify-center pt-7">
                      
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        
                        <p class="pt-1 text-sm cursor-pointer tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a photo </p>
                    </div>
                    
                    <input
                      type="file"
                      
                      className="form-control hidden"
                     
                      onChange= {(e)=>setFile(e.target.files[0])}
                      name="image"
                      accept="image/*"
                    />
                </label>
            </div>
        </div>
        
    </div>
</div> */}
<label className="text-gray-600 font-bold  text-3x1 block ">Price in Dollars</label>
        
         
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="location"d
          type="text"
          placeholder="#"
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="priceinDollars" {...register('priceinDollars', { required: "Price is required." })}
        />
        {errors.priceinDollars && errors.priceinDollars.message && <div className="text-red-500">{errors.priceinDollars.message}</div>}
         <label className="text-gray-600 font-bold  text-3x1 block ">Price in PKR</label>
        
         
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="location"d
          type="text"
          placeholder="#"
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="priceinPkr" {...register('priceinPkr', { required: "Price is required." })}
        />
        {errors.priceinPkr && errors.priceinPkr.message && <div className="text-red-500">{errors.priceinPkr.message}</div>}
     
         <label className="text-gray-600 font-bold  text-3x1 block ">Colors</label>
        
         
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="location"d
          type="text"
          placeholder="Enter Available colors..."
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="colors" {...register('colors', { required: "Colors is required." })}
        />
         {errors.colors && errors.colors.message && <div className="text-red-500">{errors.colors.message}</div>}
        
         <label className="text-gray-600 font-bold  text-3x1 block ">Total Quantity</label>
        
         
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="location"d
          type="text"
          placeholder="Enter Quantity"
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="quantity" {...register('quantity', { required: "Quantity is required." })}
        />
         {errors.quantity && errors.quantity.message && <div className="text-red-500">{errors.quantity.message}</div>}
        <label className="text-gray-600 font-bold block mt-1">
         Product Description
        </label>
        <textarea
          className="border-solid border-gray-300 border py-5 px-4 w-full rounded text-gray-700"
          placeholder="Write Description for the Product"
          // name="description"
          rows={5}
          cols={5}
          // ref={register({
          //   required: "Please enter a job description",
          // })}
          name="description" {...register('description', { required: "description is required." })}
        />
         {errors.description && errors.description.message && <div className="text-red-500">{errors.description.message}</div>}
        
        <button
          className="mt-4 w-full bg-[#8d4199] font-serif hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Save the Product
        </button>
      </form>
      </div>
    </div>
    </React.Fragment>
  );
};

export default RecipesAdmin;