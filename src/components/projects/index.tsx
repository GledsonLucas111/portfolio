import { TypographyStyle } from "pages/home/style";
import { Project } from "types/project";
import { buttonLink, GridProjects, Nav, style, typografy } from "./style";
import imac from "assets/imac.png";
import ipad from "assets/ipad.png";
import macbook from "assets/macbook.png";
import { Button, Typography } from "@mui/material";

const projects: Project[] = [
  {
    name: "Future Eats",
    description:
      "Projeto desenvolvido conforme proposta do bootcamp ministrado pela Labenu baseado em React JS, para o desenvolvimento de um web site para dispositivos mobile inspirado no Uber Eats. O projeto simula uma plataforma de entrega de refeições e alimentos online.",
    link: "https://github.com/GledsonLucas111/Vaughan-labe-food4",
    image: imac,
  },
  {
    name: "Pokedex",
    description:
      "Projeto desenvolvido conforme proposta do bootcamp ministrado pela Labenu baseado em React JS, para o desenvolvimento de um web site inspirado na Pokédex do anime Pokémon. Nele você pode criar sua própria pokédex com os seus pokémons preferidos.",
    link: "https://github.com/GledsonLucas111/Vaughan-pokedex3",
    image: ipad,
  },
  {
    name: "LabEddit",
    description:
      "Projeto desenvolvido no Curso Labenu de uma plataforma de rede social baseada no reddit, recebendo a API LabEddit, com página de Login, Cadastro, Feed e Detalhes do Post e seus comentários.",
    link: "https://github.com/GledsonLucas111/LabEddit",
    image: macbook,
  },
];
export default function Projects() {
  return (
    <div>
      <Typography variant="h5" sx={typografy} fontWeight="bold">
        Meus projetos
      </Typography>

      {projects.map((project) => {
        return (
          <Nav key={project.name} color={project.name}>
            <GridProjects>
              <div className="projectImg">
                <img src={project.image} alt={project.name} />
              </div>
              <div>
                <TypographyStyle variant="h4" fontWeight="bold">
                  {project.name}
                </TypographyStyle>
                <TypographyStyle margin="15px 0px 15px">
                  {project.description}
                </TypographyStyle>
                <Button href={project.link} sx={buttonLink} target="_blank">
                  Ver no github
                </Button>
              </div>
            </GridProjects>
          </Nav>
        );
      })}
      <Button
        sx={style}
        href="https://github.com/GledsonLucas111?tab=repositories"
        target="_blank"
      >
        Mais projetos
      </Button>
    </div>
  );
}
