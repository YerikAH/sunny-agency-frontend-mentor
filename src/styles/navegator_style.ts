import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
`;
export const Nav = styled.nav`
  max-width: 1440px;
  width: 100%;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  @media (min-width: 720px) {
    padding: 2rem 3rem;
  }
`;
export const NavUl = styled.ul`
  gap: 3.5rem;
  justify-content: center;
  align-items: center;
  display: none;
  @media (min-width: 720px) {
    display: flex;
  }
`;
export const UlLi = styled.li``;
export const LiA = styled.a`
  font-size: 1.125rem;
  color: var(--white);
`;

export const LiALogo = styled.a``;
export const UlLiLogo = styled.ul``;
export const LogoImg = styled.img`
  width: auto;
  @media (min-width: 720px) {
    width: 10.625rem;
  }
`;

export const NavImage = styled.img``;

export const DivHam = styled.div`
  display: block;
  @media (min-width: 720px) {
    display: none;
  }
`;
export const DivContent = styled.div``;
