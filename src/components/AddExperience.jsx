import { useState } from "react"
import { Form, Button } from "react-bootstrap"

const AddExperience = (props) => {
  const [experience, setExperience] = useState({
    role: undefined,
    company: undefined,
    startDate: undefined,
    endDate: undefined,
    description: undefined,
    area: undefined,
  })

  const grabValue = (property, value) => {
    setExperience({ ...experience, [property]: value })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()

    try {
      await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/62141c010448b4001511688d/experiences/",
        {
          method: "POST",
          body: JSON.stringify(experience),
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
            "Content-type": "application/json",
          },
        }
      )
      props.fetch()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <Form onSubmit={(event) => handleSubmit(event)}>
      <Form.Group controlId="formBasicRole">
        <Form.Label>Role</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter role"
          onChange={(e) => grabValue("role", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCompany">
        <Form.Label>Company</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Company"
          onChange={(e) => grabValue("company", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicStartDate">
        <Form.Label>Start Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter Start Date"
          onChange={(e) => grabValue("startDate", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicEndDate">
        <Form.Label>End Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter End Date"
          onChange={(e) => grabValue("endDate", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Description"
          onChange={(e) => grabValue("description", e.target.value)}
        />
      </Form.Group>

      <Form.Group controlId="formBasicCountry">
        <Form.Label>Country</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Country"
          onChange={(e) => grabValue("area", e.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  )
}
export default AddExperience
