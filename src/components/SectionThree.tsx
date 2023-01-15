import React from "react";
/* images */
import tangerineMobile from "../images/mobile/image-photography.jpg";
import tangerineDesktop from "../images/desktop/image-photography.jpg";
import cherryMobile from "../images/mobile/image-graphic-design.jpg";
import cherryDesktop from "../images/desktop/image-graphic-design.jpg";

/* text */
import {
  SR_TEXT_ONE,
  SR_TEXT_TWO,
  SR_TITLE_ONE,
  SR_TITLE_TWO,
} from "../constant/constant";
/* styles */
import {
  BackgroundImage,
  BackgroundText,
  DivGrid,
  GridBackground,
  SectionStyle,
  TextDescription,
  TextTitle,
} from "../styles/seccion_three_style";

export default function SectionThree() {
  return (
    <SectionStyle>
      <DivGrid>
        <GridBackground>
          <BackgroundImage src="" />
          <BackgroundText>
            <TextTitle>{SR_TITLE_ONE}</TextTitle>
            <TextDescription>{SR_TEXT_ONE}</TextDescription>
          </BackgroundText>
        </GridBackground>
        <GridBackground>
          <BackgroundImage src="" />
          <BackgroundText>
            <TextTitle>{SR_TITLE_TWO}</TextTitle>
            <TextDescription>{SR_TEXT_TWO}</TextDescription>
          </BackgroundText>
        </GridBackground>
      </DivGrid>
    </SectionStyle>
  );
}
