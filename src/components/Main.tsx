import React from "react";
import { MainStyle } from "../styles/main_style";
import SectionOne from "./SectionOne";
import SectionThree from "./SectionThree";
import SectionTwo from "./SectionTwo";

export default function Main() {
  return (
    <MainStyle>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
    </MainStyle>
  );
}
