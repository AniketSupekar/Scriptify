import React, { useState, useEffect } from "react";
import { Row, Col, Container } from "react-bootstrap";
import Editor from "./WebEditor/Editor";
import Footer from "./Footer";
import { useLocalStorage } from "../Hooks/LocalStorage";
import "bootstrap/dist/css/bootstrap.min.css";
import "../App.css";

function LaunguageManager() {
  const getBlobURL = (code, type) => {
    const blob = new Blob([code], { type });
    return URL.createObjectURL(blob);
  };

  const htmlDefault = `<div class="d-flex flex-column justify-content-center w-100 h-100">
	<div class="d-flex flex-column justify-content-center align-items-center">
		<h1 class="fw-light text-white m-0">
  <span>always be</span>
  <div class="message">
    <div class="word1">curious</div>
    <div class="word2">calm</div>
    <div class="word3">creating</div>
  </div>
</h1>
</div>
</div>
</div>`;

  const cssDefault = `body {
    background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
    background-size: 400% 400%;
    animation: gradient 15s ease infinite;
    height: 100vh;
  }
  
  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
  }
  h1 {
    color: #333;
    font-family: tahoma;
    font-size: 3rem;
    font-weight: 100;
    line-height: 1.5;
    text-transform: uppercase;
    white-space: nowrap;
    overflow: hidden;
    position: relative;
    width: 550px;
  }
  
  h1 span {
    font-size: 40px;
    margin-left: 40px;
  }
  
  .message {
    background-color: yellow;
    color: #333;
    display: block;
    font-weight: 900;
    overflow: hidden;
    position: absolute;
    padding-left: 0.5rem;
    top: 0.2rem;
    left: 270px;
    animation: openclose 5s ease-in-out infinite;
  }
  
  .word1, .word2, .word3 {
    font-family: tahoma;
  }
  
  @keyframes openclose {
    0% {
      top: 0.2rem;
      width: 0;
    }
    5% {
      width: 0;
    }
    15% {
      width: 230px;
    }
    30% {
      top: 0.2rem;
      width: 230px;
    }
    33% {
      top: 0.2rem;
      width: 0;
    }
    35% {
      top: 0.2rem;
      width: 0;
    }
    38% {
      top: -4.5rem;
      
    }
    48% {
      top: -4.5rem;
      width: 190px;
    }
    62% {
      top: -4.5rem;
      width: 190px;
    }
    66% {
      top: -4.5rem;
      width: 0;
      text-indent: 0;
    }
    71% {
      top: -9rem;
      width: 0;
      text-indent: 5px;
    }
    86% {
      top: -9rem;
      width: 285px;
    }
    95% {
      top: -9rem;
      width: 285px;
    }
    98% {
      top: -9rem;
      width: 0;
      text-indent: 5px;
    }
    100% {
      top: 0;
      width: 0;
      text-indent: 0;
    }
  }
  `;

  const [htmlVal, updateHtmlStrorage] = useLocalStorage("html", htmlDefault);
  const [cssVal, updateCssStrorage] = useLocalStorage("css", cssDefault);
  const [jsVal, updateJsStrorage] = useLocalStorage("js", "");

  const [html, updateHtml] = useState(htmlVal);
  const [css, updateCss] = useState(cssVal);
  const [js, updateJs] = useState(jsVal);

  const cssURL = getBlobURL(css, "text/css");
  const jsURL = getBlobURL(js, "text/javascript");

  const srcDoc = `
      <!DOCTYPE html>
      <html>
      <head>
      ${css && `<link rel="stylesheet" type="text/css" href="${cssURL}" />`}
      <script src="https://code.jquery.com/jquery-3.5.1.min.js"
      integrity="sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=" crossorigin="anonymous"></script>
      </head>
        <body>${html}
        ${js && `<script src="${jsURL}"></script>`}
        </body>
      </html>`;

  useEffect(() => {
    setTimeout(() => {}, 500);
    updateHtmlStrorage(html);
    updateCssStrorage(css);
    updateJsStrorage(js);
  }, [html, css, js]);

  return (
    <div>
      <Container fluid={true} className="pane pane-top">
        <Row noGutters={true}>
          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-html5"> </i> Html
            </div>
            <Editor
              launguage="xml"
              value={html}
              onChange={(newVal) => {
                updateHtml(newVal);
              }}
            />
          </Col>

          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-css3-alt"></i> Css
            </div>
            <Editor
              launguage="css"
              value={css}
              onChange={(newVal) => {
                updateCss(newVal);
              }}
            />
          </Col>

          <Col md={4} className="editor-lang">
            <div className="editor-text">
              <i className="fab fa-js-square"></i> Js
            </div>
            <Editor
              launguage="javascript"
              value={js}
              onChange={(newVal) => {
                updateJs(newVal);
              }}
            />
          </Col>
        </Row>
      </Container>

      <Container fluid={true} className="pane pane-bottom">
        <Row noGutters={true}>
          <iframe
            srcDoc={srcDoc}
            className="output-pane"
            allowFullScreen
          ></iframe>
        </Row>
      </Container>

      <Footer />
    </div>
  );
}

export default LaunguageManager;
