import styled from "styled-components";

export const MenuMobileStyle = styled.div`
  position: absolute;
  width: 100%;
  overflow: auto;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: start;
  z-index: 500;
  top: 7rem;
  left: 0;
  transition: 0.5s;
`;
export const MobileStyleBox = styled.div``;
export const BoxUl = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--white);
  width: 90%;
  flex-direction: column;
  padding: 2rem 1rem;
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
`;
