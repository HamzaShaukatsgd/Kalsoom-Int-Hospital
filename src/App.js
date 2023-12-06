import logo from './logo.svg';
import './App.css';
// import Headers from './components/Headers';
import Home from "./Pages/Home"
import Login from './Pages/Login';
import Signup from './Pages/Signup'
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import Headers from  "./components/Headers"
import Footer1 from "./components/Footer1"
import {  Routes, Route } from "react-router-dom";
import Contact from './Pages/Contact';
import Appointment from './Pages/Appointment';
import About from './Pages/About';

function App() {
  return (
    <div className='Main1 container-fluid '>
    <div className='MAinHeaders container'>
        <Headers/>
     </div>
     <div className='Mainbody '>
     <Routes>
        <Route exact path='*' element={<Home />} />
        <Route exact path='/login' element={<Login />} />
        <Route exact path='/signup' element={<Signup />} />
        <Route exact path='/contact' element={<Contact />} />
        <Route exact path='/Appointment' element={<Appointment/>}/>
        <Route exact path='/About' element={<About/>}/>
       </Routes>
     </div>
     <div className='Mainfooter'>
        <Footer1/>
     </div>
  </div> 
  
    );
}

export default App;
