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
export const GridBackground = styled.div`
  max-height: 35.313rem;
  height: 100%;
  width: 100%;
  position: relative;
`;
export const BackgroundImage = styled.img`
  width: 100%;
  object-fit: cover;
  height: 100%;
`;
export const BackgroundText = styled.div`
  position: absolute;
  bottom: 0;
  padding: 3rem 1rem;
  display: flex;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const TextTitle = styled.h3`
  font: normal normal 900 1.75rem/1.5rem var(--font-fraunces);
  color: var(--dark-desaturated-cyan);
  text-align: center;
`;
export const TextDescription = styled.p`
  text-align: center;
  font: normal normal 600 1rem/2rem var(--font-barlow);
  margin-top: 2rem;
  color: var(--dark-desaturated-cyan);
  @media (min-width: 1200px) {
    max-width: 85%;
  }
  @media (min-width: 1200px) {
    max-width: 390px;
  }
`;
