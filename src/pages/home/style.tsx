import { Box, Typography } from "@mui/material";
import { textColor } from "constants/colors";
import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;
`;

export const Nav = styled(Box)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const BoxAboutMe = styled(Box)`
  width: 100%;
  display: grid;
  grid-template-columns: 35vw 35vw;
  justify-content: center;
  justify-items: center;
  align-items: center;
  margin: 50px 0px 50px;
  @media screen and (min-width: 100px) and (max-width: 1000px) {
    grid-template-columns: 90%;
  }
  .animation {
    @media screen and (min-width: 55px) and (max-width: 1000px) {
      display: none;
    }
  }
`;

export const TypographyStyle = styled(Typography)`
  color: ${textColor};
`;

export const Stacks = styled(Box)`
  width: 100%;
  display: grid;
  justify-content: space-evenly;
  grid-template-columns: 20vw 20vw;
  @media screen and (min-width: 810px) and (max-width: 1215px) {
    grid-template-columns: 30vw 30vw;
  }
  @media screen and (min-width: 610px) and (max-width: 809px) {
    grid-template-columns: 40vw 40vw;
  }
  @media screen and (min-width: 55px) and (max-width: 610px) {
    grid-template-columns: 90%;
  }
`;
export const AboutCourse = styled(Box)`
  width: 40%;
  @media screen and (min-width: 55px) and (max-width: 509px) {
    width: 90%;
  }
  @media screen and (min-width: 510px) and (max-width: 1000px) {
    width: 60%;
  }
`;

export const Contact = styled(Box)`
  width: 100%;
  display: grid;
  justify-content: center;
  justify-items: center;
  align-items: center;
  grid-template-columns: 20vw 30vw;
  padding: 20px 0px 20px;
  @media screen and (min-width: 510px) and (max-width: 1200px) {
    grid-template-columns: 40vw 50vw;
  }
  @media screen and (min-width: 55px) and (max-width: 509px) {
    grid-template-columns: 90%;
  }
`;
export const Icons = styled.div`
  width: 100%;
  display: flex;
  color: #fff;
  justify-content: center;
  gap: 1rem;
  padding: 20px 0px 40px;
  @media screen and (min-width: 55px) and (max-width: 400px) {
    gap: 10px;
    width: 90%;
  }
`;
export const buttonCV = {
  display: "block",
  width: "10rem",
  fontSize: "15px",
  textAlign: "center",
  fontWeight: "bold",
  color: "#011726",
  backgroundColor: "#82d0d9",
  borderRadius: "8px",
  margin: "30px 0px 30px",
  "&:hover": {
    backgroundColor: "#82d0d9",
  },
};

export const stackStyle = {
  width: "100%",
  fontWeight: "bold",
  margin: "0px 0px 30px",
};

export const textStyle = {
  width: "100%",
  letterSpacing: "-0.22px",
  margin: "0px 0px 50px",
};

export const footer = {
  width: "100%",
  backgroundColor: "#024159",
  padding: "15px 0px 10px 15px",
};
