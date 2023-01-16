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
  grid-template-columns: repeat(2, 50%);
  @media (min-width: 720px) {
    grid-template-columns: repeat(4, 25%);
  }
`;
export const ImageLargeBox = styled.div``;
export const ImageLargeImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
