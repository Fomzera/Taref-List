import styled from "styled-components";

export const Form = styled.form`
  max-width: 46rem;
  width: 100%;
  display: flex;
  margin: 0 auto;
  gap: 0.5rem;
  height: 3.25rem;
  padding: 0 1rem;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1.688rem;

  @media (max-width: 720px) {
    padding: 0 1rem;
  }

  input {
    flex: 1;
    height: 100%;
    border-radius: 8px;
    font-size: 1rem;
    border: 0;
    background-color: ${(props) => props.theme["blue-900"]};
    color: ${(props) => props.theme.white};

    &::placeholder {
      color: ${(props) => props.theme["blue-400"]};
      font-size: 1rem;

      @media (max-width: 720px) {
        font-size: 0.875rem;
        text-align: center;
      }
    }
  }

  button {
    font-size: 1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    height: 100%;
    padding: 0 1rem;
    font-weight: 700;
    border-radius: 8px;
    background-color: ${(props) => props.theme.blue};
    color: ${(props) => props.theme.white};
    border: 0;

    &:not(:disabled):hover {
      filter: brightness(0.9);
      transition: all 0.3s;
    }

    &:disabled {
      opacity: 0.4;
      cursor: not-allowed;
    }
  }
`;
