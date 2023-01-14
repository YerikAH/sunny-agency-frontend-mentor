import React from "react";

/* images */
import logo from "../images/logo.svg";
import ham from "../images/icon-hamburger.svg";
/* style */
import {
  Header,
  Nav,
  NavUl,
  UlLi,
  LiALogo,
  LogoImg,
  LiA,
  NavImage,
  DivHam,
  DivContent,
  UlLiLogo,
} from "../styles/navegator_style";

export default function Navegator() {
  return (
    <Header>
      <Nav>
        <UlLiLogo>
          <LiALogo href="#">
            <UlLi>
              <LogoImg src={logo} />
            </UlLi>
          </LiALogo>
        </UlLiLogo>
        <DivContent>
          <NavUl>
            <UlLi>
              <LiA>About</LiA>
            </UlLi>
            <UlLi>
              <LiA>Services</LiA>
            </UlLi>
            <UlLi>
              <LiA>Projects</LiA>
            </UlLi>
            <UlLi>
              <LiA>Contact</LiA>
            </UlLi>
          </NavUl>
          <DivHam>
            <LiA>
              <NavImage src={ham} />
            </LiA>
          </DivHam>
        </DivContent>
      </Nav>
    </Header>
  );
}
