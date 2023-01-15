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
export const GridBackground = styled.div``;
export const BackgroundImage = styled.img`
  width: 100%;
  height: 100%;
`;
export const BackgroundText = styled.div``;
export const TextTitle = styled.h3`
  font: normal normal 900 1.75rem/1.5rem var(--font-fraunces);
`;
export const TextDescription = styled.p``;
