import React from "react";
import { PropsCard } from "../interface/interface";
import {
  CardDiv,
  CardInfo,
  CardJob,
  CardName,
  CardPhoto,
  CardText,
} from "../styles/seccion_four_style";

export default function CardTestimonial({
  image,
  name,
  testimonial,
  job,
}: PropsCard) {
  return (
    <CardDiv>
      <CardPhoto src={image} />
      <CardText>{testimonial}</CardText>
      <CardInfo>
        <CardName>{name}</CardName>
        <CardJob>{job}</CardJob>
      </CardInfo>
    </CardDiv>
  );
}
