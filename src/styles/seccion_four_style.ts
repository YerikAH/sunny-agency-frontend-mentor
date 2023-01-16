import styled from "styled-components";

export const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
`;
export const TitleSection = styled.h2`
  font: normal normal 900 2rem/2rem var(--font-fraunces);
  text-transform: uppercase;
`;
export const DivGrid = styled.div`
  margin-top: 2.5rem;
  display: grid;
  max-width: 1440px;
  width: 100%;
  justify-content: space-between;
  @media (min-width: 720px) {
    grid-template-columns: auto auto auto;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 2rem;
`;
export const CardPhoto = styled.img`
  width: 6.25rem;
  height: 6.25rem;
  object-fit: cover;
  border-radius: 115rem;
`;
export const CardText = styled.p`
  text-align: center;
  color: var(--very-dark-desaturated-blue);
`;

export const CardInfo = styled.div``;
export const CardName = styled.h4`
  font: normal normal 900 1.125rem/1.5rem var(--font-fraunces);
  text-align: center;
`;
export const CardJob = styled.span`
  font-size: 0.8rem;
  color: var(--grayish-blue);
  text-align: center;
  margin-top: 1rem;
`;
