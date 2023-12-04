import React from 'react'
import Piccoursel from "../components/Piccoursel"
import Apointmentcard from "../components/Apointmentcard"
import OurServices from "../components/OurServices"
import "../cssfiles/Home.css"

const Home = () => {
  return (
    
     <div className='Mainbody '>
        <Piccoursel/>
        <Apointmentcard/>
        <OurServices/>
     </div>
   
  )
}

export default Home
