import styled from "styled-components";

export const Header = styled.header`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 100;
  background-color: var(--header-image-color);
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
  color: ${(props) =>
    props.className === "special"
      ? "var(--very-dark-desaturated-blue)"
      : "var(--white)"};
  background-color: ${(props) =>
    props.className === "special" && "var(--white)"};
  border-radius: ${(props) => props.className === "special" && "255px"};
  display: ${(props) => props.className === "special" && "block"};
  padding: ${(props) => props.className === "special" && "1rem 2rem"};
  font-family: ${(props) =>
    props.className === "special" && "var(--font-fraunces)"};
  text-transform: ${(props) => props.className === "special" && "uppercase"};
  transition: 0.3s;
  position: relative;
  &:hover {
    color: ${(props) =>
      props.className === "special" ? "var(--white)" : "var(--white)"};
    background-color: ${(props) =>
      props.className === "special" && "var(--sky-pale)"};
  }

  &::after {
    content: "";
    width: 100%;
    height: 2px;
    position: absolute;
    bottom: -10px;
    left: 0;
    transform: scaleX(0);
    background-color: var(--white);
    transition: 0.3s;
  }

  &:hover::after {
    transform: ${(props) => !props.className && "scale(1)"};
  }
`;

export const LiALogo = styled.a``;
export const UlLiLogo = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
`;
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
