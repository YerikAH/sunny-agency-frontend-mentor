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
} from "../styles/seccion_style";

export default function SectionOne() {
  return (
    <>
      <Sectionstyle>
        <BackgroundImage />
        <SectionDiv>
          <DivTitle>We are creatives</DivTitle>
          <DivImage src={arrowDown} />
        </SectionDiv>
      </Sectionstyle>
    </>
  );
}
