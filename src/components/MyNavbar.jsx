import {
  Container,
  Navbar,
  Form,
  Nav,
  FormControl,
  NavDropdown,
} from "react-bootstrap";
import { Link, useLocation } from "react-router-dom";
import NewsMain from "./NewsMain";
import MainSection from "./MainSection";
import { useEffect, useState } from "react";
import Network from "./Network";

const MyNavbar = function ({ image, funcD, currentAccount }) {
  const [user, setUser] = useState({});

  const location = useLocation();
  // let imageRendered = false

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    fetchData();
  }, []);

  const apiL = `${process.env.REACT_APP_LOCAL}/profile/${currentAccount}`;

  const fetchData = async () => {
    try {
      const response = await fetch(apiL);
      const data = await response.json();
      console.log(data);
      setUser(data);
    } catch (error) {
      console.log(error);
    }
  };

  // useEffect(console.log(image))

  // useEffect(image)

  return (
    <div className="navbar-full container-nav">
      <Container>
        <Navbar expand="lg" className="mb-4">
          <i className="bi bi-linkedin small-bi-li mr-2"></i>
          <Form inline>
            <FormControl
              type="text"
              placeholder="Search"
              className="mr-sm-2 search-small"
            />
          </Form>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="text-muted">
              <Link
                to="/"
                element={<NewsMain />}
                className={
                  location.pathname === "/"
                    ? "mr-4 font-12 text-black"
                    : "mr-4 font-12 text-muted"
                }
              ><div className="font-12">
                <i className="bi bi-house-door-fill"></i>Home
                </div>
              </Link>
              <Link
                to="/network"
                element={<Network />}
                className={
                  location.pathname === "/network"
                    ? "mr-4 font-12 text-black"
                    : "mr-4 font-12 text-muted"
                }
              >
                <div className="font-12">
                  <i className="bi bi-people-fill"></i>NetWork
                </div>
              </Link>
              <div className="mr-4 font-12">
                <i className="bi bi-briefcase-fill"></i>Jobs
              </div>
              <div className="mr-4 font-12">
                <i className="bi bi-chat-dots-fill"></i>Message
              </div>
              <div className="mr-4 font-12">
                <i className="bi bi-bell-fill"></i>Notifications
              </div>
              <div className="mr-4 mt-1">
                <Link
                  to={`/profile/${currentAccount}`}
                  element={<MainSection />}
                  className={
                    location.pathname === `/profile/${currentAccount}`
                      ? "text-black"
                      : "text-muted"
                  }
                >
                  <img className="nav-img object-top" src={user.image} alt="" />
                </Link>
                <NavDropdown
                  title="Me"
                  id="profile-nav-dropdown"
                  className={
                    location.pathname === `/profile/${currentAccount}`
                      ? "text-black"
                      : "text-muted"
                  }
                >
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="b-left pl-4 font-12">
                <i className="bi bi-grid-3x3-gap-fill"></i>{" "}
                <NavDropdown title="Work" id="work-nav-dropdown">
                  <NavDropdown.Item>Action</NavDropdown.Item>
                  <NavDropdown.Item>Another action</NavDropdown.Item>
                  <NavDropdown.Item>Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                  <NavDropdown.Item>Separated link</NavDropdown.Item>
                </NavDropdown>
              </div>
              <div className="text-center  ml-5 font-12 promotional">
                Get Hired Faster,
                <br />
                Try Premium Free
              </div>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </div>
  );
};

export default MyNavbar;
