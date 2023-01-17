import styled from "styled-components";

export const MenuMobileStyle = styled.div`
  position: absolute;
  width: 100%;
  overflow: auto;
  height: 0%;
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 500;
  top: 5rem;
  left: 0;
  transition: 0.5s;
`;
export const MobileStyleBox = styled.div``;
export const BoxUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  flex-direction: column;
  padding: 2rem 1rem;
  width: 100%;
  position: relative;
`;
export const BoxLi = styled.li``;
export const BoxA = styled.a`
  display: block;
  color: ${(props) =>
    props.className === "special"
      ? "var(--very-dark-desaturated-blue)"
      : "var(--grayish-blue)"};
  background-color: ${(props) =>
    props.className === "special" && "var(--yellow)"};
  border-radius: ${(props) => props.className === "special" && "255px"};
  padding: ${(props) => (props.className === "special" ? "1rem 2rem" : "1rem")};
  font-family: ${(props) =>
    props.className === "special" && "var(--font-fraunces)"};
  text-transform: ${(props) => props.className === "special" && "uppercase"};
  margin: ${(props) => props.className === "special" && "1rem 2rem"};
  transition: 0.3s;

  &:hover {
    color: ${(props) =>
      props.className === "special"
        ? "var(--very-dark-desaturated-blue)"
        : "var(--very-dark-desaturated-blue)"};
    background-color: ${(props) =>
      props.className === "special" && "var(--yellow-pale)"};
  }
`;
export const DecorationBox = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: end;
  top: 4px;
`;
export const DecorationTrian = styled.div`
  width: 35px;
  height: 35px;
  clip-path: polygon(100% 0, 0% 100%, 100% 100%);
  background-color: var(--white);
`;
export const BoxUlFather = styled.div`
  width: 90%;
`;
