import React from "react";
import { useState, useEffect } from "react";
import { Row, Col } from "react-bootstrap";
import SingleFriend from "./SingleFriend";

export default function Network() {
  const [friends, setFriends] = useState(null);
  const apiL = `${process.env.REACT_APP_LOCAL}/profile/6241b5955f0f9cae1d24811a`;

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
        <Col>
          <SingleFriend />
        </Col>
      </Row>
    </div>
  );
}
