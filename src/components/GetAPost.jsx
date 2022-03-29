import { useEffect, useState } from "react"
import SinglePost from "./SinglePost"

const GetAPost = () => {
  const [posts, setPosts] = useState(undefined)

  useEffect(() => {
    getFetch()
   
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ ])

  const change = (value) => {
    setPosts(value)
  }

const apiL =  `${process.env.REACT_APP_LOCAL}/posts`

  const getFetch = async () => {
    try {
      let response = await fetch(
      apiL
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
        posts.reverse().map((post) => (
            <SinglePost
            fetch={getFetch}
              username={post.profile.name + " " + post.profile.surname}
              image={post.image}
              text={post.text}
              key={post._id}
              unique={post._id}
              params={post.profile._id}
              userimg={post.profile.image}
              job={post.profile.title}
              date={post.createdAt}
            />
          ))}
    </>
  )
}

export default GetAPost
