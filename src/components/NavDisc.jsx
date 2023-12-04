import React from 'react'
import { BsHospital,BsTelephoneInbound } from 'react-icons/bs';
import "../cssfiles/NavDisc.css"


const NavDisc = () => {
  return (
    <div className='NavdiskMAin'>
        <div className="M1 my-2">
           <a href="" className='text-decoration-none'><p><BsHospital/> &nbsp; Kulsum plaza, Blue Area ISlamabad</p></a>
        </div>
        <div className="M2  my-2">
        <a href="" className='text-decoration-none'><p><BsTelephoneInbound/> &nbsp; 051-3726783</p></a>
        </div>    
    </div>
  )
}

export default NavDisc
