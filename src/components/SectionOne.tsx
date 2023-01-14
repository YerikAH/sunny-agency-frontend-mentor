import React from "react";
/* images */
import arrowDown from "../images/icon-arrow-down.svg";
/* styles */
import {
  BackgroundImage,
  DivImage,
  DivTitle,
  SectionDiv,
  Sectionstyle,
  BackgroundColor,
} from "../styles/seccion_style";

export default function SectionOne() {
  return (
    <>
      <Sectionstyle>
        <BackgroundImage />
        <BackgroundColor />
        <SectionDiv>
          <DivTitle>We are creatives</DivTitle>
          <DivImage src={arrowDown} />
        </SectionDiv>
      </Sectionstyle>
    </>
  );
}
