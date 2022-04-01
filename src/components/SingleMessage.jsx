import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainSection from "./MainSection";
import React from "react";
import { useState, useEffect } from "react";



export default function SingleMessage({image, name, surname, title, _id, currentAccount,manage, setHide, hide, setName, setMId}) {

  const [friends, setFriends] = useState(null);
  

  
  const apiL = `${process.env.REACT_APP_LOCAL}/profile/${currentAccount}`;

  const fetchData = async () => {
    try {
       
      const response = await fetch(apiL);
      const data = await response.json();
      setFriends(data.friends);
      
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
  return (
    <div className="d-flex my-2 friends">
      <img className="side-profile-img" src={image} alt={""} />
      <div className="d-flex flex-column">
        <div className="d-flex">
        <Link to={"/profile/" + _id} element={<MainSection />}>
          <div className="font-weight-bold mr-2 side-name text-black prime text-one">
            {name + " " + surname}
          </div>
          </Link>
        </div>
        <div className="description-text my-1 pr-3 font-12 text-one">
          {title}
        </div>
        <div>
        <Button
       className="mt-1 generic-btn side-btn font-weight-bold font-12 "
       variant="outline-primary"
       onClick={()=> {setHide(!hide); setName(name + " " + surname); setMId(_id)}}
     >
       Message <i class="bi bi-send-fill"></i>
     </Button>
      </div>
    </div>
    </div> 
    
  )
  }