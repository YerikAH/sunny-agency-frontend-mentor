import React from "react";
/* props */
import { Props } from "../interface/interface";
/* style */
import {
  DivGrid,
  GridImage,
  GridInfo,
  InfoLink,
  InfoText,
  InfoTitle,
} from "../styles/seccion_two_style";

export default function GridInfoComponent({
  classOne,
  classTwo,
  classThree,
  renderImages,
  imageDektop,
  imageMobile,
  title,
  description,
}: Props) {
  return (
    <DivGrid>
      <GridImage
        src={renderImages ? imageDektop : imageMobile}
        className={classThree}
      />
      <GridInfo className={classOne}>
        <InfoTitle>{title}</InfoTitle>
        <InfoText>{description}</InfoText>
        <InfoLink className={classTwo} href="#">
          LEARN MORE
        </InfoLink>
      </GridInfo>
    </DivGrid>
  );
}
