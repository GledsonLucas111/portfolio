import * as React from "react";
import {
  AboutCourse,
  BoxAboutMe,
  buttonCV,
  Contact,
  Container,
  footer,
  Icons,
  Nav,
  Stacks,
  stackStyle,
  textStyle,
  TypographyStyle,
} from "./style";
import { Button } from "@mui/material";
import { technologies } from "constants/technologies";
import { Technologies } from "types/techType";
import { background } from "constants/colors";
import Lottie from "react-lottie";
import animationData from "./animation.json";
import Projects from "components/projects";
import email from "assets/email.svg";
import { Email, Github, Instagram, Linkedin, Whatsapp } from "icons/icons";
import Header from "components/header";

export default function Home() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <Header />
      <Nav sx={{ backgroundColor: `${background}` }}>
        <BoxAboutMe id="aboutMe">
          <div>
            <TypographyStyle variant="h3" fontWeight="bold">
              <TypographyStyle variant="h3" fontWeight="bold">
                Eu sou
              </TypographyStyle>
              Gledson Lucas
            </TypographyStyle>
            <TypographyStyle variant="h5">
              Desenvolvedor Web Full Stack
            </TypographyStyle>
            <TypographyStyle variant="body1">
              Apaixonado por tecnologia e programação.
            </TypographyStyle>
            <TypographyStyle variant="body2" margin="50px 0px 20px">
              Desenvolvedor web full-stack, formado pelo bootcamp Labenu. Um
              sonhador em busca do aperfeiçoamento diário. Entusiasta da
              tecnologia. Quero estar constantemente aprimorando meus
              conhecimentos, e colocando em pratica tudo que já sei para tentar
              simplificar a vida das pessoas.
            </TypographyStyle>
            {technologies.map((technologie: Technologies) => {
              return <Button>{technologie.name}</Button>;
            })}
            <Button
              href="https://drive.google.com/file/d/11wbrwqWk1lCvlDWjKnS0Cstuyzfln37b/view?usp=drivesdk"
              target="_blank"
              sx={buttonCV}
            >
              CV em PDF
            </Button>
          </div>
          <div className="animation">
            <Lottie options={defaultOptions} width="30vw" />
          </div>
        </BoxAboutMe>
      </Nav>
      <Nav sx={{ backgroundColor: `#1b818c` }}>
        <TypographyStyle variant="h5" margin="20px 0px 20px" fontWeight="bold">
          Meus conhecimentos
        </TypographyStyle>
        <Stacks>
          <div>
            <TypographyStyle variant="h3" sx={stackStyle}>
              Front-end
            </TypographyStyle>
            <TypographyStyle sx={textStyle}>
              Desenvolvimento de aplicações web utilizando HTML, CSS e
              JavaScript. Criação de sites responsivos seguindo princípio de
              Mobile First.
            </TypographyStyle>
          </div>
          <div>
            <TypographyStyle variant="h3" sx={stackStyle}>
              Back-end
            </TypographyStyle>
            <TypographyStyle sx={textStyle}>
              Aplicações utilizando NodeJS, Typescript e MySQL. Criação de API's
              para comunicação com front-end seguindo princípio de Clean Code.
            </TypographyStyle>
          </div>
        </Stacks>
      </Nav>
      <Nav sx={{ backgroundColor: `#024159` }}>
        <TypographyStyle variant="h5" margin="20px 0px 20px" fontWeight="bold">
          Educação
        </TypographyStyle>
        <TypographyStyle
          variant="h4"
          margin="0px 0px 20px"
          sx={{
            width: "90%",
            display: "inline-flex",
            justifyContent: "center",
          }}
        >
          Curso de Web Full Stack na Labenu
        </TypographyStyle>
        <AboutCourse>
          <TypographyStyle margin="0px 0px 50px">
            <TypographyStyle>6 meses - 2020</TypographyStyle>
            Programa com mais de 1000 horas de experiência prática em
            desenvolvimento Full-stack, guiadas por metodologias ágeis
            (Kanban/Scrum). Entre as habilidades aprendidas durante o curso
            estão HTML, CSS, JavaScript, React, Styled-Components, React Hooks,
            REST, Api Restful, HTTP, Jest, Node.JS, Knex, TypeScript, Banco de
            dados, AWS, SQL, Git, Github, Firebase, Testes unitários e UI
            Design.
          </TypographyStyle>
        </AboutCourse>
      </Nav>
      <div id="projects">
        <Projects />
      </div>
      <Nav sx={{ backgroundColor: `#1b818c` }}>
        <Contact id="contact">
          <img src={email} alt="icon email" />
          <div>
            <TypographyStyle
              variant="h3"
              fontWeight="600"
              margin="10px 0px 20px"
            >
              Contrate-me!
            </TypographyStyle>
            <TypographyStyle variant="body1" margin="0px 0px 20px">
              Procuro oportunidade de trabalho onde eu possa aprender, me
              desenvolver e evoluir na minha carreia profissional.
            </TypographyStyle>
            <TypographyStyle>Email: gledsonlucas111@gmail.com</TypographyStyle>
            <TypographyStyle>Celular: (86) 98856-1453</TypographyStyle>
          </div>
        </Contact>
        <Icons>
          <a
            href="https://www.linkedin.com/in/gledson-lucas-1b5873166/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin />
          </a>
          <a
            href="https://wa.me/5586988561453"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Whatsapp />
          </a>
          <a
            href="https://github.com/GledsonLucas111"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github />
          </a>
          <a
            href="https://www.instagram.com/gledsonlucasm/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </a>
          <a
            href="mailto:gledsonlucas111@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Email />
          </a>
        </Icons>
      </Nav>

      <TypographyStyle sx={footer}>© 2022 Gledson Lucas</TypographyStyle>
    </Container>
  );
}
