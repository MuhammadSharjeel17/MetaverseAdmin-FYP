import React, { useEffect } from "react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";

const UpdateFile = () => {
  const { id } = useParams();
  const [datas, setData] = useState();
  const navigate = useNavigate();
  const { control, register, handleSubmit, setValue } = useForm();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(`http://localhost:8080/api/product/getsingleproduct/${id}`);
        if (response.status === 200) {
          const actualData = response.data.data;
          setData(actualData);
          // Set initial values for the form fields using setValue
          setValue('title', actualData.title);
          setValue('image', actualData.image);
          setValue('priceinDollars', actualData.priceinDollars);
          setValue('priceinPkr', actualData.priceinPkr);
          setValue('colors', actualData.colors);
          setValue('quantity', actualData.quantity);
          setValue('description', actualData.description);
        }
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchData();
  }, [id, setValue]);

  const handleRegistration = async (values) => {
    try {
      const data = await axios.put(`http://localhost:8080/api/product/updateproduct/${id}`, values);
      console.log(data);
      if (data.data.status === true) {
        alert('Updated Successfully');
        navigate('/ViewFiles');
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <React.Fragment>
      <h1 className="text-center text-[#8d4199] font-serif  flex justify-center text-7xl font-semibold mt-10">3D PRODUCT</h1>
      <form
        className="w-[70%] bg-white m-auto rounded shadow-xl py-10 spacing-y-4 mt-9 px-12 border "
        onSubmit={handleSubmit(handleRegistration)}
      >
        <label className="text-gray-600  font-bold">Title</label>
        <input
          className="border-solid border-gray-300 border outline-none py-2 px-4 w-full rounded text-gray-700"
          placeholder="Enter Product Title..."
          defaultValue={datas ? datas.title : ""}
          name="title" {...register('title')}
        />

        <label className="text-gray-600  font-bold">3D Image Url</label>
        <input
          className="border-solid border-gray-300 border outline-none py-2 px-4 w-full rounded text-gray-700"
          placeholder="Enter 3D Image Url"
          defaultValue={datas ? datas.image : ""}
          name="image" {...register('image')}
        />

        <label className="text-gray-600 font-bold  text-3xl block">Price in Dollars</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text"
          placeholder="#"
          defaultValue={datas ? datas.priceinDollars : ""}
          name="priceinDollars" {...register('priceinDollars')}
        />

        <label className="text-gray-600 font-bold  text-3xl block">Price in PKR</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text"
          placeholder="#"
          defaultValue={datas ? datas.priceinPkr : ""}
          name="priceinPkr" {...register('priceinPkr')}
        />

        <label className="text-gray-600 font-bold  text-3xl block">Colors</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text"
          placeholder="Enter Colors"
          defaultValue={datas ? datas.colors : ""}
          name="colors" {...register('colors')}
        />

        <label className="text-gray-600 font-bold  text-3xl block">Quantity</label>
        <input
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          type="text"
          placeholder="Enter Quantity"
          defaultValue={datas ? datas.quantity : ""}
          name="quantity" {...register('quantity')}
        />

        <label className="text-gray-600 font-bold  text-3xl block">Description</label>
        <textarea
          className="border-solid border-gray-300 border py-2 px-4 w-full rounded text-gray-700"
          placeholder="Enter Description"
          defaultValue={datas ? datas.description : ""}
          name="description" {...register('description')}
        />

        <div className="flex justify-end">
          <button
            className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Update
          </button>
        </div>
      </form>
    </React.Fragment>
  );
};

export default UpdateFile;
