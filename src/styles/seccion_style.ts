import styled from "styled-components";
import imgHeaderMobile from "../images/mobile/image-header.jpg";
import imgHeaderDesktop from "../images/desktop/image-header.jpg";
export const BackgroundImage = styled.div`
  height: 33.75rem;
  width: 100%;
  position: absolute;
  top: 0;
  background: url(${imgHeaderMobile}) center/cover no-repeat;
  @media (min-width: 720px) {
    background: url(${imgHeaderDesktop}) center/cover no-repeat;
    height: 45rem;
  }
  @media (min-width: 1000px) {
    background: url(${imgHeaderDesktop}) center/cover no-repeat;
    height: 50rem;
  }
`;

export const Sectionstyle = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const SectionDiv = styled.div`
  max-width: 1440px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  flex-direction: column;
  padding: 2rem;
`;
export const DivTitle = styled.h1`
  font: normal normal 900 2rem/2.5rem var(--font-fraunces);
  text-align: center;
  text-transform: uppercase;
  color: var(--white);
  letter-spacing: 0.390625rem;
`;
export const DivImage = styled.img``;
