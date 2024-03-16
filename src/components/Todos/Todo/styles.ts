import styled, { css } from "styled-components";

export const TodoItem = styled.div`
  background-color: ${(props) => props.theme["blue-600"]};
  border-radius: 8px;
  display: flex;
  border: 1px solid ${(props) => props.theme["blue-700"]};
  padding: 0 1rem;
  align-items: center;
  height: 4rem;
  gap: 0.75rem;
`;

interface SpanProps {
  variant?: "done";
}

export const Span = styled.span<SpanProps>`
  font-size: 0.875rem;
  font-weight: 400;
  flex: 1;
  line-height: 160%;
  ${(props) =>
    props.variant === "done" &&
    css`
      text-decoration: line-through;
      color: ${(props) => props.theme["gray-200"]};
    `}
`;

export const ButtonCheck = styled.button`
  width: 18px;
  height: 18px;
  background: none;
  border: none;
  cursor: pointer;

  div {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    border: 2px solid ${(props) => props.theme.blue};
  }
  svg {
    width: 100%;
    height: 100%;
    color: ${(props) => props.theme.blue};
  }
`;

export const DeleteButton = styled.button`
  border: 0;
  background-color: transparent;
  cursor: pointer;
  svg {
    color: ${(props) => props.theme.blue};
    border: 0;
  }
`;
