import styled from "styled-components";
export const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;

export const DivGrid = styled.div`
  display: grid;
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 720px) {
    grid-template-columns: 50% 50%;
    grid-template-areas: "one two";
  }
`;
export const GridImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  max-height: 37.5rem;
  @media (min-width: 720px) {
    grid-area: ${(props) => props.className && props.className};
  }
`;

export const GridInfo = styled.div`
  padding: 4rem 2rem;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  @media (min-width: 720px) {
    grid-area: ${(props) => props.className && props.className};
    align-items: start;
  }
  @media (min-width: 1000px) {
    padding: 0 7rem;
  }
  @media (min-width: 1200px) {
    padding: 0 9rem;
  }
`;
export const InfoTitle = styled.h2`
  font: normal normal 900 2rem/2.5rem var(--font-fraunces);
  color: var(--very-dark-desaturated-blue);
  text-align: center;
  @media (min-width: 720px) {
    text-align: left;
    font-size: 2.5rem;
  }
`;
export const InfoText = styled.p`
  font: normal normal 500 1rem/1.8rem var(--font-barlow);
  color: var(--dark-grayish-blue);
  text-align: center;
  margin: 1.5rem 0;
  @media (min-width: 720px) {
    text-align: left;
    font-size: 1.125rem;
  }
`;
export const InfoLink = styled.a`
  font: normal normal 900 0.9rem/1rem var(--font-fraunces);
  color: var(--very-dark-desaturated-blue);
  position: relative;
  z-index: 100;
  &::before {
    content: "";
    position: absolute;
    width: 120%;
    height: 7px;
    border-radius: 255px;
    background-color: ${(props) =>
      props.className && `var(--${props.className})`};
    left: -10%;
    bottom: -2px;
    z-index: -1;
    opacity: 0.6;
    transition: 0.3s;
  }

  @media (min-width: 720px) {
    font-size: 1rem;
  }

  &:hover::before {
    opacity: 1;
  }
`;
