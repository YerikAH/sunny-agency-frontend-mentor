import React from "react";

/* images */
import eggYellowMobile from "../images/mobile/image-transform.jpg";
import cupPinkMobile from "../images/mobile/image-stand-out.jpg";
import eggYellowDesktop from "../images/desktop/image-transform.jpg";
import cupPinkDesktop from "../images/desktop/image-stand-out.jpg";

/* styles */
import {
  DivGrid,
  GridImage,
  GridInfo,
  InfoLink,
  InfoText,
  InfoTitle,
  SectionStyle,
} from "../styles/seccion_two_style";

export default function SectionTwo() {
  return (
    <SectionStyle>
      <DivGrid>
        <GridImage src={eggYellowMobile} />
        <GridInfo>
          <InfoTitle>Transform your brand</InfoTitle>
          <InfoText>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </InfoText>
          <InfoLink>LEARN MORE</InfoLink>
        </GridInfo>
      </DivGrid>
      <DivGrid>
        <GridImage src={eggYellowMobile} />
        <GridInfo>
          <InfoTitle>Transform your brand</InfoTitle>
          <InfoText>
            We are a full-service creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </InfoText>
          <InfoLink>LEARN MORE</InfoLink>
        </GridInfo>
      </DivGrid>
    </SectionStyle>
  );
}
