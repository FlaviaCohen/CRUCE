import React from "react";
import { FooterContainer, Text } from "./style";
import { GoMarkGithub } from "react-icons/go";
const Footer = () => {
  return (
    <FooterContainer>
      <a href="https://github.com/FlaviaCohen" target="_blank">
        <GoMarkGithub size={30} color={'white'}/>
      </a>
      <Text>Flavia Cohen | Desafío técnico CRUCE</Text>
    </FooterContainer>
  );
};

export default Footer;
