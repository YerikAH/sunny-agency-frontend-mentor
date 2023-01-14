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
  }
`;
export const GridImage = styled.img`
  object-fit: cover;
  width: 100%;
  height: 100%;
  grid-area: ${(props) => props.className && props.className};
`;

export const GridInfo = styled.div`
  grid-area: ${(props) => props.className && props.className};
`;
export const InfoTitle = styled.h2`
  font: normal normal 900 1.5rem/2rem var(--font-fraunces);
  color: var(--very-dark-desaturated-blue);
`;
export const InfoText = styled.p``;
export const InfoLink = styled.a``;
