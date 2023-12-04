import React from 'react'
import { useState } from 'react';
import {POSTBASEURL} from "../utils/baseurl"
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBCardImage,
    MDBInput,
    MDBIcon,
    MDBCheckbox
  }
  from 'mdb-react-ui-kit';

const Signup = () => {
  const [inputdata,setinputdata] =useState({
    name:"",
    email:"",
    password:"",
    conform_password:""
  });
  const [todoarray,settodoarray] =useState([]);
  let Changehandler=(e)=>{
    setinputdata({...inputdata,
      [e.target.name]: e.target.value
    })
  }

  let {name,email,password,conform_password} =inputdata;

  let ADDtodo=(e)=>{
     settodoarray([...todoarray,{name,email,password,conform_password}])
     console.log("Enter data",inputdata);
     setinputdata({name:"",email :"",password:"",conform_password:""});
     e.preventDefault();
     sendItemToApi();
  }
  
  const sendItemToApi = async () => {
    console.log("Input data",todoarray);
    await fetch(POSTBASEURL, {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
      // body: JSON.stringify(todoarray)
      body: JSON.stringify(inputdata),
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
       //settodoarray([]);
    };

  return (
  
    // <input
    //      type="text"
    //       autoComplete="off"
    //       placeholder='Plz Enter Name.....'
    //       onChange={Changehandler}
    //       name="name"
    //       value={inputdata.name}
    //         />
     <MDBContainer fluid>

<MDBCard className='text-black m-5' style={{borderRadius: '25px'}}>
  <MDBCardBody>
    <MDBRow>
      <MDBCol md='10' lg='6' className='order-2 order-lg-1 d-flex flex-column align-items-center'>

        <p classNAme="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>

        <div className="d-flex flex-row align-items-center mb-4 ">
          <MDBIcon fas icon="user me-3" size='lg'/>
          <MDBInput label='Your Name' id='form1' type='text' className='w-100' onChange={Changehandler} name="name"   value={inputdata.name}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="envelope me-3" size='lg'/>
          <MDBInput label='Your Email' id='form2' type='email' onChange={Changehandler} name="email"   value={inputdata.email}/>
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="lock me-3" size='lg'/>
          <MDBInput label='Password' id='form3' type='password'onChange={Changehandler} name="password"   value={inputdata.password} />
        </div>

        <div className="d-flex flex-row align-items-center mb-4">
          <MDBIcon fas icon="key me-3" size='lg'/>
          <MDBInput label='Repeat your password' id='form4' type='password' onChange={Changehandler} name="conform_password"   value={inputdata.conform_password}/>
        </div>

        {/* <div className='mb-4'>
          <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
        </div> */}

        <MDBBtn className='mb-4' size='lg' onClick={ADDtodo}>Register</MDBBtn>

      </MDBCol>

      <MDBCol md='10' lg='6' className='order-1 order-lg-2 d-flex align-items-center'>
        <MDBCardImage src='https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp' fluid/>
      </MDBCol>

    </MDBRow>
  </MDBCardBody>
</MDBCard>

</MDBContainer>
  
  )
}   

export default Signup
