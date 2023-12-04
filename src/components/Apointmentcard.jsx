import React from 'react'
import "../cssfiles/Apointmentcard.css"
import Card from 'react-bootstrap/Card';

const Apointmentcard = () => {
  return (
    <div className='cardsmain'>
      {/* ----start---- */}
        <div className="card1">    
    <Card >
      <Card.Body className='card11'>
      <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQz6WLJr9-hW1IzYFPY9nR0FH1ov3o9CCdF85U51X2XQ4jigO3faAIGf9TIurA4VUscQ0&usqp=CAU" alt='Pics' />
        <Card.Subtitle className="mb-2 text-muted my-2">Find a Doctor</Card.Subtitle>
        <Card.Text>
         Making Live Safe<br/>
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="card2">    
    <Card className='card11'>
      <Card.Body className='card11'>
      <Card.Img variant="top" src="https://purepng.com/public/uploads/large/purepng.com-doctordoctorsdoctors-and-nursesclinicianmedical-practitionernotepadfemale-14215268571744ntgi.png" alt='Pics' />
        <Card.Subtitle className="mb-2 text-muted my-2">Online Report</Card.Subtitle>
        <Card.Text>
         Offering Online Reports Of Pathalogy,Cardiology,Radiology
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
    <div className="card3">    
    <Card className='card11'>
      <Card.Body className='card11'>
      <Card.Img variant="top" src="https://pngimg.com/d/doctor_PNG15984.png" alt='Pics' />
        <Card.Subtitle className="mb-2 text-muted my-2">Center of Excellence</Card.Subtitle>
        <Card.Text>
         We offer wide range of medical,Intervational and diagnostic services. 
        </Card.Text>
      </Card.Body>
    </Card>
    </div>
      {/* ----end----- */}
    </div>
  )
}

export default Apointmentcard
