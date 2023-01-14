import React from "react";
import { MainStyle } from "../styles/main_style";
import SectionOne from "./SectionOne";
import SectionTwo from "./SectionTwo";

export default function Main() {
  return (
    <MainStyle>
      <SectionOne />
      <SectionTwo />
    </MainStyle>
  );
}
