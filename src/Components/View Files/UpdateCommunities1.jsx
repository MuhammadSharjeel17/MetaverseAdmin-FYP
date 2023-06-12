import React from 'react'
// import './Communities.scss';
import { Link, useNavigate } from 'react-router-dom';
// import '../index.css';
import * as Yup from "yup";
import { Formik, Form, ErrorMessage } from "formik";
import { useState } from 'react';
import axios from "axios";
const UpdateCommunities = () => {
    const [file , setFile]=useState();
    const navigate = useNavigate();
    const items = localStorage.getItem("userData");
    console.log("items",items);
    const initialValues = {
        
        communityName: "",
        description: "",
       website: "",
        instagram: "",
        youtube: "",
        category  :"",
        privacy : ""
      };
      const validation = Yup.object({
        communityName: Yup.string().required("Title Name is Required,it cannot be edited later"),
        description: Yup.string().required("Description is Required"),
    //     website: Yup.string().required("Website URL is Required"),
    //    instagram: Yup.string().required("Instagram URL is Required"),
    //     youtube: Yup.string().required("Youtube URL cannot be Blank"),
      });
    //    let submission;   
  return (
   <>
   <div className="w-fit font-mono  bg-white flex justify-center font-serif m-auto rounded shadow-xl py-10 mt-10 px-12 border" >
   <section class='community-section '>

<div class='container  justify-center'>
    <div class='box-card'>
        <h3 class=' text-[#f05024] text-center font-bold text-5xl '>New community</h3>
        <Formik
            initialValues={initialValues}
            validationSchema={validation}
            
            // onSubmit = {submission()} 
             onSubmit={   async (values, actions) => {
              console.log(values, "Values");
              try {
                if (file) {
                    console.log(file)
                    const datas = new FormData();
                    datas.append('file', file);
                    console.log(file);
                    console.log(values)
                    // const send={datas,values};
                    try {
                        const { data } = await axios.post("http://localhost:3000/api/communities/setcommunities",
          
                            file === undefined ? null : datas,
                            {
                                params: {
                                    values,items
                                },
                            },
                            {
                                headers: {
                                    mode: 'no-cors',
                                    // 'Authorization': `${admin}`,
                                    accept: "application/json",
                                    "Content-Type": "multipart/form-data",
          
                                },
                            }
          
                        )
                       console.log(data)
          
                        if (data) {
          
                            alert('Communities Added Successfully')
                            actions.resetForm();
                            navigate('/communities');
                        }
          
                    } catch (err) {
                        console.log(err)
                    }
                } else {
                    alert('file is required')
                }
                
            }catch(error){
               console.log(error);
          
            }
            }}
          >
            {(formik) => (
        <Form class='about-contact-form mt-5'>

            <div class="grid lg:col-1">
                <label for='exampleFormControlTextarea1 ' class="label_name  text  text-sm "><b className="text-sm font-bold  ">Community name</b>(cannot be edited later)</label>
                <input type='text' placeholder=' Community name' className='border outline-none border-3 rounded-sm h-10 text-xl mt-3' name='communityName' value={formik.values.communityName}
                        onChange={formik.handleChange}  />
                        <ErrorMessage
                        component="div"
                        className="text-red-700 border-none border-none text-sm"
                        name="communityName"
                      />
                        
               
            </div>
            <div className="w-full mt-3 flex justify-center items-center">
   {file && <img className='h-[15rem] w-full' src={URL.createObjectURL(file)}
  alt='img' />}
  </div>
            <div class="rounded-lg border-solid border-gray-300 bg-gray-50 w-full">
        <div class="m-4">
            {/* <label class="inline-block mb-2 text-gray-500">Upload
                Image(jpg,png,svg,jpeg)</label> */}
            <div class="flex items-center justify-center w-full">
                <label class="flex flex-col w-full h-32 border-4 border-dashed hover:bg-gray-100 hover:border-gray-300">
                    <div class="flex flex-col cursor-pointer items-center justify-center pt-7">
                        <svg xmlns="http://www.w3.org/2000/svg"
                            class="w-12 h-12 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                            fill="currentColor">
                            <path fill-rule="evenodd"
                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                clip-rule="evenodd" />
                        </svg>
                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                            Select a Cover photo</p>
                    </div>
                    <input type="file"  onChange= {(e)=>setFile(e.target.files[0])}
                      name="image"  class="opacity-0" />
                </label>
            </div>
        </div>
        {/* <div class="flex p-2 space-x-4">
            <button class="px-4 py-2 text-white bg-red-500 rounded shadow-xl">Cannel</button>
            <button class="px-4 py-2 text-white bg-green-500 rounded shadow-xl">Upload</button>
        </div> */}
    </div>

            {/* <div class="grid lg:col-1 add_photo  justify-content-center mt-5"><label class="filelabel  justify-content-center">
                    <i class="fa fa-camera" aria-hidden="true"></i>
                    
                    <input class="FileUpload1" id="FileInput" name="booking_attachment" type="file" />
                    <span class="title">
                        Add Cover Photo
                    </span>
                </label>
            </div> */}
            <div class="mt-5 grid col-1">
                <label for='exampleFormControlTextarea1' class="label_name"><b>Description</b>(optional)</label>
                <textarea placeholder=' Description' class=' border border-3 rounded-sm outline-none textarea  mt-3' name='description' value={formik.values.description}
                        onChange={formik.handleChange}  id='form-message' rows='7' cols='20' data-error='Message field is required' required=''></textarea>
                        <ErrorMessage
                        component="div"
                        className="text-red-700 border-none border-none text-sm"
                        name="description"
                      />
                <div class='help-block with-errors'></div>
            </div>

            <div class="mt-5 grid lg:col-1  ">
                <label for='exampleFormControlTextarea1 ' class=" label_name"><b>Category</b></label>
                <select name="category" onChange={formik.handleChange}   class=' form  border border-3 rounded-sm outline-none h-[2.5rem] border-gray-200  mt-1'>
                    <option name="category" onChange={formik.handleChange} selected> Select Category</option>
                    <option name="category" onChange={formik.handleChange}  value='Baking'>Baking</option>
                    <option name="category" onChange={formik.handleChange} value='Cooking Method'>Cooking Method</option>
                    <option name="category" onChange={formik.handleChange} value='Diet'>Diet</option>
                    <option name="category" onChange={formik.handleChange} value='Family Friendly'>Family Friendly</option>
                    <option name="category" onChange={formik.handleChange} value='Global Flavours'>Global Flavours</option>
                    <option name="category" onChange={formik.handleChange} value='Healthy'>Healthy</option>
                    <option name="category" onChange={formik.handleChange} value='Indulge'>Indulge</option>
                    <option name="category" onChange={formik.handleChange} value='LevelUp'>Level Up</option>
                    <option name="category" onChange={formik.handleChange} value='Quick&Simple'>Quick&Simple</option>
                    <option name="category" onChange={formik.handleChange} value='Seasonal'>Seasonal</option>y
                </select>
            </div> 
            <div class="mt-5">
                <label for='exampleFormControlTextarea1' class="label_name"><b>Privacy</b></label>
                <div class='text-xl '>
                    <input id='radio-1' name='privacy'  onChange={formik.handleChange} value={"Anyone can discover and join"} type='radio' checked/>
                    <label for='radio-1' class='radio-label' value={"Anyone can discover and join"}> Anyone can discover and join</label>
                </div>

                <div class='text-xl '>
                    <input id='radio-2'  name='privacy' value={"Not visible on discovery, people need permission to join"}  onChange={formik.handleChange} type='radio'/>
                    <label for='radio-2' class='radio-label'> Not visible on discovery, people need permission to join</label>
                </div>
            </div>
            <div className="mt-2">
                <label for='exampleFormControlTextarea1' class="label_name"><b>Permissions</b></label>
                <div class='text-xl  '>
                    <input id='radio-3' name='permissions' onChange={formik.handleChange}   value="Anyone can add recipes" type='radio'   />
                    <label for='radio-3' class='text-xl '>Anyone can add recipes</label>
                </div>

                <div class='text-xl '>
                    <input id='radio-4' name='permissions' onChange={formik.handleChange} value="Only admins can add recipes" type='radio'  />
                    <label for='radio-4' class='radio-label'>Only admins can add recipes</label>
                </div>
             </div> 
            <div class="mt-3">
                <label for='exampleFormControlTextarea1' class="label_name "><b class="label_name text-xl">Web & Social </b>(optional)</label>
                <div class="row">
                    <div class="col-md-10">
                        <label className=" text-[#f05024] font-serif  font-bold text-lg"><i class="fa fa-paperclip icon text-green-500 mt-5" aria-hidden="true"></i> Website </label>


                    </div>
                    <div class="col-md-2">
                        <a><i class="fa fa-pencil icon mt-5" aria-hidden="true"></i></a><input type='text' placeholder=' Enter Website URL' class=' text-xl w-[400px] border-gray-200 outline-none border  border-b-7 rounded-sm h-10  mt-3'  name='website' value={formik.values.website}
                        onChange={formik.handleChange}  />
                        <ErrorMessage
                        component="div"
                        className="text-red-700 border-none border-none text-sm"
                        name="website"
                      />


                    </div>


                </div>
                <div class="row">
                    <div class="col-md-10">
                        <label className=" text-[#f05024] font-serif font-bold text-lg"><i class="fa fa-instagram  text-pink-500 icon mt-5" aria-hidden="true"></i> Instagram </label>


                    </div>
                    <div class="col-md-2">
                        <a><i class="fa fa-pencil  icon mt-5" aria-hidden="true"></i></a><input type='text' placeholder=' Enter Instagram URL' class=' w-[400px] text-xl border-gray-200 outline-none border  border-b-7 rounded-sm h-10  mt-3'  name='instagram' value={formik.values.instagram}
                        onChange={formik.handleChange} />
                        <ErrorMessage
                        component="div"
                        className="text-red-700 border-none border-none text-sm"
                        name="instagram"
                      />


                    </div>


                </div>

                <div class="row">
                    <div class="col-md-8">
                        <label className=" text-[#f05024] font-serif font-bold text-lg"><i class="fa fa-youtube-play  text-red-500 mt-5" name="youtube" aria-hidden="true"></i> Youtube </label>


                    </div>
                    <div class="col-md-2">
                        <a><i class="fa fa-pencil icon mt-5" aria-hidden="true"></i></a><input type='text' placeholder=' Enter Youtube URL' class=' text-xl w-[400px] border-gray-200 outline-none border  border-b-7 rounded-sm h-10  mt-3'  name='youtube' data-error='Name field is required' value={formik.values.youtube}
                        onChange={formik.handleChange} required='' />
                        <ErrorMessage
                        component="div"
                        className="text-red-700 border-none border-none text-sm"
                        name="youtube"
                      />


                    </div>

                    
            </div>
            <div class="add  mt-4 space-x-4   flex justify-center  text-white ">
            <button className=" w-[100px] bg-[#8D4199]  rounded-lg font-serif font-bold text-white h-[50px] hover:bg-green-400  shadow-lg "   >Cancel</button>
                
                <div  >
                    <input className=" w-[100px] bg-[#8D4199]  rounded-lg font-serif font-bold text-white h-[50px] hover:bg-green-400  shadow-lg " type="submit" />
                </div>
                </div>
    </div>



  
        </Form>
         )}
         </Formik>
         
</div>
</div>
</section>
</div>
   </>
  )
}

export default UpdateCommunities