// import LanguagesCardSec from "./LanguagesCardSec"

import { useParams } from "react-router-dom"

export default function LanguagesCard(props) {
  let params = useParams()

  return (
    <>
      <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
          <h4 className="mb-3"> Languages</h4>
          {params.profileId === "62141c010448b4001511688d" && (
            <div>
              <i className="bi bi-plus-lg mr-2"></i>
              <i className="bi bi-pencil"></i>
            </div>
          )}
        </div>
        <LanguagesCardSec
          titleText={"Esperanto"}
          description={"Mother tongue"}
          border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
        />
        <LanguagesCardSec
          titleText={"Ancient Greek"}
          description={"Mother tongue"}
          border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
        />
        <LanguagesCardSec
          titleText={"Sanskrit"}
          description={"Mother tongue"}
        />
      </div>
    </>
  )
}

const LanguagesCardSec = (props) => {
  return (
    <div className="d-flex" style={props.border}>
      <div className="mb-2 mr-1">
        <h5 className="font-16">{props.titleText}</h5>
        <span className="font-14">{props.description}</span>
      </div>
    </div>
  )
}
