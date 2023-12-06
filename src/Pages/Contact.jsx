import React from "react";
import Picture from "../pictures/Heartbeats.svg";
import Card from "react-bootstrap/Card";
import "../cssfiles/Contact.css";
import { GiWorld } from "react-icons/gi"
import { CiMobile1 } from "react-icons/ci";
import { MdAccessible } from "react-icons/md"
import ListSignup from "../components/ListSignup";

const Contact = () => {

  
  return (
    <>
    <div className="MainServieds">
      <u>
        <p className="headingp">Contact Know</p>
      </u>
      <h2 className="headingh2">Write us a Message !</h2>
      <div className="Heartbeat">
        <img src={Picture} alt="Heartbeat" />
      </div>
      <div className="Services container">
        <div className="row ">
        <div className=" col-4  cardsWidth m-xl-3">
            <Card style={{ width: "18rem", height:"10rem"}}>
              <div className="maincard">
                <div className="maincard1 cardsWidth">
                  {/* <Card.Img
                    variant="top"
                    className="imageadjust"
                    src="https://media.gettyimages.com/id/724241645/photo/pneumology-eldery-person.jpg?s=612x612&w=0&k=20&c=yp2PDWDaE82MMb_-DB2vajtnKDy-D-pWY_1NXIOoWxo="
                  /> */}
                  <GiWorld size={100}/>
                </div>
                <div className="maincard2">
                  <Card.Body>
                    <Card.Title>Address</Card.Title>
                    <Card.Text><address className="fs-0.1">Kulsum Plaza, 2020 Blue Area, Jinnah Avenue, Islamabad, Pakistan</address></Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>

          <div className=" col-4 m-xl-3">
            <Card style={{ width: "18rem", height:"10rem" }}>
              <div className="maincard">
                <div className="maincard1 cardsWidth">
                  {/* <Card.Img
                    variant="top"
                    className="imageadjust"
                    src="https://media.gettyimages.com/id/724241645/photo/pneumology-eldery-person.jpg?s=612x612&w=0&k=20&c=yp2PDWDaE82MMb_-DB2vajtnKDy-D-pWY_1NXIOoWxo="
                  /> */}
                  <CiMobile1 size={700}/>
                </div>
                <div className="maincard2">
                  <Card.Body>
                    <Card.Title>Phone</Card.Title>
                    <Card.Text>(+92) 51-8446666</Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>

          <div className=" col-4  ServiceCardlist3 m-xl-3">
            <Card style={{ width: "18rem", height:"10rem" }}>
              <div className="maincard">
                <div className="maincard1 cardsWidth">
                  {/* <Card.Img
                    variant="top"
                    className="imageadjust"
                    src="https://media.gettyimages.com/id/724241645/photo/pneumology-eldery-person.jpg?s=612x612&w=0&k=20&c=yp2PDWDaE82MMb_-DB2vajtnKDy-D-pWY_1NXIOoWxo="
                  /> */}
                  <MdAccessible size={100}/>
                </div>
                <div className="maincard2">
                  <Card.Body>
                    <Card.Title>Email(s)</Card.Title>
                    <Card.Text>contact@kih.com.pk</Card.Text>
                  </Card.Body>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </div>
    {/* <div className="Listshowsignup container-fluid mx-5 my-5 ">
       <ListSignup/>
    </div> */}
    </>
  );
};

export default Contact;
