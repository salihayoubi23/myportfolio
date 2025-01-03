import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Bonjour à tous, je m'appelle <span className="purple">Saliha Youbi Benayad</span> 
            et je viens de <span className="purple">Vénissieux, France</span>.
            <br />
            Je travaille actuellement en tant que développeuse et mentor chez OpenClassrooms.
            <br />
            Je suis passionnée par le développement d'applications et par l'accompagnement des apprenants dans leur parcours.
            <br />
            <br />
            En dehors du code, voici quelques activités que j'aime pratiquer !
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> activités en famille 
            </li>
            <li className="about-activity">
              <ImPointRight /> basketball et sport d'équipe
            </li>
            <li className="about-activity">
              <ImPointRight /> Voyager
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            " Ne jamais abondonner et toujours chercher à devenir meilleur !"{" "}
          </p>
          <footer className="blockquote-footer">Saliha</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
