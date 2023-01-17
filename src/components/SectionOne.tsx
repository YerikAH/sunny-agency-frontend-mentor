import React from "react";

/* images */
import arrowDown from "../images/icon-arrow-down.svg";

/* styles */
import {
  BackgroundImage,
  DivImage,
  DivTitle,
  SectionDiv,
  SectionStyle,
  BackgroundColor,
} from "../styles/seccion_style";

/* text */
import { SO_TITLE } from "../constant/constant";

export default function SectionOne() {
  return (
    <>
      <SectionStyle>
        <BackgroundImage />
        <BackgroundColor />
        <SectionDiv>
          <DivTitle>{SO_TITLE}</DivTitle>
          <DivImage src={arrowDown} />
        </SectionDiv>
      </SectionStyle>
    </>
  );
}
