import React, { useState } from 'react'
import { MDBListGroup, MDBListGroupItem } from 'mdb-react-ui-kit';
import {GETBASEURL} from "../utils/baseurl"
import { useEffect } from 'react';

const ListSignup = () => {
    
    const [list,setList]=useState([]);

    
  //get full Todo Item List
   const getTodolist = async () => {
    console.log("Function running");
    fetch(GETBASEURL, {
        method: "GET",
        headers: {
          "access-control-allow-origin": "*",
          "Content-type": "application/json; charset=UTF-8",
        },
      })
        .then((response) => response.json())
        .then((data) => setList(data))
        .catch((err) => console.error(err));
      

    // await fetch(GETBASEURL, {
    //   method: "GET",
    //   headers: {
    //     "access-control-allow-origin": "*",
    //     "Content-type": "application/json; charset=UTF-8",
    //   },
    // })
    //   .then((response) => response.json())
    //   .then((data) => setList(data))
    //   .catch((err) => console.error(err));

      //////
    }

  useEffect(() => {
    getTodolist();
  }, []);
    console.log(list);
  return (
    <div>
      <h1 className='text-center'>Lists Of Signup</h1>
    <MDBListGroup light numbered style={{ minWidth: '22rem' }}>
      { list.map((item)=>{
       return(
     <MDBListGroupItem>
        <>
           <p>Name : {item.name}</p>
           <p>Email : {item.email}</p>
           <p>Password : {item.password}</p>
           <p>Conform Password : {item.Conform_Password}</p>
        </>
      </MDBListGroupItem>
      );
      
    })
    }
    </MDBListGroup>
 
    </div>
  )
}

export default ListSignup
