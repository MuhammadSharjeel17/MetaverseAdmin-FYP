import React from "react";
import { useState , useEffect } from "react";
import { useForm, useFieldArray ,Controller} from "react-hook-form";
import axios from 'axios';
import { useNavigate,useParams } from "react-router-dom";
const UpdateFile = () => {
  const {id} = useParams();
  // const [itWorks, setItWorks] = useState(false);
    const [datas , setData]=useState();
  //   const [RegNo , setRegNo]=useState();
  //   const [securityCode , setsecurityCode]=useState();
  //   const [plotNo , setplotNo]=useState();
  //   const [BlockNo , setBlockNo]=useState();
  //   const [OwnerName , setOwnerName]=useState();
  //   const [OwnerCNIC , setOwnerCNIC]=useState();
  //   const [OwnerEmail , setOwnerEmail]=useState();
  //   const [OwnerPhoneNumber , setOwnerPhoneNumber]=useState();
  //   const [OwnerAddress , setOwnerAddress]=useState();
  //   const [TotalPlotPrice , setTotalPlotPrice]=useState();
  //   const [PaidAmount , setPaidAmount]=useState();
  //   const [status , setstatus]=useState();
  //   const [plotSize , setplotSize]=useState();
  //   const [completedInstallments , setcompletedInstallments]=useState();
  //   useEffect(() => {
  //     // const fun = () => {
  //         setRegNo(datas ?datas.data.regNo : "" );
  //         setBlockNo(datas ?datas.data.blockName : "");
  //         setsecurityCode(datas ?datas.data.securityCode : "");
  //         setplotNo(datas ?datas.data.plotNo : "");
  //         setplotSize(datas ?datas.data.plotSize : "");
  //         setstatus(datas ? datas.data.status : "");
  //         setOwnerCNIC(datas ?datas.data.ownerCNIC : "");
  //         setOwnerEmail(datas ?datas.data.ownerEmail : "");
  //         setOwnerPhoneNumber(datas ?datas.data.ownerPhoneNumber : "");
  //         setOwnerAddress(datas ?datas.data.ownerAddress : "");
  //         setTotalPlotPrice(datas ?datas.data.totalAmount : "");
  //         setPaidAmount(datas ?datas.data.totalPaidAmount : "");
  //         setcompletedInstallments(datas ?datas.data.completedInstallments : "");
  //         setOwnerName(datas ?datas.data.ownerName : "")
  // }, [datas ])
  const [file , setFile]=useState();
  // const [itWorks, setItWorks] = useState(false);
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
  
            // const fetchsData =async () => {
            //   return await axios.get("http://localhost:3000/api/recipes/getrecipes")
            //         .then((response) => console.log(response.data));}
            //         useEffect(() => {
            //           fetchsData();
            //           },[]);
  
  
  useEffect( () => {
    async function data(){
  //  await axios.get("http://localhost:5000/api/v1/plot/getplot")
  await fetch(`http://localhost:8080/api/product//getsingleproduct/${id}`)
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
        setData(actualData.data);
        // handleStatus(actualData.data.status)
        console.log("Product Details",actualData)
        }
      })
      .catch((err) => {
        console.log(err.message);
      });
      // setData(actualData)
    }
    data();
  }, []); 
// console.log(datas.data);
  // const onSubmit = async (data) => {
  //   // const fields = { fields: data };
  // };
  
  const { control, register, handleSubmit , reset } = useForm();
  
  // const createRecipe =useSelector(store=>store.CreateRecipe);
  const handleRegistration = async (values)=>{
    try{
     
      // if (file) {
          // console.log(file)
          // const datas = new FormData();
          // datas.append('file', file);
          // console.log(file);
          // console.log(values)
          // const send={datas,values};
          try {
              const { data } = await axios.put(  `http://localhost:8080/api/product/updateproduct/${id}`,

                  // file === undefined ? null : datas,
                  // {
                  //     params: {
                  //         values,
                  //     },
                  // },
                  // {
                  //     headers: {
                  //         mode: 'no-cors',
                  //         // 'Authorization': `${admin}`,
                  //         accept: "application/json",
                  //         "Content-Type": "multipart/form-data",

                  //     },
                  // }

              )
             console.log(data)

              if (data.status === true) {

                  alert('Updated Successfully')
                  reset();
                  navigate('/ViewFiles');
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
          defaultValue={datas  ? datas.title : ""}
          // autoFocus
          // ref={register({
          //   required: "Please enter a job title",
          // })}
          name="title" {...register('title')}
        />
        <label className="text-gray-600  font-bold">3D Image Url</label>
        <input
          className="border-solid border-gray-300 border outline-none py-2 px-4 w-full rounded text-gray-700"
          // name="title"
          placeholder="Enter 3D Image Url"
          defaultValue={datas  ? datas.image : ""}
          // autoFocus
          // ref={register({
          //   required: "Please enter a job title",
          // })}
          name="image" {...register('image')}
        />
       
        
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
          defaultValue={datas  ? datas.priceinDollars : ""}
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="priceinDollars" {...register('priceinDollars')}
        />
         <label className="text-gray-600 font-bold  text-3x1 block ">Price in PKR</label>
        
         
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="location"d
          type="text"
          placeholder="#"
          defaultValue={datas  ? datas.priceinPkr : ""}
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="priceinPkr" {...register('priceinPkr')}
        />
         <label className="text-gray-600 font-bold  text-3x1 block ">Colors</label>
        
         
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="location"d
          type="text"
          placeholder="Enter Available colors..."
          defaultValue={datas  ? datas.colors : ""}
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="colors" {...register('colors')}
        />
         <label className="text-gray-600 font-bold  text-3x1 block ">Total Quantity</label>
        
         
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          // name="location"d
          type="text"
          placeholder="Enter Quantity"
          defaultValue={datas  ? datas.quantity : ""}
          // ref={register({
          //   required: "Please enter a location",
          // })}
          name="quantity" {...register('quantity')}
        />
        <label className="text-gray-600 font-bold block mt-1">
         Product Description
        </label>
        <textarea
          className="border-solid border-gray-300 border py-5 px-4 w-full rounded text-gray-700"
          placeholder="Write Description for the Product"
          defaultValue={datas  ? datas.description: ""}
          // name="description"
          rows={5}
          cols={5}

          // ref={register({
          //   required: "Please enter a job description",
          // })}
          name="description" {...register('description')}
        />
        
        <button
          className="mt-4 w-full bg-[#8d4199] font-serif hover:bg-green-600 text-green-100 border py-3 px-6 font-semibold text-md rounded"
          type="submit"
        >
          Save the Product
        </button>
      </form>
    </React.Fragment>
  
  );
};

export default UpdateFile;                                       