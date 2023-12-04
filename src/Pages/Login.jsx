import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import "../cssfiles/Login.css"
import {LOGINBASEURL} from "../utils/baseurl"

const Login = () => {
  const [getInputlogin,setgetInputlogin] =useState({
    email:"",
    password:"",       
    });
    const [loginarray,setloginarray]=useState([]);
    let changeHAndler=(e)=>{
      setgetInputlogin({...getInputlogin,
        [e.target.name]: e.target.value
      })
    }
  
    let {email,password} =getInputlogin;
    let loginData=(e)=>{
      setloginarray([...loginarray,{email,password}])
      console.log("Enter data",getInputlogin);
      setgetInputlogin({email :"",password:""});
      e.preventDefault();
      sendItemToApi();
   }

   const sendItemToApi = async () => {
    console.log("Input data",loginarray);
    await fetch(LOGINBASEURL, {
      method: "POST",
      headers: {
        "access-control-allow-origin": "*",
        "Content-type": "application/json; charset=UTF-8",
      },
      // body: JSON.stringify(todoarray)
      body: JSON.stringify(getInputlogin),
    })
      .then((response) => response.json())
      .catch((err) => console.error(err));
       //settodoarray([]);
    };



  return (
    <div className='w-50 mx-auto my-5 h-75 logindiv'>
     <h1 className='text-center login-heading'>Login</h1>
    <Form className='form1' >
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" value={getInputlogin.email } name="email"  onChange={changeHAndler}/>
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"value={getInputlogin.password} name="password"  onChange={changeHAndler}/>
      </Form.Group>
      <div class="d-grid gap-2 col-6 mx-auto">
      <Button  className='mx-lg-5 loginbtn my-5' variant="primary" type="submit" onClick={loginData}  >
        Submit
      </Button>
      </div>
    </Form>
    </div>
  )
}

export default Login
