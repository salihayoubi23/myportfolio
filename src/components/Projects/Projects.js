import React from "react";
import { Container, Row, Col, Form } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import sophie from "../../Assets/Projects/sophiebluelcover.webp";
import nina from "../../Assets/Projects/ninacover.webp";
import kasa from "../../Assets/Projects/kasa.webp";
import ArgentBank from "../../Assets/Projects/argentbankcover.webp";
import Billed from "../../Assets/Projects/billed-projects.png";
import Reservation from "../../Assets/Projects/Reservation .png"
import recherche from "../../Assets/Projects/lespetisplat.png"

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={kasa}
              isBlog={false}
              title="kasa "
              description="une application web de location immobilière avec React,Dans ce projet, j'ai implémenter le front-end d’une application en utilisant React et React Router pour créer une expérience utilisateur moderne et réactive."
              ghLink="https://github.com/salihayoubi23/kasap11"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Billed}
              isBlog={false}
              title="Correction de bug "
              description="L’objectif de ce projet est de comprendre l’importance des tests dans le développement d’applications front-end et des techniques de debugging pour gagner en efficacité lors de la correction de code buggé. ."
              ghLink="https://github.com/salihayoubi23/Billed"
              demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ArgentBank}
              isBlog={false}
              title="prototype d'un site bancaire "
              description="construire une application React à partir de zéro. gérer Redux pour gérer le state global de l’application. interagir avec une API existante tout en utilisant des tokens JWT pour l'authentification."
              ghLink="https://github.com/salihayoubi23/Project-10-Bank-API"
              demoLink=""              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={recherche}
              isBlog={false}
              title="algorithme de recherche "
              description="développement d'un algorithme de recherche pour une plateforme de recettes de cuisine.les méthodes utilisé sont JavaScript, ainsi que Bootstrap pour l'interface.
               la création d'une interface intuitive et réactive pour la fonction de recherche des recettes.
              développement d'un algorithme de recherche, capables de parcourir et de filtrer efficacement un fichier JSON." 
              ghLink="https://github.com/salihayoubi23/Front-End-Fisheye"
              demoLink="" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Reservation}
              isBlog={false}
              title="systeme de gestion de reservation "
              description=" développement de  la page de présentation des seances de sport proposé. Cela impliquela gestion des événements utilisateurs et la manipulation des éléments du DOM avec JavaScript,
               également une page de connexion pour pouvoir visualiser ses reservations et effectuer d'autres reservations . 
               développés from scratch,avec un developpement integrale du code back-end  communiquer avec l'API. et mongodb pour stoker les utilisateur et leur reservations 
              J'ai utiliser Figma pour accéder aux maquettes, Visual Studio Code pour le développement, et GitHub pour la gestion de version de projet."
              ghLink="https://github.com/salihayoubi23/athleticfrontend"
               demoLink="https://athletic-men.vercel.app/"
            />
          </Col>

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
