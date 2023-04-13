import React from "react";
import { Button, ButtonGroup } from "reactstrap";
import "./Books.css";
import oneBook from "./oneBook.jpg";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

const Books = () => {
  return (
    <div
      className="main bg-light"
      style={{
        width: "100%",
        height: "100vh",
        overflowX: "hidden",
      }}
    >
      <div className="row">
        <div className="col-12">
          <h1 style={{ textTransform: "uppercase", textAlign: "center" }}>
            take a look
          </h1>
        </div>
        <div className="col-12 d-flex justify-content-center my-3">
          <Button
            color="dark"
            outline
            style={{ position: "static", margin: "1rem" }}
          >
            Add New Book
          </Button>
        </div>
        <div
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
            <h4>title</h4>
            <p id="sci">author : Qasim M</p>
            <p id="sci">No. of Pages : 99</p>
            <p id="sci">Published : 00/00/00</p>
            <div className="d-flex mt-4" style={{ marginBottom: "-5rem" }}>
              <ButtonGroup>
                <Button color="light">
                  <EditIcon />
                </Button>
                <Button color="light">
                  <DeleteIcon />
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Books;
