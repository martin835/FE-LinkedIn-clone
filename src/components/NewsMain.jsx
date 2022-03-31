import { Row, Col } from "react-bootstrap";
import HomeSidebarLeft from "./HomeSidebarLeft";
import PostPost from "./PostPost";
import SinglePost from "./SinglePost";
import LinkedNews from "./LinkedNews";
import HomeFooter from "./HomeFooter";
import { useState, useEffect } from "react";

const NewsMain = ({ changeImg, currentAccount }) => {
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState(undefined);
  const [again, setAgain] = useState(true);

  const apiL2 = `${process.env.REACT_APP_LOCAL}/posts`;

  const change = (value) => {
    setPosts(value);
  };

  const getFetch = async () => {
    try {
      let response = await fetch(apiL2);
      let data = await response.json();
      change(data);
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getFetch();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [again]);

  // const [fe, setFe] = useState(false);

  // const changeFe = (value) => {
  //   setFe(value);
  // };

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
          <HomeSidebarLeft user={user} />
        </Col>
        <Col md={6}>
          <PostPost
            image={user.image}
            name={user.name}
            surname={user.surname}
            again={again}
            setAgain={setAgain}
          />
          <>
            {posts === undefined && (
              <div
                className="spinner-border text-primary"
                style={{ marginLeft: "47%" }}
                role="status"
              >
                <span className="sr-only">Loading...</span>
              </div>
            )}
            {posts &&
              posts
                .map((post) => (
                  <SinglePost
                    fetch={getFetch}
                    username={post.profile.name + " " + post.profile.surname}
                    image={post.image}
                    text={post.text}
                    key={post._id}
                    unique={post._id}
                    params={post.profile._id}
                    userimg={post.profile.image}
                    job={post.profile.title}
                    date={post.createdAt}
                    currentAccount={currentAccount}
                    post={post}
                  />
                ))
                .reverse()}
          </>
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
