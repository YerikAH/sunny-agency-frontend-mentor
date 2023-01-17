import React from "react";

/* style */
import { ImageLargeBox, ImageLargeImg } from "../styles/seccion_five_style";

/* props */
import { PropsImages } from "../interface/interface";

/* hook */
import useWidth from "../hook/useWidth";

export default function ImageLarge({ imageMobile, imageDesktop }: PropsImages) {
  const { windowWidth, renderImages } = useWidth(1000);
  return (
    <ImageLargeBox>
      <ImageLargeImg src={renderImages ? imageDesktop : imageMobile} />
    </ImageLargeBox>
  );
}
