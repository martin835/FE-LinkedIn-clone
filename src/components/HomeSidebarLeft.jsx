import HomeProfile from "./HomeProfile"
import HomeDiscover from "./HomeDiscover"

export default function HomeSidebarLeft({ user }) {
  return (
    <>
      <HomeProfile me={user} />
      <HomeDiscover />
    </>
  )
}
