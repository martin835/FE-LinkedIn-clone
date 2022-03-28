import { useState } from "react"
import { Image, Modal, Button } from "react-bootstrap"
import axios from "axios"


const ExperienceCardSec = (props) => {

  const [show, setShow] = useState(false)
  const handleShow = () => setShow(true)
  const handleClose = () => setShow(false)

  const formData = new FormData()

  const uploadImg = (e) => {
    formData.append("experience", e.target.files[0])
  }



  const exId =
    "https://striveschool-api.herokuapp.com/api/profile/" + props.parameters + "/experiences/" +
    props.experienceId

  const deleteData = async () => {
    try {
      const response = await fetch(exId, {
        method: "DELETE",
        headers: {
          Authorization:
            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
        },
      })
      if (response.ok) {
        props.fetch()
      }
    } catch (error) {
      console.log(error)
    }
  }


  const submitFile = (e) => {
    e.preventDefault()

    // axios
    //   .post(
    //     "https://striveschool-api.herokuapp.com/api/profile/62141c010448b4001511688d/picture/",
    //     { formData },
    //     {
    //       headers: {
    //         Authorization:
    //           "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
    //       },
    //     }
    //   )
    //   .then((response) => {
    //     console.log(response)
    //   })
    //   .catch((error) => {
    //     console.log(error)
    //   })

    axios({
      method: "post",
      url: "https://striveschool-api.herokuapp.com/api/profile/62141c010448b4001511688d/experiences/"+ props.experienceId +"/picture",
      data: formData,
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
        "Content-Type": "multipart/form-data",
      },
    })
      .then(function (response) {
        //handle success
        console.log(response)
      })
      .catch(function (response) {
        //handle error
        console.log(response)
      })
  }

  let variable = props.selected

  return (
    <div className="d-flex justify-content-between" style={props.border}>
      <div className="d-flex">
        <Image
          className="experience-image"
          src={props.image}
          alt="experience image"></Image>
        <div className="mb-2">
          <h5 className="font-16">{props.titleText}</h5>
          <span className="d-block font-14">{props.description}</span>
          <span className="d-block font-12">{props.period}</span>
          <span className="d-block font-12">{props.location}</span>
        </div>
      </div>
      {variable === true && (
        <div className="d-flex">
          <i className="bi bi-image font-18 mr-2 text-lightBlue" onClick={handleShow}></i>
          <i
            className="bi bi-pencil mr-2"
            style={{ cursor: "pointer" }}
            onClick={() => {
              props.toggle()
              props.experience(
                props.titleText,
                props.company,
                props.start,
                props.end,
                props.description,
                props.location
              )
              props.chanId(props.experienceId)
            }}></i>
          <i
            className="bi bi-trash3"
            style={{ color: "red", cursor: "pointer" }}
            onClick={() => deleteData()}></i>
        </div>
      )}

<Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>Change profile image</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <input type="file" name="profile-img" onChange={uploadImg} />
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={(e) => submitFile(e)}>
              Post
            </Button>
          </Modal.Footer>
        </Modal>
    </div>
  )
}

export default ExperienceCardSec


