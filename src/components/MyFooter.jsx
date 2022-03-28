/* change font size */
import { Container, Row, Col, Dropdown } from "react-bootstrap";
const MyFooter = function () {
  return (
    <footer>
      <Container>
        <Row>
          <Col>
            <span className="linkedinIcon">Linked</span>{" "}
            <i className="bi bi-linkedin"></i>
          </Col>
        </Row>
        <Row className="text-muted">
          <Col xs={6} md={2}>
            <p> About </p>
            <p>Community Guidelines</p>
            <p>Privacy & Terms </p>
            <p>Sales Solutions</p>
            <p>Safety Center</p>
          </Col>
          <Col xs={6} md={2}>
            <p>Accessibility </p>
            <p> Careers </p>
            <p>Ad Choices</p>
            <p>Mobile</p>
          </Col>
          <Col xs={6} md={2}>
            <p>Talent Solutions</p>
            <p> Marketing Solutons </p>
            <p>Advertising</p>
            <p>Small Business</p>
          </Col>
          <Col md={3}>
            <Row className="mb-3">
              <div className="d-flex">
                <i className="bi bi-question-circle-fill"></i>
                <div>
                  <h6 className="footh6">Questions?</h6>
                  <small className="d-block">Visit our Help Center</small>
                </div>
              </div>
            </Row>
            <Row>
              <i className="bi bi-gear-fill"></i>
              <div>
                <h6 className="footh6">Manage your account and privacy</h6>
                <small>Go to your Settings</small>
              </div>
            </Row>
          </Col>
          <Col md={2}>
            <Dropdown>
              Select Language
              <Dropdown.Toggle
                variant="transparent"
                id="dropdown-basic"
                className="text-muted"
              >
                English (English)
              </Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">
                  English (English)
                </Dropdown.Item>
                <Dropdown.Item href="#/action-2">Italian</Dropdown.Item>
                <Dropdown.Item href="#/action-3">Spanish</Dropdown.Item>
                <Dropdown.Item href="#/action-4">Polish</Dropdown.Item>
                <Dropdown.Item href="#/action-4">German</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default MyFooter;
