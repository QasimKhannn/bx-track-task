import React from "react";
import backImage from "./books.jpg";
import { Button } from "reactstrap";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  return (
    <div
      className="home"
      style={{
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div
        className="overlay"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(0, 0, 0, 0.6)",
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div className="row">
          <div className="col-12">
            <h1
              style={{
                color: "white",
                textAlign: "center",
                fontSize: "100px",
                pointerEvents: "none",
              }}
            >
              The Library
            </h1>
          </div>
          <div className="col-12 d-flex justify-content-center">
            <Button
              className="my-4"
              color="light"
              size="lg"
              style={{ textTransform: "uppercase" }}
              onClick={() => {
                navigate("/books");
              }}
            >
              check out books
            </Button>
          </div>
        </div>
      </div>
      <div
        className="background-image"
        style={{
          height: "100%",
          width: "100%",
          background: `url(${backImage})`,
          backgroundSize: "cover",
          zIndex: 0,
        }}
      ></div>
    </div>
  );
};

export default Home;
