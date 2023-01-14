import styled from "styled-components";
import imgHeaderMobile from "../images/mobile/image-header.jpg";
import imgHeaderDesktop from "../images/desktop/image-header.jpg";
export const BackgroundImage = styled.div`
  height: 33.75rem;
  width: 100%;
  position: absolute;
  top: 0;
  max-width: 1440px;
  background: url(${imgHeaderMobile}) center/cover no-repeat;
  @media (min-width: 720px) {
    background: url(${imgHeaderDesktop}) center/cover no-repeat;
    height: 45rem;
  }
  @media (min-width: 1000px) {
    background: url(${imgHeaderDesktop}) center/cover no-repeat;
    height: 50rem;
  }
  z-index: 50;
`;
export const BackgroundColor = styled.div`
  height: 33.75rem;
  width: 100%;
  position: absolute;
  top: 0;
  background-color: var(--header-image-color);
  @media (min-width: 720px) {
    height: 45rem;
  }
  @media (min-width: 1000px) {
    height: 50rem;
  }
  z-index: 10;
`;

export const SectionStyle = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  margin-top: 2.1rem;
  height: 25.8rem;
  @media (min-width: 720px) {
    margin-top: 5.1rem;
    height: 32.4rem;
  }
  @media (min-width: 1000px) {
    height: 37.4rem;
  }
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
  letter-spacing: 6.2px;
  @media (min-width: 375px) {
    font-size: 2.5rem;
    line-height: 3rem;
  }
  @media (min-width: 1000px) {
    font-size: 3.5rem;
    letter-spacing: 8.8px;
  }
`;
export const DivImage = styled.img`
  margin-top: 2.3rem;
  @media (min-width: 720px) {
    margin-top: 6.7rem;
  }
`;
