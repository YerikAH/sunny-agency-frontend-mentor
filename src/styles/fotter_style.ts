import styled from "styled-components";

export const FooterStyle = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  flex-direction: column;
  background-color: var(--footer-color);
  padding: 5rem 1rem;
`;

export const DivGrid = styled.div`
  display: grid;
  max-width: 1440px;
  width: 100%;
  place-items: center;
  gap: 3rem;
  place-content: center;
`;
export const FotterLogo = styled.img`
  width: 10.625rem;
  height: auto;
`;
export const FotterUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${(props) => props.className && props.className};
`;
export const FotterUlLi = styled.li``;
export const UlLiA = styled.a`
  letter-spacing: 0.5px;
  color: var(--dark-moderate-cyan);
  font-weight: 600;
`;
