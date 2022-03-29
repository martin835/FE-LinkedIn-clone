import SideProfile from "./SideProfile"
import { useState, useEffect } from "react"

export default function SidebarPeople(props) {
  const [users, setUsers] = useState(null)

  const apiL= `${process.env.REACT_APP_LOCAL}/profile`

  const fetchData = async () => {
    try {
      const response = await fetch(
        apiL,
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


  useEffect(() => {
   
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

  // const randomArr = () => {
  //   let arr = []
  //   for (let i = 0; i < 4; i++) {
  //     const randomI = Math.floor(Math.random() * 100)
  //     arr.push(randomI)
  //   }
  //   return arr
  // }
  // const arr = randomArr()

  return (
    <div className="card-section p-3 mb-3">
      <h6 className="people-title font-weight-bold">{props.sectionTitle}</h6>
      {users && (
        <>
          <SideProfile
            img={users[0].image}
            name={users[0].name + " " + users[0].surname}
            description={users[0].bio}
          />
          <SideProfile
            img={users[1].image}
            name={users[1].name + " " + users[1].surname}
            description={users[1].bio}
          />
          <SideProfile
            img={users[1].image}
            name={users[1].name + " " + users[1].surname}
            description={users[1].bio}
          />
          <SideProfile
            img={users[1].image}
            name={users[1].name + " " + users[1].surname}
            description={users[1].bio}
          />
        </>
      )}
    </div>
  )
}
