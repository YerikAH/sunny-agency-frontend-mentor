import React, { useEffect, useState } from "react";

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
import MenuMobile from "./MenuMobile";
import useWidth from "../hook/useWidth";

import { RemoveScroll } from "react-remove-scroll";

export default function Navegator() {
  const { windowWidth, renderImages } = useWidth(720);
  const [switchMenu, setSwitchMenu] = useState(false);

  const handleClick = () => {
    switchMenu ? setSwitchMenu(false) : setSwitchMenu(true);
  };
  useEffect(() => {
    if (windowWidth > 720) {
      setSwitchMenu(false);
    }
  }, [windowWidth]);

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
              <LiA className="special">Contact</LiA>
            </UlLi>
          </NavUl>
          <DivHam>
            <LiA>
              <NavImage src={ham} onClick={handleClick} />
            </LiA>
          </DivHam>
        </DivContent>
      </Nav>

      <MenuMobile switchMenu={switchMenu} />

      {switchMenu && (
        <RemoveScroll className="scroll">
          <div></div>
        </RemoveScroll>
      )}
    </Header>
  );
}
