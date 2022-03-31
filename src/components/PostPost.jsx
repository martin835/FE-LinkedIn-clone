import { useState } from "react";
import { Button, Modal } from "react-bootstrap";

export default function PostPost({
  image,
  name,
  surname,
  refe,
  setAgain,
  again,
}) {
  const [post, setPost] = useState({
    text: undefined,
    image: "",
    profile: "6241b5a05f0f9cae1d24811c",
  });

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const updatePost = (value) => {
    setPost({ ...post, text: value });
    console.log(post.text);
  };

  const handleSubmit = async (event) => {
    // window.location.reload(false);
    event.preventDefault();
    console.log("working");
    setAgain(!again);

    const apiL = `${process.env.REACT_APP_LOCAL}/posts`;

    try {
      await fetch(apiL, {
        method: "POST",
        body: JSON.stringify(post),
        headers: {
          "Content-type": "application/json",
        },
      });
      // refetch here
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="card-section px-2 py-3  mb-3">
      <div className="d-flex align-items-center">
        <img className="post-img object-top" src={image} alt="" />
        <input
          className="post-input pl-3 mx-2"
          type="text"
          placeholder="Start a post"
          onChange={handleShow}
          onClick={handleShow}
        />
      </div>
      <div className="d-flex justify-content-between font-14 mt-2">
        <div className="d-flex text-muted pointer">
          <ImageSVG />
          Photo
        </div>
        <div className="d-flex  text-muted pointer">
          <VideoSVG />
          Video
        </div>
        <div className="d-flex text-muted pointer">
          <EventSVG />
          Event
        </div>
        <div className="d-flex text-muted pointer">
          <ArticleSVG />
          Write article
        </div>
      </div>

      <Modal
        className="post-modal mx-auto"
        style={{ maxWidth: "400px", left: "0", right: "0" }}
        show={show}
        onHide={handleClose}
      >
        <Modal.Header closeButton>
          <Modal.Title className="font-13">Create a post</Modal.Title>
        </Modal.Header>
        <Modal.Body className="modal-post">
          <div className="d-flex font-12">
            <img className="post-img object-top mr-2" src={image} alt="" />
            <div className="d-flex flex-column">
              <span>{`${name} ${surname}`}</span>
              <div className="d-flex align-items-center">
                <GlobeSVG />
                <div className="text-muted font-10">anyone</div>
              </div>
            </div>
          </div>
          <input
            className="post-input-text font-12"
            placeholder="What do you want to talk about?"
            onChange={(e) => updatePost(e.target.value)}
          />
          <div className="link font-11">Add hashtag</div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content between">
          <div className="d-flex mr-auto post-icons">
            <ImageSVGsm />
            <VideoSVGsm />
            <DocSVG />
            <CaseSVG />
            <StarSVG />
            <ChartSVG />
            <DotsSVG />
          </div>
          <div className="d-flex justify-content-between font-11">
            <div className="d-flex align-items-center mr-4">
              <ChatSVG />
              <span>Anyone</span>
            </div>
            <Button
              variant="secondary"
              onClick={(e) => {
                handleSubmit(e);
                handleClose();
              }}
            >
              Post
            </Button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

const ImageSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      width="24"
      height="24"
      className="mr-2 text-lightBlue"
      focusable="false"
    >
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
    </svg>
  );
};

const ImageSVGsm = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      width="16"
      height="16"
      className="mr-2"
      focusable="false"
    >
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm1 13a1 1 0 01-.29.71L16 14l-2 2-6-6-4 4V7a1 1 0 011-1h14a1 1 0 011 1zm-2-7a2 2 0 11-2-2 2 2 0 012 2z"></path>
    </svg>
  );
};

const VideoSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      width="24"
      height="24"
      className="mr-2 text-green"
      focusable="false"
    >
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
    </svg>
  );
};
const VideoSVGsm = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      width="16"
      height="16"
      className="mr-2"
      focusable="false"
    >
      <path d="M19 4H5a3 3 0 00-3 3v10a3 3 0 003 3h14a3 3 0 003-3V7a3 3 0 00-3-3zm-9 12V8l6 4z"></path>
    </svg>
  );
};

const EventSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      width="24"
      height="24"
      className="mr-2 text-orange"
      focusable="false"
    >
      <path d="M3 3v15a3 3 0 003 3h12a3 3 0 003-3V3zm13 1.75A1.25 1.25 0 1114.75 6 1.25 1.25 0 0116 4.75zm-8 0A1.25 1.25 0 116.75 6 1.25 1.25 0 018 4.75zM19 18a1 1 0 01-1 1H6a1 1 0 01-1-1V9h14zm-5.9-3a1 1 0 00-1-1H12a3.12 3.12 0 00-1 .2l-1-.2v-3h3.9v1H11v1.15a3.7 3.7 0 011.05-.15 1.89 1.89 0 012 1.78V15a1.92 1.92 0 01-1.84 2H12a1.88 1.88 0 01-2-1.75 1 1 0 010-.25h1a.89.89 0 001 1h.1a.94.94 0 001-.88z"></path>
    </svg>
  );
};

const ArticleSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      width="24"
      height="24"
      className="mr-2 text-pink"
      focusable="false"
    >
      <path d="M21 3v2H3V3zm-6 6h6V7h-6zm0 4h6v-2h-6zm0 4h6v-2h-6zM3 21h18v-2H3zM13 7H3v10h10z"></path>
    </svg>
  );
};

const GlobeSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      className="mr-1"
      width="12"
      height="12"
      focusable="false"
    >
      <path d="M8 1a7 7 0 107 7 7 7 0 00-7-7zM3 8a5 5 0 011-3l.55.55A1.5 1.5 0 015 6.62v1.07a.75.75 0 00.22.53l.56.56a.75.75 0 00.53.22H7v.69a.75.75 0 00.22.53l.56.56a.75.75 0 01.22.53V13a5 5 0 01-5-5zm6.24 4.83l2-2.46a.75.75 0 00.09-.8l-.58-1.16A.76.76 0 0010 8H7v-.19a.51.51 0 01.28-.45l.38-.19a.74.74 0 01.68 0L9 7.5l.38-.7a1 1 0 00.12-.48v-.85a.78.78 0 01.21-.53l1.07-1.09a5 5 0 01-1.54 9z"></path>
    </svg>
  );
};

const DocSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mr-2"
      width="16"
      height="16"
      focusable="false"
    >
      <path d="M3 3v15a3 3 0 003 3h9v-6h6V3zm9 8H6v-1h6zm6-3H6V7h12zm-2 8h5l-5 5z"></path>
    </svg>
  );
};

const CaseSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mr-2"
      width="16"
      height="16"
      focusable="false"
    >
      <path d="M17 6V5a3 3 0 00-3-3h-4a3 3 0 00-3 3v1H2v4a3 3 0 003 3h14a3 3 0 003-3V6zM9 5a1 1 0 011-1h4a1 1 0 011 1v1H9zm10 9a4 4 0 003-1.38V17a3 3 0 01-3 3H5a3 3 0 01-3-3v-4.38A4 4 0 005 14z"></path>
    </svg>
  );
};

const StarSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mr-2"
      width="16"
      height="16"
      focusable="false"
    >
      <path d="M22 11.1L20.47 10a1.09 1.09 0 01-.4-1.25l.62-1.81a1.11 1.11 0 00-.7-1.4 1.07 1.07 0 00-.35-.06h-2a1.09 1.09 0 01-1.05-.76l-.59-2A1.09 1.09 0 0015 2a1.11 1.11 0 00-.66.22l-1.69 1.17a1.13 1.13 0 01-1.31 0L9.75 2.22a1.11 1.11 0 00-1.55.16 1.07 1.07 0 00-.2.38L7.41 4.7a1.09 1.09 0 01-1 .76h-2a1.11 1.11 0 00-1.16 1.06 1.34 1.34 0 00.06.4l.63 1.82a1.1 1.1 0 01-.4 1.26L2 11.11a1.1 1.1 0 00-.26 1.53 1.28 1.28 0 00.26.26L3.53 14a1.09 1.09 0 01.4 1.25l-.62 1.8a1.11 1.11 0 00.7 1.4 1.07 1.07 0 00.35.06h2a1.09 1.09 0 011 .76l.64 2a1.12 1.12 0 001.1.73 1.05 1.05 0 00.64-.22l1.6-1.17a1.1 1.1 0 011.31 0l1.6 1.17a1.14 1.14 0 001.75-.55l.62-1.93a1.11 1.11 0 011.05-.76h2a1.11 1.11 0 001.11-1.11 1 1 0 00-.06-.35l-.63-1.82a1.11 1.11 0 01.38-1.26L22 12.89a1.07 1.07 0 00.5-.89 1.1 1.1 0 00-.5-.9zM7 11v-1h10v1zm2 3v-1h6v1z"></path>
    </svg>
  );
};

const ChartSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mr-2"
      width="16"
      height="16"
      focusable="false"
    >
      <path d="M23 20v1H1v-1zM8 9H2v10h6zm7-6H9v16h6zm7 11h-6v5h6z"></path>
    </svg>
  );
};

const ChatSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      data-supported-dps="16x16"
      fill="currentColor"
      className="mr-1"
      width="13"
      height="13"
      focusable="false"
    >
      <path d="M5 8h5v1H5zm11-.5v.08a6 6 0 01-2.75 5L8 16v-3H5.5A5.51 5.51 0 010 7.5 5.62 5.62 0 015.74 2h4.76A5.5 5.5 0 0116 7.5zm-2 0A3.5 3.5 0 0010.5 4H5.74A3.62 3.62 0 002 7.5 3.53 3.53 0 005.5 11H10v1.33l2.17-1.39A4 4 0 0014 7.58zM5 7h6V6H5z"></path>
    </svg>
  );
};

const DotsSVG = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      data-supported-dps="24x24"
      fill="currentColor"
      className="mr-2"
      width="16"
      height="16"
      focusable="false"
    >
      <path d="M14 12a2 2 0 11-2-2 2 2 0 012 2zM4 10a2 2 0 102 2 2 2 0 00-2-2zm16 0a2 2 0 102 2 2 2 0 00-2-2z"></path>
    </svg>
  );
};