import { useParams } from "react-router-dom"
import EducationCardSec from "./EducationCardSec"

export default function EducationCard(props) {
  let params = useParams()
  return (
    <>
      <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
          <h4 className="mb-3"> Education</h4>
          <div>
            {params.profileId === "62141c010448b4001511688d" && (
              <>
                <i className="bi bi-plus-lg mr-2"></i>
                <i className="bi bi-pencil"></i>
              </>
            )}
          </div>
        </div>
        <EducationCardSec
          image={
            "http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif"
          }
          titleText={"PhD in Housekeeping & Lawn Maintance"}
          description={"Get known, put your content on your profile."}
          border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
          period={"July 2019 - October 2019 • 4 months"}
        />
        <EducationCardSec
          image={
            "http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif"
          }
          titleText={"The Streets"}
          description={"Save and edit your network."}
          period={"July 2019 - October 2019 • 4 months"}
        />
      </div>
    </>
  )
}
