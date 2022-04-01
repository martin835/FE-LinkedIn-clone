import { Button } from "react-bootstrap"
import { Link} from "react-router-dom"
import MainSection from "./MainSection"

export default function MessagePage({name, _id}) {

  return (
    <>
      <div className="card-section p-4 mb-3">
      <Link to={"/profile/" + _id} element={<MainSection />}>
        <div className="font-weight-bold side-name font-18 text-black prime text-one">{name}</div>
        </Link>
        <div className="messageTable"></div>
        <input type="text" />
        <Button
       className="mt-1 generic-btn side-btn font-weight-bold font-16 "
       variant="outline-primary"
     >
       Send <i class="bi bi-send-fill"></i>
     </Button>
      </div>
    </>
  )
}
