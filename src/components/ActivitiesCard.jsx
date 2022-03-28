import { Button } from "react-bootstrap"
import ActivitiesCardSec from "./ActivitiesCardSec"

export default function ActivitiesCard(props) {
  return (
    <>
      <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
          <div>
            <h4 className="mb-3"> Activities</h4>
            <p className="link">500+ followers</p>
          </div>
          <Button className="generic-btn" variant="outline-primary">
            Create a post
          </Button>
        </div>
        <ActivitiesCardSec
          titleText={"Please post something, we need it."}
          description={
            "The most recent posts you share and comments will appear here."
          }
        />
      </div>
    </>
  )
}
