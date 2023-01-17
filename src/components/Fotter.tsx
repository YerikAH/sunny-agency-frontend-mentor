import React from "react";

/* components */
import Facebook from "./icons/Facebook";
import Instagram from "./icons/Instagram";
import Pinterest from "./icons/Pinterest";
import Twitter from "./icons/Twitter";

/* images */
import logo from "../images/logo-green.svg";

/* style */
import {
  DivGrid,
  FooterStyle,
  FotterLogo,
  FotterUl,
  FotterUlLi,
  UlLiA,
} from "../styles/fotter_style";

export default function Fotter() {
  return (
    <FooterStyle>
      <DivGrid>
        <FotterLogo src={logo} />
        <FotterUl className="3rem">
          <FotterUlLi>
            <UlLiA>About</UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA>Services</UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA>Projects</UlLiA>
          </FotterUlLi>
        </FotterUl>
        <FotterUl className="2rem">
          <FotterUlLi>
            <UlLiA>
              <Facebook />
            </UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA>
              <Twitter />
            </UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA>
              <Instagram />
            </UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA>
              <Pinterest />
            </UlLiA>
          </FotterUlLi>
        </FotterUl>
      </DivGrid>
    </FooterStyle>
  );
}
