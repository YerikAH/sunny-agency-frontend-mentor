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
} from "../styles/navegator_style";

export default function Navegator() {
  return (
    <Header>
      <Nav>
        <NavUl>
          <UlLi>
            <LiALogo href="#">
              <LogoImg src={logo} />
            </LiALogo>
          </UlLi>
          <UlLi>
            <LiALogo>
              <LiA>About</LiA>
            </LiALogo>
            <LiALogo>
              <LiA>Services</LiA>
            </LiALogo>
            <LiALogo>
              <LiA>Projects</LiA>
            </LiALogo>
            <LiALogo>
              <LiA>CONTACT</LiA>
            </LiALogo>
            <LiALogo>
              <LiA>
                <NavImage src={ham} />
              </LiA>
            </LiALogo>
          </UlLi>
        </NavUl>
      </Nav>
    </Header>
  );
}
