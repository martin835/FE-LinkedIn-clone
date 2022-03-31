import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import MainSection from "./MainSection";
import Comments from "./Comments";

const SinglePost = (props) => {
  const [clicked, setClicked] = useState(false);

  const [counter, setCounter] = useState(28);

  const [like, setLike] = useState(false);

  const [dots, setDots] = useState(false);

  const [post, setPost] = useState({
    text: undefined,
  });

  const [showComments, setShowComments] = useState(false);
  const unHideComments = () => {
    showComments ? setShowComments(false) : setShowComments(true);
  };

  let date = props.date.toLocaleString("en-GB", { timeZone: "UTC" });

  const postId = props.currentAccount;

  const formData = new FormData();

  const poId = `${process.env.REACT_APP_LOCAL}/posts/` + props.unique;

  const deleteData = async () => {
    try {
      const response = await fetch(poId, {
        method: "DELETE",
      });
      if (response.ok) {
        console.log("Ok");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const posId = `${process.env.REACT_APP_LOCAL}/posts/` + props.unique;
    axios({
      method: "post",
      url:
        `${process.env.REACT_APP_LOCAL}/posts/` + postId + "/uploadPostCover",
      data: formData,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        console.log(response);
        props.fetch();
      })
      .catch((error) => {
        console.log(error);
      });

    try {
      const response = await fetch(posId, {
        method: "PUT",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json",
        },
      });
      if (response.ok) {
        console.log("OkOkOk");
        props.fetch();
      }
    } catch (error) {
      console.log(error);
    }
  };

  const grabValue = (value) => {
    setPost({ text: value });
  };

  // const updateImg = (e) => {
  //   e.preventDefault()

  //   axios({
  //     method: "post",
  //     url: "https://striveschool-api.herokuapp.com/api/profile/62141c010448b4001511688d/picture/",
  //     data: formData,
  //     headers: {
  //       Authorization:
  //         "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjE0MWMwMTA0NDhiNDAwMTUxMTY4OGQiLCJpYXQiOjE2NDU0ODUwNTcsImV4cCI6MTY0NjY5NDY1N30.RpYP2LhIfMwWh9okgKoO9hO9xHHxMIrpOw6PlnVfviI",
  //       "Content-Type": "multipart/form-data",
  //     },
  //   })
  //     .then(function (response) {
  //       //handle success
  //       console.log(response)
  //     })
  //     .catch(function (response) {
  //       //handle error
  //       console.log(response)
  //     })
  // }

  const uploadImg = (e) => {
    e.preventDefault();
    formData.append("post", e.target.files[0]);
  };

  return (
    <div className="card-section p-4 mb-2">
      <div className="d-flex justify-content-between">
        <div className="d-flex align-items-center mb-3">
          <img className="post-img mr-2" src={props.userimg} alt="" />
          <div>
            <Link to={"/profile/" + props.params} element={<MainSection />}>
              <h6 className="mb-0 text-black prime"> {props.username}</h6>
            </Link>
            <span className="text-muted font-12 text-one">{props.job}</span>
            <span className="text-muted font-11 text-one">
              {date.slice(0, 10) + " • " + date.slice(11, 19)}
            </span>
          </div>
        </div>
        {props.params === props.currentAccount && (
          <i
            className="bi bi-three-dots d-block"
            style={{ cursor: "pointer" }}
            onClick={() => {
              setDots(!dots);
              setClicked(false);
            }}
          ></i>
        )}
      </div>
      <div className="d-flex justify-content-between">
        <div className="d-flex flex-column">
          <div className="mb-2 font-14">{props.text}</div>
          {props.image && (
            <img className="post-post-img mb-3" src={props.image} alt="none" />
          )}
        </div>

        {dots && (
          <div className="d-flex">
            <i
              className="bi bi-pencil mr-2 d-block"
              style={{ cursor: "pointer" }}
              onClick={() => setClicked(!clicked)}
            ></i>
            <i
              className="bi bi-trash3 d-block"
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => {
                deleteData();
                props.fetch();
              }}
            ></i>
          </div>
        )}
      </div>
      <span className="font-12 text-muted ml-3">{counter}</span>
      <div
        className="d-flex justify-content-between font-14 ml-2 mr-2 mt-3"
        style={{ borderTop: "1px solid gray", paddingTop: "20px" }}
      >
        <div
          className="pointer d-block"
          onClick={() => {
            like ? setCounter(counter - 1) : setCounter(counter + 1);
            setLike(!like);
          }}
        >
          {like ? (
            <>
              {" "}
              <i className="bi bi-hand-thumbs-up text-primary mr-2"></i>{" "}
              <span className="text-primary">Like</span>
            </>
          ) : (
            <>
              <i className="bi bi-hand-thumbs-up mr-2"></i>{" "}
              <span className="">Like</span>
            </>
          )}
        </div>

        <div className="pointer" onClick={() => unHideComments()}>
          <i className="bi bi-chat-left-dots mr-2"></i>
          <span>Comment</span>
        </div>

        <div className="pointer">
          <i className="bi bi-arrow-90deg-right mr-2"></i>
          <span>Share</span>
        </div>
        <div className="pointer">
          <i className="bi bi-send-fill mr-2"></i>
          <span>Send</span>
        </div>
      </div>
      <Comments postId={props.unique} showComments={showComments}></Comments>
      {clicked && (
        <Form
          className="mt-4"
          style={{ borderTop: "1px solid gray", paddingTop: "20px" }}
          onSubmit={(event) => {
            handleSubmit(event);
            setDots(!dots);
            setClicked(!clicked);
          }}
        >
          <Form.Group controlId="formBasicText">
            <Form.Control
              type="text"
              placeholder="Enter text"
              onChange={(e) => grabValue(e.target.value)}
              defaultValue={props.text}
            />
            <p className="font-weight-bold mt-4 font-12">Upload Image</p>
            <Form.Control type="file" name="profile-img" onChange={uploadImg} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      )}
    </div>
  );
};
export default SinglePost;
