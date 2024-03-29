import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import dine from "../../Assets/Projects/dine.png";
import mass2 from "../../Assets/Projects/mass2.png";
import text from "../../Assets/Projects/text.png";
import am from "../../Assets/Projects/AM.png";
import mass from "../../Assets/Projects/mass.png";
import resto from "../../Assets/Projects/resto.png";
import sign from "../../Assets/Projects/sign.png";
import ind from "../../Assets/Projects/ind.png";
import estate from "../../Assets/Projects/RE.png";
import grocery from "../../Assets/Projects/bud.png";
import medic from "../../Assets/Projects/medic.png";
import imdb from "../../Assets/Projects/imdb.png"


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
              imgPath={am}
              isBlog={false}
              title="AM distributor"
              description="This website consist on 5 pages and different products build using HTML5,CSS3 and JavaScript. Dark mode can also enable.
              This website consist on multiple pages can also used for other large industry.With this site you can also do ecommerce with add on some backend work which i will do for you."
              link="https://github.com/Rashidhussain547/AM-distributors"
              link2="http://am-event.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resto}
              isBlog={false}
              title="Resto."
              description="I create this web using material UI and javaScript for online ordering front end design.Use as your products depending on."
              link="https://github.com/Rashidhussain547/RESTO.d"
              link2="https://rashidhussain547.github.io/RESTO.d/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={text}
              isBlog={false}
              title="Texutils reactApp"
              description="This app is based on ReactJs so you can use it to capatilize,lowercase and more.Dark mode can also enable.You can captalize your paragraph,smallcase,uppercase,copytext,this app tell you about an average time to read the para which yo typed which is amazing feature."
              link="https://github.com/Rashidhussain547/TextUtils"
              link2="https://rashidhussain547.github.io/TextUtils/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dine}
              isBlog={false}
              title="Dine out"
              description="I create this web using material UI and javaScript for online ordering front end design.Use as your products depending on."
              link="https://github.com/Rashidhussain547/Dine-out"
              link2="https://rashidhussain547.github.io/Dine-out/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mass}
              isBlog={false}
              title="Massveritas"
              description="This is my first website for my client.This web is based on reactjs which is most popular library of javascript now a days.Multiple pages contain this web and also responsive and decent template for your business web."
              link2="https://masveritas.net/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mass2}
              isBlog={false}
              title="MassVeritas temp2"
              description="This web is based on simple html5,css3,javascript and bootstarp 5.I convert this from PSD to HTML5."
              link="https://github.com/Rashidhussain547/Mas-veritas"
              link2="https://rashidhussain547.github.io/Mas-veritas/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ind}
              isBlog={false}
              title="Industry"
              description="React based web,single page website but in services it consist on multiple."
              link="https://github.com/Rashidhussain547/Ind."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={sign}
              isBlog={false}
              title="Signup page with validation"
              description="Sign up form with complete validation and regular expression for user guid."
              link="https://github.com/Rashidhussain547/Sign-up-form"
              link2="https://rashidhussain547.github.io/Sign-up-form/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdb}
              isBlog={false}
              title="IMDB clone"
              description="Its a imdb clone which create on react and also use API."
              link="https://github.com/Rashidhussain547/Imdb-clone"
              link2="https://imdb-clone-peach-rho.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={estate}
              isBlog={false}
              title="Real estate business website but it is not responsive"
              description="Its a university assignment just make a layout which was assined by class teacher."
              link="https://github.com/Rashidhussain547/Web-template"
              link2="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
             
              isBlog={false}
              title="Accounting project"
              description="Its a university project based on accounting and we use some functionality to perform or create balance sheet ,
              general entries and more calloborate with classmate Aman."
              link="https://github.com/Rashidhussain547/Accounting"
              link2="#"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={grocery}
              isBlog={false}
              title="Grocery Bud"
              description="It just like a to do list for listing your grocery items and more."
              link="https://github.com/Rashidhussain547/Grocery-Bud"
              link2="https://rashidhussain547.github.io/Grocery-Bud/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medic}
              isBlog={false}
              title="Medic care clinic website"
              description="Its a clinic information website with complete responsive."
              link="https://github.com/Rashidhussain547/Medic-care"
              link2="https://rashidhussain547.github.io/Medic-care/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              
              isBlog={false}
              title="GPA calculator using C#"
              description="Its a gpa calculator for University students i create for my department UBIT."
              link="https://github.com/Rashidhussain547/Gpa-calculator"
              link2="#"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
