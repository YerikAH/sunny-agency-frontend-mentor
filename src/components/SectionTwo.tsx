import React, { useEffect, useLayoutEffect, useState } from "react";

/* images */
import eggYellowMobile from "../images/mobile/image-transform.jpg";
import cupPinkMobile from "../images/mobile/image-stand-out.jpg";
import eggYellowDesktop from "../images/desktop/image-transform.jpg";
import cupPinkDesktop from "../images/desktop/image-stand-out.jpg";
/* text */
import {
  ST_DESCRIPTION_ONE,
  ST_DESCRIPTION_TWO,
  ST_TITLE_ONE,
  ST_TITLE_TWO,
} from "../constant/constant";

/* styles */
import { SectionStyle } from "../styles/seccion_two_style";
import GridInfoComponent from "./GridInfoComponent";

export default function SectionTwo() {
  const [windowWidth, setWindowWidth] = useState(0);
  const [renderImages, setRenderImages] = useState(false);

  useLayoutEffect(() => {
    function updateWidth() {
      setWindowWidth(window.innerWidth);
    }
    window.addEventListener("resize", updateWidth);
    updateWidth();
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  useEffect(() => {
    windowWidth > 720 ? setRenderImages(true) : setRenderImages(false);
  }, [windowWidth]);

  return (
    <SectionStyle>
      <GridInfoComponent
        classOne="one"
        classTwo="yellow"
        classThree="two"
        renderImages={renderImages}
        imageDektop={eggYellowDesktop}
        imageMobile={eggYellowMobile}
        title={ST_TITLE_ONE}
        description={ST_DESCRIPTION_ONE}
      />
      <GridInfoComponent
        classOne="two"
        classTwo="soft-red"
        classThree="one"
        renderImages={renderImages}
        imageDektop={cupPinkDesktop}
        imageMobile={cupPinkMobile}
        title={ST_TITLE_TWO}
        description={ST_DESCRIPTION_TWO}
      />
    </SectionStyle>
  );
}
