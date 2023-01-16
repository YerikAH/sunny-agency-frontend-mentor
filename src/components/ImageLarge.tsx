import React from "react";
/* hook */
import useWidth from "../hook/useWidth";
/* style */
import { ImageLargeBox, ImageLargeImg } from "../styles/seccion_five_style";
/* props */
import { PropsImages } from "../interface/interface";

export default function ImageLarge({ imageMobile, imageDesktop }: PropsImages) {
  const { windowWidth, renderImages } = useWidth();
  return (
    <ImageLargeBox>
      <ImageLargeImg src={renderImages ? imageDesktop : imageMobile} />
    </ImageLargeBox>
  );
}
