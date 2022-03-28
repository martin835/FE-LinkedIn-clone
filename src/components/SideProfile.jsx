import { Button } from "react-bootstrap"

export default function SideProfile(props) {
  return (
    <div className="d-flex my-2">
      <img className="side-profile-img" src={props.img} alt={props.alt} />
      <div className="d-flex flex-column">
        <div className="d-flex">
          <div className="font-weight-bold mr-2 side-name">{props.name}</div>
        </div>
        <div className="description-text my-1 pr-3 font-12 text">
          {props.description}
        </div>
        <Button
          className="mt-1 generic-btn side-btn font-weight-bold font-12"
          variant="outline-secondary">
          Message
        </Button>
      </div>
    </div>
  )
}
