import { useEffect, useState } from "react";
import { Button } from "react-bootstrap"
import { Link} from "react-router-dom"
import MainSection from "./MainSection"

export default function MessagePage({name, _id, currentAccount}) {

  const [messages, setMessages] = useState(null)

  const [text, setText] = useState({text: undefined})

  const apiMessage = (id, type, secondId) => `${process.env.REACT_APP_LOCAL}/message/${id}/${type}/${secondId}`;

  const manageMessages = async (id, type, secondId, method) => {
    try {
      const response = await fetch(apiMessage(id, type, secondId),{method: method} );
      const data = await response.json();
      setMessages(data)
    } catch (error) {
      console.log(error);
    }
  };

  const sendMessage = async (event) => {
    event.preventDefault();

    try {
      await fetch(
        apiMessage(currentAccount, "send",_id ),
        {
          method: "POST",
          body: JSON.stringify(text),
          headers: {
            "Content-type": "application/json",
          },
        }
      );
      manageMessages(currentAccount, "and", _id, "GET")
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
          {messages && messages.map(message =>    <div key={message._id}> <div className="d-flex flex-column border message"><div className="font-weight-bold font-16">{message.sender.name}</div><div className="mt-1 mb-1 font-14">{message.text}</div></div></div>)
       
}
        </div>
        <input type="text" placeholder="write something..." onChange={(e)=> {setText({text: e.target.value}); console.log(text)}}/>
        <Button
       className="mt-1 generic-btn side-btn font-weight-bold font-16 "
       variant="outline-primary"
       onClick={(e) => sendMessage(e)}
     >
       Send <i className="bi bi-send-fill"></i>
     </Button>
      </div>
    </>
  )
}
