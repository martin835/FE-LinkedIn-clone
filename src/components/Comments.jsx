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
  const [showComments, setShowComments] = useState(false);
  const [showAddComment, setShowAddComment] = useState(false);
  const [newComment, setNewComment] = useState({
    comment: "",
    rate: "",
    elementId: "",
  });
  const [isLoading, setIsLoading] = useState(true);

  const loadComments = async () => {
    console.log("i am mounted");
    let asin = props.asin;

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/" + asin,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDUxMTYxNTgsImV4cCI6MTY0NjMyNTc1OH0.Z16gZiLDU6QjnSTxxpV46698wp9z7c5rUkjwB965R_s",
          },
        }
      );
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

  const unHideComments = () => {
    showComments ? setShowComments(false) : setShowComments(true);
  };

  const postComment = async (e) => {
    e.preventDefault();
    console.log("I post");

    newComment.rate = document.getElementById("ratingValue").value;
    newComment.comment = document.getElementById("commentValue").value;
    newComment.elementId = props.asin;

    console.log(newComment);

    try {
      let response = await fetch(
        "https://striveschool-api.herokuapp.com/api/comments/",
        {
          method: "POST",
          body: JSON.stringify(newComment),
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDUxMTYxNTgsImV4cCI6MTY0NjMyNTc1OH0.Z16gZiLDU6QjnSTxxpV46698wp9z7c5rUkjwB965R_s",
          },
        }
      );
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
        "https://striveschool-api.herokuapp.com/api/comments/" + e.target.id,
        {
          method: "DELETE",
          headers: {
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MWZhNjQ0NTgyZWExZDAwMTViYjAzZWEiLCJpYXQiOjE2NDUxMTYxNTgsImV4cCI6MTY0NjMyNTc1OH0.Z16gZiLDU6QjnSTxxpV46698wp9z7c5rUkjwB965R_s",
          },
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
      <Button
        variant="link"
        className="mb-2"
        onClick={() => {
          unHideComments();
          loadComments();
        }}
      >
        <i className="bi bi-list mr-2"></i>Show comments
      </Button>
      {showComments && (
        <ListGroup>
          {isLoading && <Spinner animation="border" variant="primary" />}
          {bookComments == 0 ? (
            <ListGroup.Item>No Comments for this book :( </ListGroup.Item>
          ) : (
            bookComments.map((comment) => (
              <ListGroup.Item key={comment._id}>
                <i>"{comment.comment}"</i>
                <Button variant="link" id={comment._id} onClick={deleteComment}>
                  <i className="bi bi-trash3"></i>Delete
                </Button>
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
                <Form.Group className="mb-3" controlId="ratingValue">
                  <Form.Label>Rating:</Form.Label>
                  <Form.Control
                    type="number"
                    placeholder="add rating from 1-5"
                  />
                </Form.Group>
                <Form.Group className="mb-3" controlId="commentValue">
                  <Form.Label>Example textarea</Form.Label>
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
