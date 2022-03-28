import ExperienceCardSec from "./ExperienceCardSec"
import { useEffect, useState } from "react"
import AddExperience from "./AddExperience"
import ModifyExperience from "./ModifyExperience"
import { useParams } from "react-router-dom"

export default function ExperienceCard(props) {
  const [user, setUser] = useState([])

  const [selected, setSelected] = useState(false)

  const [edit, setEdit] = useState(false)

  const [toggle, setToggle] = useState(false)
  const [id, setId] = useState(undefined)

  const [experience, setExperience] = useState({
    role: undefined,
    company: undefined,
    startDate: undefined,
    endDate: undefined,
    description: undefined,
    area: undefined,
  })

  useEffect(() => {
    fetchData()
  }, [ ])

  let params = useParams()

  const httpFetch = props.parameters === "62141c010448b4001511688d" ? "https://striveschool-api.herokuapp.com/api/profile/62141c010448b4001511688d/experiences" : "https://striveschool-api.herokuapp.com/api/profile/" + props.parameters + "/experiences/" 


  const fetchData = async () => {
    try {
      const response = await fetch(
       httpFetch,
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
          },
        }
      )
      const data = await response.json()
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  const editSelect = () => {
    setEdit(!edit)
    if (selected) setSelected(false)
  }

  const changeToggle = () => {
    setToggle(!toggle)
    if (selected) setSelected(false)
  }

  const changeId = (value) => {
    setId(value)
  }

  const changeExper = (value1, value2, value3, value4, value5, value6) => {
    setExperience({
      role: value1,
      company: value2,
      startDate: value3,
      endDate: value4,
      description: value5,
      area: value6,
      value: 7,
    })
  }

  return (
    <>
      <div className="card-section p-4 mb-3">
        <div className="d-flex justify-content-between">
          <h4 className="mb-3"> Experiences</h4>
          <div>
           {params.profileId === '62141c010448b4001511688d' && <> <i
              className="bi bi-plus-lg mr-2"
              style={{ cursor: "pointer" }}
              onClick={() => {
                setSelected(!selected)
                if (toggle) setToggle(false)
                if (edit) setEdit(false)
              }}></i>
            <i
              className="bi bi-pencil"
              style={{ cursor: "pointer" }}
              onClick={() => editSelect()}></i>
              </>}
          </div>
        </div>
        {user.map((userex) => (
          <ExperienceCardSec
            image={
              userex.image
            }
            titleText={userex.role}
            description={userex.description}
            border={{ borderBottom: "1px solid gray", marginBottom: "10px" }}
            period={userex.startDate + " - " + userex.endDate}
            location={userex.area}
            key={userex._id}
            experienceId={userex._id}
            selected={edit}
            realselected={selected}
            toggle={changeToggle}
            experience={changeExper}
            company={userex.company}
            start={userex.startDate}
            end={userex.endDate}
            chanId={changeId}
            fetch={fetchData}
          />
        ))}
        {selected === true && <AddExperience fetch={fetchData} />}
        {toggle === true && (
          <ModifyExperience
            role={experience.role}
            description={experience.description}
            location={experience.area}
            company={experience.company}
            start={experience.startDate}
            end={experience.endDate}
            thisId={id}
            fetch={fetchData}
          />
        )}
      </div>
    </>
  )
}
