import React from "react";

/* components */

import SectionFive from "./SectionFive";
import SectionFour from "./SectionFour";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

/* style */
import { MainStyle } from "../styles/main_style";

export default function Main() {
  return (
    <MainStyle>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <SectionFive />
    </MainStyle>
  );
}
