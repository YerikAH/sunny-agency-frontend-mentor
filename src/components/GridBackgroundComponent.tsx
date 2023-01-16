import React from "react";
/* styles */
import {
  BackgroundImage,
  BackgroundText,
  GridBackground,
  TextDescription,
  TextTitle,
} from "../styles/seccion_three_style";
/* hook */
import useWidth from "../hook/useWidth";
/* props */
import { PropsBg } from "../interface/interface";

export default function GridBackgroundComponent({
  imageDesktop,
  imageMobile,
  title,
  description,
}: PropsBg) {
  const { windowWidth, renderImages } = useWidth();
  return (
    <GridBackground>
      <BackgroundImage src={renderImages ? imageDesktop : imageMobile} />
      <BackgroundText>
        <TextTitle>{title}</TextTitle>
        <TextDescription>{description}</TextDescription>
      </BackgroundText>
    </GridBackground>
  );
}
