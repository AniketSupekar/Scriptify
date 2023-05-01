import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import sh1 from "../Assets/p.gif";
import sh2 from "../Assets/p.gif";
import sh3 from "../Assets/shape-3.svg";
import sh6 from "../Assets/shape-6.svg";
import homeImg from "../Assets/main.gif";
import { Link } from "react-router-dom";
import "../App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Home() {
  const wrapper = {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    display: "flex",
    overflow: "hidden",
    position: "relative",
  };

  const shape1 = {
    left: 0,
    right: 0,
    margin: "auto",
    top: "0px",
    right: "380px",
    position: "absolute",
  };

  const shape2 = {
    right: "980px",
    top: "5px",
    position: "absolute",
  };

  const shape3 = {
    right: "1000px",
    bottom: "30px",
    position: "absolute",
  };

  const shape6 = {
    right: "700px",
    bottom: "30px",
    position: "absolute",
  };

  const btnStyle = {
    backgroundColor: "#5c4389",
    border: 0,
  };

  return (
    <div
      style={{ backgroundColor: "#2a283e", minHeight: "100vh", height: "auto" }}
    >
      <Container style={wrapper}>
        <img src={sh1} alt="fig1" style={shape1} className="shape" />
        <img src={sh2} alt="fig2" style={shape2} className="shape" />
        <img src={sh3} alt="fig3" style={shape3} className="shape" />
        <img src={sh6} alt="fig6" style={shape6} className="shape" />
        <Row
          className="text-center"
          style={{
            alignItems: "center",
            paddingTop: "100px",
            paddingBottom: "50px",
          }}
        >
          <Col md={6}>
            <img
              src={homeImg}
              className="img-fluid"
              alt="main img"
              style={{ justifyContent: "center", padding: "30px" }}
            />
          </Col>
          <Col md={6}>
            <h2 style={{ color: "#f0c19e" }}>Code all in one place 👨🏻‍💻</h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
             Scriptify provides a simple and intuitive interface for developers to write and test code in real time. You can write, edit, and preview your code all in one place.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/web">
              Code Editor
            </Button>

            <h2 style={{ color: "#f0c19e", paddingTop: "70px" }}>
              Generate README in Seconds ⌚
            </h2>
            <h5
              style={{
                textAlign: "justify",
                color: "rgb(154 179 205)",
                paddingTop: "10px",
              }}
            >
             Our platform provides an efficient way to generate README files for your software projects. It saves your time and effort, while ensuring that your project is presented in the best possible light.
            </h5>
            <Button variant="primary" style={btnStyle} as={Link} to="/markdown">
              Markdown Editor
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Home;
