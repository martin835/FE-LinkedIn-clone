import { useEffect, useState } from "react"
import SinglePost from "./SinglePost"

const GetAPost = () => {
  const [posts, setPosts] = useState(undefined)

  useEffect(() => {
    getFetch()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [!posts])

  const change = (value) => {

    setPosts(value)
  }

  const getFetch = async () => {
    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/posts/",
        {
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
          },
        }
      )

      let data = await response.json()
      change(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <>
      {posts === undefined && (
        <div
          className="spinner-border text-primary"
          style={{ marginLeft: "47%" }}
          role="status">
          <span className="sr-only">Loading...</span>
        </div>
      )}
      {posts &&
        posts.filter((post, idx) => idx > posts.length - 20 && idx < posts.length).reverse()
          .map((post) => (
            <SinglePost
            fetch={getFetch}
              username={post.user.name + " " + post.user.surname}
              image={post.image}
              text={post.text}
              key={post._id}
              unique={post._id}
              params={post.user._id}
              userimg={post.user.image}
              job={post.user.title}
              date={post.createdAt}
            />
          ))}
    </>
  )
}

export default GetAPost
