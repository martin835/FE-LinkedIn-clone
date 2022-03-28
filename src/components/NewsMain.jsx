import { Row, Col } from "react-bootstrap"
import HomeSidebarLeft from "./HomeSidebarLeft"
import PostPost from "./PostPost"
import GetAPost from "./GetAPost"
import LinkedNews from "./LinkedNews"
import HomeFooter from "./HomeFooter"
import { useState, useEffect } from "react"

const NewsMain = ({ changeImg }) => {
  const [user, setUser] = useState({})

  const fetchData = async () => {
    try {
      const response = await fetch(
        "https://striveschool-api.herokuapp.com/api/profile/me",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
          },
        }
      )
      const data = await response.json()
      changeImg(data.image)
      setUser(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!user])

  return (
    <div className="container padding-sec">
      <Row className="m-auto">
        <Col md={2}>
          <HomeSidebarLeft user={user} />
        </Col>
        <Col md={6}>
          <PostPost
            image={user.image}
            name={user.name}
            surname={user.surname}
          />
          <GetAPost />
        </Col>
        <Col md={4}>
          <LinkedNews title={"LinkedIn News"} />
          <HomeFooter />
        </Col>
      </Row>
    </div>
  )
}

export default NewsMain
