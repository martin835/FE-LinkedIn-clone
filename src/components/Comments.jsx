import { Component } from "react";
import {
  ListGroup,
  Button,
  ListGroupItem,
  Form,
  Spinner,
} from "react-bootstrap";
import { useState, useEffect } from "react";

const Comments = (props) => {
  /* state = {
        bookComments: [],
        showComments: false,
        showAddComment: false,
        newComment: {
            comment: "",
            rate: "",
            elementId: ""
        },
        isLoading: true
    } */

  const [bookComments, setBookComments] = useState([]);
  //const [showComments, setShowComments] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);
  const [newComment, setNewComment] = useState({
    comment: "",
    profile: "",
  });
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    loadComments();
  }, [props.showComments]);

  const url = `${process.env.REACT_APP_LOCAL}/posts`;

  const loadComments = async () => {
    console.log("i am mounted");
    let postId = props.postId; //NEED postId HERE

    try {
      let response = await fetch(`${url}/${postId}/comments`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        /* console.log(data) */
        /* this.setState({
              bookComments: data,
              isLoading: false
            }); */

        setBookComments(data);
        setIsLoading(false);
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
    }
  };

  //   const unHideComments = () => {
  //     showComments ? setShowComments(false) : setShowComments(true);
  //   };

  const postComment = async (e) => {
    e.preventDefault();
    console.log("I post");

    // newComment.rate = document.getElementById("ratingValue").value;
    newComment.comment = document.getElementById("commentValue").value;
    newComment.profile = props.currentAccount;
    //newComment.elementId = props.asin;

    console.log(newComment);

    try {
      let response = await fetch(`${url}/${props.postId}/comments`, {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        loadComments();
        /* this.setState({ showAddComment: false }); */
        setShowAddComment(false);
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteComment = async (e) => {
    e.preventDefault();
    console.log("I DELETE");
    console.log(e.target.id);

    try {
      let response = await fetch(
        `${url}/${props.postId}/comments/` + e.target.id,
        {
          method: "DELETE",
        }
      );
      if (response.ok) {
        let data = await response.json();
        console.log(data);
        loadComments();
      } else {
        // alert('something went wrong :(')
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      {/*    <Button
        variant="link"
        className="mb-2"
        onClick={() => {
          unHideComments();
          loadComments();
        }}
      >
        <i className="bi bi-list mr-2"></i>Show comments
      </Button> */}
      {props.showComments && (
        <ListGroup>
          {isLoading && <Spinner animation="border" variant="primary" />}
          {bookComments == 0 ? (
            <ListGroup.Item>No Comments for this post :( </ListGroup.Item>
          ) : (
            bookComments.map((comment) => (
              <ListGroup.Item key={comment._id}>
                <i>"{comment.comment}"</i>
                <Button variant="link" id={comment._id} onClick={deleteComment}>
                  <i className="bi bi-trash3"></i>Delete
                </Button>
                <div>Author: {comment.profile.name} </div>
              </ListGroup.Item>
            ))
          )}
          <ListGroupItem>
            <Button
              variant="link"
              onClick={() =>
                showAddComment
                  ? setShowAddComment(false)
                  : setShowAddComment(true)
              }
            >
              <i className="bi bi-plus-lg"></i>Add Comment
            </Button>
          </ListGroupItem>
          {showAddComment && (
            <ListGroupItem className="px-0">
              <Form onSubmit={postComment}>
                {/*      <Form.Group className="mb-3" controlId="ratingValue">
                  <Form.Label>Rating:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="add rating from 1-5"
                  />
                </Form.Group> */}
                <Form.Group className="mb-3" controlId="commentValue">
                  <Form.Label>Write a comment</Form.Label>
                  <Form.Control as="textarea" rows={3} />
                </Form.Group>
                <Button variant="link" type="submit">
                  <i className="bi bi-envelope mr-2"></i>Send Comment
                </Button>
              </Form>
            </ListGroupItem>
          )}
        </ListGroup>
      )}
    </div>
  );
};

export default Comments;
