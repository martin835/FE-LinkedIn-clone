import { Button } from "react-bootstrap"
import { useParams } from "react-router-dom"
import SkillsCardSec from "./SkillsCardSec"

export default function SkillsCard(props) {
  let params = useParams()
  return (
    <>
      <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
          <h4 className="mb-3"> Skills</h4>
          {params.profileId === "62141c010448b4001511688d" && (
            <div>
              <Button className="generic-btn" variant="outline-primary">
                Evaluate your skills
              </Button>
              <i className="bi bi-plus-lg mr-2"></i>
              <i className="bi bi-pencil"></i>
            </div>
          )}
        </div>
        <SkillsCardSec
          titleText={"Nunchucks"}
          description={"3"}
          border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
        />
        <SkillsCardSec
          titleText={"Hair styling"}
          description={"7"}
          border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
        />
        <SkillsCardSec titleText={"l33t h4xer skillz"} description={"196"} />
      </div>
    </>
  )
}
