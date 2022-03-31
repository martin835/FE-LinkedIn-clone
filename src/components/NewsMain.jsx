import { Row, Col } from "react-bootstrap";
import HomeSidebarLeft from "./HomeSidebarLeft";
import PostPost from "./PostPost";
import GetAPost from "./GetAPost";
import LinkedNews from "./LinkedNews";
import HomeFooter from "./HomeFooter";
import { useState, useEffect } from "react";

const NewsMain = ({ changeImg, currentAccount }) => {
  const [user, setUser] = useState({});

  const [fe, setFe] = useState(false);

  const changeFe = (value) => {
    setFe(value);
  };

  const apiL = `${process.env.REACT_APP_LOCAL}/profile/${currentAccount}`;

  const fetchData = async () => {
    try {
      const response = await fetch(apiL);
      const data = await response.json();
      changeImg(data.image);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!user]);

  return (
    <div className="container padding-sec">
      <Row className="m-auto">
        <Col md={2}>
          <HomeSidebarLeft user={user} currentAccount={currentAccount} />
        </Col>
        <Col md={6}>
          <PostPost
            image={user.image}
            name={user.name}
            surname={user.surname}
            refe={changeFe}
            currentAccount={currentAccount}
          />
          <GetAPost refe={fe} currentAccount={currentAccount} />
        </Col>
        <Col md={4}>
          <LinkedNews title={"LinkedIn News"} />
          <HomeFooter />
        </Col>
      </Row>
    </div>
  );
};

export default NewsMain;
