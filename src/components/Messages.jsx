import userEvent from "@testing-library/user-event";
import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SingleMessage from "./SingleMessage";
import MessagePage from "./MessagePage";

export default function Messages({currentAccount}) {
  const [friends, setFriends] = useState(null);

  const [hide, setHide] = useState(false);

  const [name, setName] = useState(" ")

  const [mId, setMId] = useState(" ")



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
  }, [hide]);

  return (
    <div className="container padding-sec">
      <Row className="m-auto">{hide === false ? <>
        {friends && friends.filter(user => user._id !== currentAccount).map( user =>
        <Col md={4} key={user._id}>
          <SingleMessage name={user.name} surname={user.surname} _id={user._id} image={user.image} title={user.title} currentAccount={currentAccount} setHide={setHide} hide={hide} setName={setName} setMId={setMId}/>
        </Col>)}</> : <MessagePage name={name} _id={mId} currentAccount={currentAccount}/>}
      </Row>
    </div>
  );
}
