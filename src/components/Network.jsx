import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SingleFriend from "./SingleFriend";

export default function Network({currentAccount}) {
  const [friends, setFriends] = useState(null);
  const apiL = `${process.env.REACT_APP_LOCAL}/profile/${currentAccount}`;

  const fetchData = async () => {
    try {
      const response = await fetch(apiL);
      const data = await response.json();
      console.log(data.friends);
      setFriends(data);
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
        <Col md={4}>
          <SingleFriend />
        </Col>
      </Row>
    </div>
  );
}
