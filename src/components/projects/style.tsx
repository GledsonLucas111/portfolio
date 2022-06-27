import { Box } from "@mui/material";
import styled from "styled-components";

const colors = (color: string | any) => {
  switch (color) {
    case "Future Eats":
      return "#011726";
    case "Pokedex":
      return "#1b818c";
    case "LabEddit":
      return "#025e73";
    default:
      return "#f2f2f2";
  }
};

export const typografy = {
  width: "100%",
  display: "inline-flex",
  justifyContent: "center",
  margin: "10px 0px 10px",
  color: "#00436c",
};

export const Nav = styled(Box)`
  background-color: ${({ color }) => colors(color)};
`;

export const GridProjects = styled(Box)`
  display: grid;
  grid-template-columns: 35vw 35vw;
  justify-content: center;
  justify-items: center;
  align-items: center;
  padding: 30px 0px 30px;
  @media screen and (min-width: 510px) and (max-width: 950px) {
    grid-template-columns: 50vw 45vw;
  }
  @media screen and (min-width: 55px) and (max-width: 630px) {
    grid-template-columns: 90%;
  }
  .projectImg {
    @media screen and (min-width: 55px) and (max-width: 630px) {
      display: none;
    }
  }
`;
export const buttonLink = {
  backgroundColor: "#82d0d9",
};
export const style = {
  width: "100%",
  backgroundColor: "#024159",
  padding: "15px 0px 15px",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#013042",
  },
};
