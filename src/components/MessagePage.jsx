import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import { Link} from "react-router-dom"
import MainSection from "./MainSection"

export default function MessagePage({name, _id, currentAccount}) {

  const [messages, setMessages] = useState(null)

  const apiFriend = (id, type, secondId) => `${process.env.REACT_APP_LOCAL}/message/${id}/${type}/${secondId}`;

  const manageMessages = async (id, type, secondId, method) => {
    try {
      const response = await fetch(apiFriend(id, type, secondId),{method: method} );
      const data = await response.json();
      setMessages(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    manageMessages(_id, "and", currentAccount, "GET")
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      <div className="card-section p-4 mb-3">
      <Link to={"/profile/" + _id} element={<MainSection />}>
        <div className="font-weight-bold side-name font-18 text-black prime text-one">{name}</div>
        </Link>
        <div className="messageTable p-2">
          {messages.map(message =>    <> <div className="mt-1 mb-1">message.text</div></>)
       
}
        </div>
        <input type="text" />
        <Button
       className="mt-1 generic-btn side-btn font-weight-bold font-16 "
       variant="outline-primary"
     >
       Send <i className="bi bi-send-fill"></i>
     </Button>
      </div>
    </>
  )
}
