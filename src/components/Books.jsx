import React, { useState } from "react";
import {
  Button,
  ButtonGroup,
  Modal,
  ModalHeader,
  ModalBody,
  FormGroup,
  Col,
  Label,
  Input,
  Form,
} from "reactstrap";
import "./Books.css";
import oneBook from "./oneBook.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  useAddBookMutation,
  useDeleteBookMutation,
  useGetAllBooksQuery,
} from "../features/booksSlice";
import { useNavigate } from "react-router-dom";
import { Spinner } from "reactstrap";

const Books = (args) => {
  const { data: getAllBooksData } = useGetAllBooksQuery();
  const [deleteBook] = useDeleteBookMutation();
  const [modal, setModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [addBook] = useAddBookMutation();
  const navigate = useNavigate();

  const handleAddBook = async (event) => {
    event.preventDefault();

    const {
      title: { value: title },
      author: { value: author },
      pages: { value: pages },
      published: { value: published },
    } = event.target.elements;

    setLoading(true);
    await addBook({
      title,
      author,
      pages,
      published,
    });
    setLoading(false);
    toggle();
  };

  const handleDeleteBook = async (bookId) => {
    setLoading(true);
    await deleteBook(bookId);
    setLoading(false);
    window.location.reload();
  };
  const toggle = () => setModal(!modal);

  return (
    <div
      className="main bg-light"
      style={{
        width: "100%",
        // height: "100vh",
        overflowX: "hidden",
      }}
    >
      {loading && (
        <div
          className="d-flex justify-content-center align-items-center"
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: "rgba(0, 0, 0, 0.5)",
            zIndex: 10000,
          }}
        >
          <Spinner color="light" />
        </div>
      )}
      <div className="row">
        <div className="col-12 mt-5">
          <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
            Books
          </h1>
        </div>
        <div className="col-12 d-flex justify-content-center mb-2 mt-4">
          <Button
            color="dark"
            outline
            style={{ position: "static", margin: "1rem" }}
            onClick={toggle}
          >
            Add New Book
          </Button>
        </div>
        <div className="col-12 d-flex justify-content-center my-5">
          <div className="container row gap-5 d-flex justify-content-center">
            {getAllBooksData?.books.map((book) => {
              return (
                <div
                  key={book._id}
                  className="col-3 HoverRow"
                  style={{
                    background: `url(${oneBook})`,
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}
                >
                  <div
                    className="overlay"
                    style={{
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      backgroundColor: "rgba(0, 0, 0, 0.4)",
                      zIndex: 1,
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <h4>{book.title}</h4>
                    <p id="sci">Author : {book.author}</p>
                    <p id="sci">Pages : {book.pages}</p>
                    <p id="sci">Publ. : {book.published}</p>
                    <div
                      className="d-flex mt-4"
                      style={{ marginBottom: "-5rem" }}
                    >
                      <ButtonGroup>
                        <Button
                          color="light"
                          onClick={() => {
                            navigate(`/books/book/${book._id}`);
                            console.log(book);
                          }}
                        >
                          <EditIcon />
                        </Button>
                        <Button
                          color="light"
                          onClick={() => {
                            handleDeleteBook(book._id);
                            window.location.reload();
                          }}
                        >
                          <DeleteIcon />
                        </Button>
                      </ButtonGroup>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/* Add Book Modal______________ */}
      <div>
        <Modal isOpen={modal} toggle={toggle} {...args} centered>
          <ModalHeader toggle={toggle}>Add a new Book</ModalHeader>
          <ModalBody>
            <Form onSubmit={handleAddBook}>
              <FormGroup row>
                <Label for="title" sm={2}>
                  Book
                </Label>
                <Col sm={10}>
                  <Input
                    id="title"
                    name="title"
                    placeholder="Enter Book Title"
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="author" sm={2}>
                  Author
                </Label>
                <Col sm={10}>
                  <Input
                    id="author"
                    name="author"
                    placeholder="Enter Author Name"
                    type="text"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="pages" sm={2}>
                  Total Pages
                </Label>
                <Col sm={10}>
                  <Input
                    id="pages"
                    name="pages"
                    placeholder="Enter Number of Pages"
                    type="number"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Label for="published" sm={2}>
                  Published
                </Label>
                <Col sm={10}>
                  <Input id="published" name="published" type="date" />
                </Col>
              </FormGroup>
              <FormGroup className="d-flex justify-content-center mt-4">
                <ButtonGroup>
                  <Button
                    color="primary"
                    type="submit"
                    onClick={() => {
                      window.location.reload();
                    }}
                  >
                    Confirm
                  </Button>
                  <Button color="secondary" onClick={toggle}>
                    Cancel
                  </Button>
                </ButtonGroup>
              </FormGroup>
            </Form>
          </ModalBody>
        </Modal>
      </div>
    </div>
  );
};

export default Books;
