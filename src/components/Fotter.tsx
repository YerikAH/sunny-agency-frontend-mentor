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
            <UlLiA href="#">About</UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA href="#">Services</UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA href="#">Projects</UlLiA>
          </FotterUlLi>
        </FotterUl>
        <FotterUl className="2rem">
          <FotterUlLi>
            <UlLiA href="#">
              <Facebook />
            </UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA href="#">
              <Twitter />
            </UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA href="#">
              <Instagram />
            </UlLiA>
          </FotterUlLi>
          <FotterUlLi>
            <UlLiA href="#">
              <Pinterest />
            </UlLiA>
          </FotterUlLi>
        </FotterUl>
      </DivGrid>
    </FooterStyle>
  );
}
