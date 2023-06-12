import React from "react";
import { useForm, useFieldArray ,Controller} from "react-hook-form";

const  ArrayField =() =>{
  const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    // defaultValues: {}; you can populate the fields by this attribute 
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "test"
  });
  
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            
            <input class="outline-none py-2 pr-4 block w-full" {...register(`test.${index}.firstName`)} />
            <input class="outline-none py-2 pr-4 block w-full" {...register(`test.${index}.lastName`)} />
            <input class="outline-none py-2 pr-4 block w-full" {...register(`test.${index}.email`)} />
            <input class="outline-none py-2 pr-4 block w-full" {...register(`test.${index}.`)} />
            <Controller
              render={({ field }) => <input {...field} />}
              name={`test.${index}.firstName`}

              control={control}
            />
            <button type="button" onClick={() => remove(index)}>Delete</button>
          </li>
        ))}
      </ul>
      <button
        type="button"
        onClick={() => append()}
      >
        Add
      </button>
      <input type="submit" />
    </form>
  );
}
export default ArrayField
