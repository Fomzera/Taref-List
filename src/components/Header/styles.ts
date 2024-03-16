import styled from "styled-components";
import Bg from "../../assets/Bg.svg";

export const HeaderContainer = styled.header`
  height: 18.5rem;
  background-size: cover;
  background: url(${Bg}) no-repeat center;
  position: relative;

  div {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;

    gap: 0.4rem;

    svg {
      color: ${(props) => props.theme.blue};
    }
  }
`;
