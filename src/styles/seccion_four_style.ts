import styled from "styled-components";

export const SectionStyle = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin: 10rem 0;
  flex-direction: column;
`;
export const TitleSection = styled.h2`
  font: normal normal 900 1.125rem/2rem var(--font-fraunces);
  text-transform: uppercase;
  color: var(--grayish-blue);
  text-align: center;
  letter-spacing: 4px;
`;
export const DivGrid = styled.div`
  margin-top: 2.8rem;
  display: grid;
  max-width: 1440px;
  width: 100%;
  gap: 5rem;
  padding: 0 1rem;
  justify-content: center;
  @media (min-width: 1000px) {
    grid-template-columns: auto auto auto;
    gap: 3rem;
    justify-content: space-between;
  }
  @media (min-width: 1200px) {
    gap: 5rem;
  }
`;

export const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 4rem;
`;
export const CardPhoto = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  object-fit: cover;
  border-radius: 115rem;
`;
export const CardText = styled.p`
  text-align: center;
  color: var(--very-dark-desaturated-blue);
  font-weight: 600;
  padding: 0 2rem;
  line-height: 2rem;
  max-width: 400px;
  @media (min-width: 1000px) {
    max-width: none;
    padding: 0 2.8rem;
  }
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
  margin-top: 1.5rem;
  font-weight: 600;
`;
