import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/mi.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              PERMETTEZ-MOI DE ME <span className="purple"> PRÉSENTER </span>
            </h1>
            <p className="home-about-body">
              Je m'appelle Saliha Youbi Benayad, développeuse d'applications spécialisée en{" "}
              <i>
                <b className="purple">JavaScript</b> et <b className="purple">React</b>.
              </i>
              <br />
              <br />
              J'ai également de l'expérience en <b className="purple">Java</b> et je suis 
              <b className="purple"> mentor et évaluatrice </b> chez OpenClassrooms.
              <br />
              <br />
              Je suis passionnée par le développement de nouvelles 
              <b className="purple"> technologies web </b> et j'aime créer des produits innovants.
              <br />
              <br />
              Quand je le peux, j'applique mes compétences en développant des projets 
              avec <b className="purple">Node.js</b> et des frameworks modernes comme 
              <b className="purple"> React.js et Next.js</b>.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>RETROUVEZ-MOI SUR</h1>
            <p>
              N'hésitez pas à <span className="purple">me contacter</span>
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/salihayoubi"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/salihayoubi/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
