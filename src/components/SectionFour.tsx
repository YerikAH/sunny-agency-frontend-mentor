import React from "react";

/* styles */
import {
  DivGrid,
  SectionStyle,
  TitleSection,
} from "../styles/seccion_four_style";

/* images */

import emily from "../images/image-emily.jpg";
import jennie from "../images/image-jennie.jpg";
import thomas from "../images/image-thomas.jpg";
import CardTestimonial from "./CardTestimonial";
import {
  JOB_ONE,
  JOB_THREE,
  JOB_TWO,
  NAME_ONE,
  NAME_THREE,
  NAME_TWO,
  TESTIMONIAL_ONE,
  TESTIMONIAL_THREE,
  TESTIMONIAL_TWO,
} from "../constant/constant";

/* components */
export default function SectionFour() {
  return (
    <SectionStyle>
      <TitleSection>client testimonials</TitleSection>
      <DivGrid>
        <CardTestimonial
          image={emily}
          job={JOB_ONE}
          name={NAME_ONE}
          testimonial={TESTIMONIAL_ONE}
        />
        <CardTestimonial
          image={thomas}
          job={JOB_TWO}
          name={NAME_TWO}
          testimonial={TESTIMONIAL_TWO}
        />
        <CardTestimonial
          image={jennie}
          job={JOB_THREE}
          name={NAME_THREE}
          testimonial={TESTIMONIAL_THREE}
        />
      </DivGrid>
    </SectionStyle>
  );
}
