import InfosCardSec from "./InfosCardSec"
import { useEffect } from "react"

export default function InfosCard(props) {


  let bioRendered = false

  useEffect(() => {
    // eslint-disable-next-line react-hooks/exhaustive-deps
    bioRendered = !bioRendered
  }, [!props.bio])


  return( 
    <>
  <div className="card-section p-4 mb-3">
<InfosCardSec  icons={'bi bi-pencil'} titleText={'Informations'}  description={ props.bio} />
</div>
</>
  )
}
