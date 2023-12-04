import React from 'react'
import "../cssfiles/ApointmentPage.css"
import { useState } from 'react';



const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: 'male',
    symptoms: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add logic to handle form submission (e.g., send data to server)
    console.log('Form submitted:', formData);
  };

  return (
    // <form action="" className='container-appointment'>
    //   <h1>Appointment Form </h1>
    //   <label htmlFor="" >
    //     Name:
    //     <input type="text" placeholder='Plz Enter Name' />
    //   </label>
    //   <label htmlFor="" >
    //     Phone No:
    //     <input type="text" placeholder='Plz Enter Phone Number' />
    //   </label>
    // </form>
    <div className="medical-form-container">
    <h2 className='h2heading'>Medical Appointment Form</h2>
    <form className="medical-form" onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </label>
      <label>
        Age:
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
        />
        
      </label>
      <label>
        Gender:
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
          <option value="other">Other</option>
        </select>
      </label>
      <label>
        Symptoms:
        <textarea
          name="symptoms"
          value={formData.symptoms}
          onChange={handleChange}
          required
        ></textarea>
      </label>
      <button className='btnsubmit1' type="submit">Submit</button>
    </form>
  </div>
  )
}

export default Appointment
