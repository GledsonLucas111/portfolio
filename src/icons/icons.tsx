import styled from "styled-components";
import { BsLinkedin, BsWhatsapp, BsGithub, BsInstagram } from "react-icons/bs";
import { RiMailSendLine } from "react-icons/ri";
import { HiMenu } from "react-icons/hi";

export const Linkedin = styled(BsLinkedin)`
  color: #fff;
  font-size: 50px;
  @media screen and (min-width: 55px) and (max-width: 330px) {
    font-size: 30px;
  }
`;

export const Whatsapp = styled(BsWhatsapp)`
  color: #fff;
  font-size: 50px;
  @media screen and (min-width: 55px) and (max-width: 330px) {
    font-size: 30px;
  }
`;
export const Github = styled(BsGithub)`
  color: #fff;
  font-size: 50px;
  @media screen and (min-width: 55px) and (max-width: 330px) {
    font-size: 30px;
  }
`;

export const Instagram = styled(BsInstagram)`
  color: #fff;
  font-size: 50px;
  @media screen and (min-width: 55px) and (max-width: 330px) {
    font-size: 30px;
  }
`;

export const Email = styled(RiMailSendLine)`
  color: #fff;
  font-size: 50px;
  @media screen and (min-width: 55px) and (max-width: 330px) {
    font-size: 30px;
  }
`;

export const MenuIcon = styled(HiMenu)`
  color: #fff;
  font-size: 30px;
`;
