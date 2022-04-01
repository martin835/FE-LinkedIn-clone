import userEvent from "@testing-library/user-event";
import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SingleFriend from "./SingleFriend";

export default function Network({currentAccount}) {
  const [friends, setFriends] = useState(null);



  const apiL = `${process.env.REACT_APP_LOCAL}/profile`;

  const apiFriend = (id, type, secondId) => `${process.env.REACT_APP_LOCAL}/friend/${id}/${type}/${secondId}`;



  const fetchData = async () => {
    try {
      const response = await fetch(apiL);
      const data = await response.json();
      setFriends(data);
    } catch (error) {
      console.log(error);
    }
  };

  const manageFriendship = async (id, type, secondId, method,updateSingleCard) => {
    try {
      const response = await fetch(apiFriend(id, type, secondId),{method: method} );
      const data = await response.json();
      updateSingleCard && updateSingleCard()
      fetchData()
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container padding-sec">
      <Row className="m-auto">
        {friends && friends.filter(user => user._id !== currentAccount).map( user =>
        <Col md={4} key={user._id}>
          <SingleFriend name={user.name} surname={user.surname} _id={user._id} image={user.image} title={user.title} currentAccount={currentAccount} manage={manageFriendship}/>
        </Col>)}
      </Row>
    </div>
  );
}
