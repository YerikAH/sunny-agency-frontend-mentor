import React from "react";

/* components */
import ImageLarge from "./ImageLarge";

/* images */
import milkDesktop from "../images/desktop/image-gallery-milkbottles.jpg";
import milkMobile from "../images/mobile/image-gallery-milkbottles.jpg";

import orangeDesktop from "../images/desktop/image-gallery-orange.jpg";
import orangeMobile from "../images/mobile/image-gallery-orange.jpg";

import coneDesktop from "../images/desktop/image-gallery-cone.jpg";
import coneMobile from "../images/mobile/image-gallery-cone.jpg";

import sugarDesktop from "../images/desktop/image-gallery-sugarcubes.jpg";
import sugarMobile from "../images/mobile/image-gallery-sugar-cubes.jpg";

/* styles */
import { DivGrid, SectionStyle } from "../styles/seccion_five_style";

export default function SectionFive() {
  return (
    <SectionStyle>
      <DivGrid>
        <ImageLarge imageDesktop={milkDesktop} imageMobile={milkMobile} />
        <ImageLarge imageDesktop={orangeDesktop} imageMobile={orangeMobile} />
        <ImageLarge imageDesktop={coneDesktop} imageMobile={coneMobile} />
        <ImageLarge imageDesktop={sugarDesktop} imageMobile={sugarMobile} />
      </DivGrid>
    </SectionStyle>
  );
}
