import React from "react";
import "../cssfiles/OurServices.css";
import Picture from "../pictures/Heartbeats.svg";
import Card from "react-bootstrap/Card";


const OurServices = () => {

  const myFunction =()=> {
    var dots = document.getElementById("dots");
    var moreText = document.getElementById("more");
    var btnText = document.getElementById("myBtn");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  const myFunction1 =()=> {
    var dots = document.getElementById("dots1");
    var moreText = document.getElementById("more1");
    var btnText = document.getElementById("myBtn1");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  const myFunction2 =()=> {
    var dots = document.getElementById("dots2");
    var moreText = document.getElementById("more2");
    var btnText = document.getElementById("myBtn2");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  const myFunction3 =()=> {
    var dots = document.getElementById("dots3");
    var moreText = document.getElementById("more3");
    var btnText = document.getElementById("myBtn3");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  const myFunction4 =()=> {
    var dots = document.getElementById("dots4");
    var moreText = document.getElementById("more4");
    var btnText = document.getElementById("myBtn4");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  const myFunction5 =()=> {
    var dots = document.getElementById("dots5");
    var moreText = document.getElementById("more5");
    var btnText = document.getElementById("myBtn5");
  
    if (dots.style.display === "none") {
      dots.style.display = "inline";
      btnText.innerHTML = "Read more";
      moreText.style.display = "none";
    } else {
      dots.style.display = "none";
      btnText.innerHTML = "Read less";
      moreText.style.display = "inline";
    }
  }
  return (
    <div className="MainServieds">
      <u>
        <p className="headingp">Our Services</p>
      </u>
      <h2 className="headingh2">
        We offer a wide range of medical, Interventional and diagnostic
        services.
      </h2>
      <div className="Heartbeat">
        <img src={Picture} alt="Heartbeat" />
      </div>
      <div className="Services container">
        <div className="row">
          <div className=" col-4  ServiceCardlist ServiceCardlist1">
            
            <Card style={{ width: "18rem" }} className="ServiceCardlist ServiceCardlist11">
              <Card.Img variant="top" className="imageadjust flex" src="https://img.freepik.com/free-vector/human-internal-organ-with-heart_1308-108889.jpg?w=740&t=st=1684830318~exp=1684830918~hmac=dc91451e703fe1953645e222a060c5a4168b4861a31f27a1380ec77f62ebbc9f" />
              <Card.Body>
                <Card.Title>Cardiology</Card.Title>
                <Card.Text>
                Pakistan has one the highest incidence of heart diseases (Cardiovascular Diseases - CVDs) in the world. Deaths due to cardiovascular and <span id="dots5">...</span><span id="more5"> heart diseases in Pakistan have reached about 200,000 per year. Men and women are at equal risk. Research shows that burden of Cardiovascular Diseases (CVDs) will increase in the future. Cardiology patients now need access to quality healthcare services more than ever.</span>
                <br/>
                <button onClick={myFunction5} id="myBtn5">Read more</button>

                </Card.Text>
              </Card.Body>
            </Card>
         
          </div>
          <div className=" col-4  ServiceCardlist2">
           
            <Card style={{ width: "18rem"  }} className="ServiceCardlist ServiceCardlist11">
              <Card.Img variant="top" className="imageadjust" src="https://media.gettyimages.com/id/532053524/photo/team-of-surgeons-operating-on-patient-in-hospital.jpg?s=612x612&w=0&k=20&c=u6VB7VB7uTFWNimr33BPr9kT6honnqQR7ZtB_l_ngEw=" />
              <Card.Body>
                <Card.Title>Cardiac Surgery</Card.Title>
                <Card.Text>
                Cardiac Surgery Department provides general and specialized consultancies for all types of heart problems. Cardiac Surgery team constituting of cardiac surgeons <span id="dots4">...</span><span id="more4">, anesthetists, perfusionists and OT technicians offer comprehensive surgical treatment for all adult & pediatric cardiology and cardiac diseases.</span>
                <br/>
                <button onClick={myFunction4} id="myBtn4">Read more</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className=" col-4  ServiceCardlist3">
           
            <Card style={{ width: "18rem"  } } className="ServiceCardlist ServiceCardlist11">
              <Card.Img variant="top" className="imageadjust" src="https://media.gettyimages.com/id/724241645/photo/pneumology-eldery-person.jpg?s=612x612&w=0&k=20&c=yp2PDWDaE82MMb_-DB2vajtnKDy-D-pWY_1NXIOoWxo=" />
              <Card.Body>
                <Card.Title>Pulmonology</Card.Title>
                <Card.Text>
                Pulmonology department serves to manage patients suffering from various disorders of lungs like Asthma, COPD, Tuberculosis (TB), Pneumonia <span id="dots3">...</span><span id="more3">, lung cancers, interstitial lung disease etc. Following investigations are performed for the diagnosis.</span>
                <br/>
                <button onClick={myFunction3} id="myBtn3">Read more</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
        <div className="row " style={{ marginTop: "30px" }}>
          <div className=" col-4  ServiceCardlist1 height: 40rem;">
           
            <Card style={{ width: "18rem" }} className="ServiceCardlist ServiceCardlist11">
              <Card.Img variant="top" className="imageadjust" src="https://media.gettyimages.com/id/665174916/photo/senior-couple-discussing-x-ray-with-doctor.jpg?s=612x612&w=0&k=20&c=APwXhPun4wCIGzcrrumIN01bbaUhwUb1tZWoAE4y6iU=" />
              <Card.Body>
                <Card.Title>Spinal Surgery</Card.Title>
                <Card.Text>
                Human spine is a complex structure, made up of 33 individual bones known as “Vertebra”. These are supported and connected together by ligaments and muscles,<span id="dots2">...</span><span id="more2"> giving them the stability and flexibility it needs to function and move. It also provides a protective shield to the spinal cord - a highway of nerves that connect s body and brain.</span><br/>
                <button onClick={myFunction2} id="myBtn2">Read more</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className=" col-4  ServiceCardlist2 height: 40rem;">
           
            <Card style={{ width: "18rem" }} className="ServiceCardlist ServiceCardlist11">
              <Card.Img variant="top" className="imageadjust" src="https://media.gettyimages.com/id/1271564190/photo/senior-woman-talks-with-doctor-about-foot-x-ray.jpg?s=612x612&w=0&k=20&c=KSWYXOg2hbuq5mA7mNzw75CpkqF9906GKnH0XVrnqk8=" />
              <Card.Body>
                <Card.Title>Orthopedics</Card.Title>
                <Card.Text>
                The Department of Orthopedics at KIH is headed by eminent orthopedic surgeon who has expertise in treating orthopedic problems involving the bones <span id="dots">...</span><span id="more">, joints, tendons, ligaments and the nerves. We have expertise for injuries in limbs and joints. Total hip & knee replacement are routine procedures carried out here. Patients are provided support on specialized orthopedic beds and post operative rehabilitation.</span>
                <button onClick={myFunction} id="myBtn">Read more</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
          <div className=" col-4  ServiceCardlist3 height: 40rem;">
           
            <Card style={{ width: "18rem" }} className="ServiceCardlist ServiceCardlist11">
              <Card.Img variant="top" className="imageadjust" src="https://media.gettyimages.com/id/171022278/photo/health-secretary-jeremy-hunt-is-given-a-demonstration-of-a-laparoscopy-system-by-consultant.jpg?s=612x612&w=0&k=20&c=oi2RFu5KTlv9XeRmelhKDCE7Kg3avJs7ltxle-6Z1nQ=" />
              <Card.Body>
                <Card.Title>General and Laparoscopic Surgery</Card.Title>
                <Card.Text>
                The surgical team and anesthetists perform major surgical procedures like laparotomies and thoracotamies. At KIH we have introduced new and most modern of surgical techniques.<span id="dots1">...</span><span id="more1"> Minimally invasive surgery, also known as laparoscopic or keyhole surgery to patients has recently been developed in the field of general surgery with the advancement of technology.</span>
                <br/>
                <button onClick={myFunction1} id="myBtn1">Read more</button>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurServices;
