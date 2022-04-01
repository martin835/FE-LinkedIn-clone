import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import MainSection from "./MainSection";


export default function SingleFriend({image, name, surname, title, _id}) {
  return (
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
        <Button
          className="mt-1 generic-btn side-btn font-weight-bold font-12"
          variant="outline-secondary"
        >
          Request
        </Button>
      </div>
    </div>
  );
}
