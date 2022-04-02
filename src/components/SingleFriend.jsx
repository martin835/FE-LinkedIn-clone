import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainSection from "./MainSection";
import React from "react";
import { useState, useEffect } from "react";



export default function SingleFriend({image, name, surname, title, _id, currentAccount,manage}) {

  const [friends, setFriends] = useState(null);
  const [dots, setDots] = useState(false);

  
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
  
  return (<>
   {friends && friends.some(friend => (_id === friend.requester._id || _id === friend.recipient._id) )?
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
        {friends && (friends.some(friend => _id === friend.requester._id && friend.status === "Pending") ?
        <div>
        <Button
        className={friends.some(friend => (_id === friend.requester._id || _id === friend.recipient._id) && friend.status === "Friends") ? "d-none": "mt-1 generic-btn side-btn font-weight-bold font-12"}
        variant="outline-success"
        onClick={()=>{manage(_id, "accept", currentAccount, "PUT",fetchData)}}
      > Accept
        
      </Button> <Button
        className={friends.some(friend => (_id === friend.requester._id || _id === friend.recipient._id) && friend.status === "Friends") ? "d-none": "mt-1 generic-btn side-btn font-weight-bold font-12"}
        variant="outline-danger"
        onClick={()=>{manage(_id, "refuse", currentAccount, "DELETE", fetchData)}}
      >
        Refuse
      </Button> </div>:  <Button
          className={friends.some(friend => (_id === friend.requester._id || _id === friend.recipient._id) && friend.status === "Friends") ? "d-none": "mt-1 generic-btn side-btn font-weight-bold font-12"}
          variant="outline-secondary"
        >
          
          Pending
        </Button> ) }
        {friends && (friends.some(friend => (_id === friend.requester._id || _id === friend.recipient._id) && friend.status === "Friends") ?
       <Button
       className="mt-1 generic-btn side-btn font-weight-bold font-12 "
       variant="outline-primary"
     >
       Message <i class="bi bi-send-fill"></i>
     </Button>: <></> )}
      </div>
      <div onClick={()=>setDots(!dots)}><i
            className="bi bi-three-dots d-block pointer"
          ></i><i className={dots === true ? "bi bi-person-x btn-outline-danger": "d-none"} onClick={()=>{manage(_id, "refuse", currentAccount, "DELETE", fetchData)}}></i></div>
    </div>: <div className="d-flex my-2 friends">
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
        </div> <Button
       className="mt-1 generic-btn side-btn font-weight-bold font-12 "
       variant="outline-info"
       onClick={()=>{manage(currentAccount, "request", _id, "POST", fetchData)}}
     >
       Connect
     </Button> </div> </div> }</>
  );
}
