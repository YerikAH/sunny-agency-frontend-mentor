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
import { DivGrid, SectionStyle } from "../styles/seccion_three_style";
/* component */
import GridBackgroundComponent from "./GridBackgroundComponent";

export default function SectionThree() {
  return (
    <SectionStyle>
      <DivGrid>
        <GridBackgroundComponent
          imageDesktop={cherryDesktop}
          imageMobile={cherryMobile}
          title={SR_TITLE_ONE}
          description={SR_TEXT_ONE}
        />
        <GridBackgroundComponent
          imageDesktop={tangerineDesktop}
          imageMobile={tangerineMobile}
          title={SR_TITLE_TWO}
          description={SR_TEXT_TWO}
        />
      </DivGrid>
    </SectionStyle>
  );
}
