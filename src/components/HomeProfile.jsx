import { useState, useEffect } from "react"

export default function HomeProfile({ me }) {
  const [user, setUser] = useState({})
  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    setUser(me)
  })

  return (
    <div className="card-section text-center position-relative font-10">
      <img
        className="home-cover-img mb-5"
        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimages.fineartamerica.com%2Fimages%2Fartworkimages%2Fmediumlarge%2F3%2Fcurvy-mountain-road-idaho-tatiana-travelways.jpg&f=1&nofb=1"
        alt=""
      />
      <img
        className="profile-img-home object-top"
        src={user.image}
        alt="profile"
      />
      <h4 className="font-weight-bold font-16">{`${user.name} ${user.surname}`}</h4>
      <h6 className="font-14 mb-3">{user.title}</h6>
      <div className="d-flex home-connections p-2 text-left">
        <div className="d-flex flex-column">
          <p>Connections</p>
          <p className="mb-2 font-weight-bold">Grow your network</p>
          <p>Who viewed your profile</p>
        </div>
        <div className="d-flex flex-column justify-content-between link pl-2">
          <p>4953</p>
          <p>57483</p>
        </div>
      </div>
      <div className="text-left try-prem-home p-2">
        <p>Access exclusive tools & insights</p>
        <div className="font-weight-bold d-flex font-10 align-items-center mt-1">
          <PremiumSVG />
          Try Premium for free
        </div>
      </div>
      <div className="text-left p-2 d-flex font-10">
        <span className="mr-1">
          <ItemsSVG />
        </span>
        My items
      </div>
    </div>
  )
}

const PremiumSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      className="mr-1"
      width="14"
      height="14"
      focusable="false">
      <path
        d="M20 20a3.36 3.36 0 001-2.39V6.38A3.38 3.38 0 0017.62 3H6.38A3.36 3.36 0 004 4z"
        fill="#f8c77e"></path>
      <path
        d="M4 4a3.36 3.36 0 00-1 2.38v11.24A3.38 3.38 0 006.38 21h11.24A3.36 3.36 0 0020 20z"
        fill="#e7a33e"></path>
    </svg>
  )
}

const ItemsSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      width="14"
      height="14"
      focusable="false">
      <path d="M12 1H4a1 1 0 00-1 1v13.64l5-3.36 5 3.36V2a1 1 0 00-1-1z"></path>
    </svg>
  )
}
