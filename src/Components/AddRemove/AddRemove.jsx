
import React, { useState } from 'react'
import "./addRemove.scss"

const App = () => {

    const [formValues, setFormValues] = useState([{ name: "", email : ""}])

    let handleChange = (i, e) => {
        let newFormValues = [...formValues];
        newFormValues[i][e.target.name] = e.target.value;
        setFormValues(newFormValues);
      }
    
    let addFormFields = () => {
        setFormValues([...formValues, { name: "", email: "" }])
      }
    
    let removeFormFields = (i) => {
        let newFormValues = [...formValues];
        newFormValues.splice(i, 1);
        setFormValues(newFormValues)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault();
        alert(JSON.stringify(formValues));
    }

    return (
        <form  onSubmit={handleSubmit}>
          {formValues.map((element, index) => (
            <div className="form-inline" key={index}>
              <label class="mx-10"> Paid Amount </label>
              <input type="text" class="w-50" name="name[]" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label class="mx-10"> Customer Bank Account No </label>
              <input type="text" name="email[]" value={element.email || ""} onChange={e => handleChange(index, e)} /> <br />
              <label class="mx-10"> Remaining Installment </label>
              <input type="text" name="name[]" value={element.name || ""} onChange={e => handleChange(index, e)} />
              <label class="mx-10"> Installment Date </label>
              <input type="date" name="email[]" value={element.email || ""} onChange={e => handleChange(index, e)} />
              {
                index ? 
                  <button type="button"  className="button remove" onClick={() => removeFormFields(index)}>Remove</button> 
                : null
              }
            </div>
          ))}
          <div className="button-section">
              <button className="button add" type="button" onClick={() => addFormFields()}>Add</button>
          </div>
      </form>
    )
}

export default App