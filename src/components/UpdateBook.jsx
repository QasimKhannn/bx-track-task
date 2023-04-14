import React from "react";
import {
  Button,
  ButtonGroup,
  FormGroup,
  Col,
  Label,
  Input,
  Form,
} from "reactstrap";
import {
  useGetOneBookQuery,
  useUpdateBookMutation,
} from "../features/booksSlice";
import { useNavigate, useParams } from "react-router-dom";

const UpdateModal = () => {
  const { id } = useParams();
  const { data } = useGetOneBookQuery(id);
  const [updateBook] = useUpdateBookMutation();
  const navigate = useNavigate()

  const handleUpdate = (event) => {
    event.preventDefault();

    const {
      title: { value: title },
      author: { value: author },
      pages: { value: pages },
      published: { value: published },
    } = event.target.elements;
    updateBook({
      id: data?.book._id,
      payload: {
        title: title,
        author: author,
        pages: pages,
        published: published,
      },
    });
    navigate("/books")
    // console.log(id);
  };
  return (
    <div className="container bg-light" style={{height:"100vh", width:"100vw", display:"flex", justifyContent:"center", alignItems:"center"}}>
      <Form onSubmit={handleUpdate} style={{ width:"60%"}}>
        <FormGroup row>
          <Label for="title" sm={2}>
            Book
          </Label>
          <Col sm={10}>
            <Input
              id="title"
              name="title"
              type="text"
              defaultValue={data?.book?.title}
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
              type="text"
              defaultValue={data?.book?.author}
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
              type="number"
              defaultValue={data?.book?.pages}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="published" sm={2}>
            Published
          </Label>
          <Col sm={10}>
            <Input
              id="published"
              name="published"
              type="date"
              defaultValue={data?.book?.published}
            />
          </Col>
        </FormGroup>
        <FormGroup className="d-flex justify-content-center mt-4">
          <ButtonGroup>
            <Button color="primary" type="submit">
              Confirm
            </Button>
          </ButtonGroup>
        </FormGroup>
      </Form>
    </div>
  );
};

export default UpdateModal;
