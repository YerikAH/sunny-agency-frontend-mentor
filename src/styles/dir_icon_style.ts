import styled from "styled-components";

export const SvgComponent = styled.svg`
  & path {
    transition: 0.3s;
  }

  &:hover path {
    fill: var(--white);
  }
`;
