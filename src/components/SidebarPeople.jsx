import SideProfile from "./SideProfile"
import { useState, useEffect } from "react"

export default function SidebarPeople(props) {
  const [users, setUsers] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://striveschool-api.herokuapp.com/api/profile/",
          {
            headers: {
              Authorization:
                "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
            },
          }
        )
        const data = await response.json()
        if (response.ok) {
          // console.log(data)
          setUsers(data)
          // let arr = [data]
          // console.log("I am shuffled" + shuffle(arr))
        }
      } catch (error) {
        console.log(error)
      }
    }
    fetchData()
  }, [])

  // let test = [1, 2, 3, 4, 5]

  // function shuffle(arr) {
  //   let currentIndex = arr.length,
  //     randomIndex

  //   while (currentIndex !== 0) {
  //     randomIndex = Math.floor(Math.random() * currentIndex)
  //     currentIndex--
  //     ;[arr[currentIndex], arr[randomIndex]] = [
  //       arr[randomIndex],
  //       arr[currentIndex],
  //     ]
  //   }
  //   return arr
  // }

  // console.log(shuffle(test))
  // setTimeout(() => {
  //   console.log("shuffle")
  //   shuffle(users)
  // }, 1000)

  const randomArr = () => {
    let arr = []
    for (let i = 0; i < 4; i++) {
      const randomI = Math.floor(Math.random() * 100)
      arr.push(randomI)
    }
    return arr
  }
  const arr = randomArr()

  return (
    <div className="card-section p-3 mb-3">
      <h6 className="people-title font-weight-bold">{props.sectionTitle}</h6>
      {users && (
        <>
          <SideProfile
            img={users[arr[0]].image}
            name={users[arr[0]].name + " " + users[arr[0]].surname}
            description={users[arr[0]].bio}
          />
          <SideProfile
            img={users[arr[1]].image}
            name={users[arr[1]].name + " " + users[arr[1]].surname}
            description={users[arr[1]].bio}
          />
          <SideProfile
            img={users[arr[2]].image}
            name={users[arr[2]].name + " " + users[arr[2]].surname}
            description={users[arr[2]].bio}
          />
          <SideProfile
            img={users[arr[3]].image}
            name={users[arr[3]].name + " " + users[arr[3]].surname}
            description={users[arr[3]].bio}
          />
        </>
      )}
    </div>
  )
}
