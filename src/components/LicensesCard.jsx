import { useParams } from "react-router-dom"
import LicenseCardSec from "./LicenseCardSec"

export default function LicensesCard(props) {
  let params = useParams()
  return (
    <>
      <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
          <h4 className="mb-3"> Licenses</h4>
          {params.profileId === "62141c010448b4001511688d" && (
            <div>
              <i className="bi bi-plus-lg mr-2"></i>
              <i className="bi bi-pencil"></i>
            </div>
          )}
        </div>
        <LicenseCardSec
          image={
            "http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif"
          }
          titleText={"Ultimate Frisbee Trainer Certificate"}
          description={"Get known, put your content on your profile."}
          border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
          period={"July 2019 - October 2019 • 4 months"}
        />
        <LicenseCardSec
          image={
            "http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif"
          }
          titleText={"High Altitude Helipocter Stunt License"}
          description={"Get known, put your content on your profile."}
          period={"July 2019 - October 2019 • 4 months"}
        />
        <LicenseCardSec
          image={
            "http://www.50epiu.it/wp-content/uploads/2015/12/placeholder.gif"
          }
          titleText={"License To Kill"}
          description={"Get known, put your content on your profile."}
          border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
          period={"July 2019 - October 2019 • 4 months"}
        />
      </div>
    </>
  )
}
