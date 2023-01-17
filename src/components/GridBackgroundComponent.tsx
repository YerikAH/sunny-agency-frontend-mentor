import React from "react";
/* styles */
import {
  BackgroundImage,
  BackgroundText,
  GridBackground,
  TextDescription,
  TextTitle,
} from "../styles/seccion_three_style";
/* props */
import { PropsBg } from "../interface/interface";
/* hook */
import useWidth from "../hook/useWidth";

export default function GridBackgroundComponent({
  imageDesktop,
  imageMobile,
  title,
  description,
}: PropsBg) {
  const { windowWidth, renderImages } = useWidth(1000);
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
