import { Button } from "react-bootstrap";

export default function SingleFriend() {
  return (
    <div className="d-flex my-2 friends">
      <img className="side-profile-img" src={""} alt={""} />
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div className="font-weight-bold mr-2 side-name">
            {"Ali Alaeddine"}
          </div>
        </div>
        <div className="description-text my-1 pr-3 font-12 text">
          {"hellooooo"}
        </div>
        <Button
          className="mt-1 generic-btn side-btn font-weight-bold font-12"
          variant="outline-secondary"
        >
          Accept
        </Button>
      </div>
    </div>
  );
}
