import styled from "styled-components";

export const TasksContainer = styled.main`
  margin: 0 auto;
  padding: 0 1rem;
  max-width: 46rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    object-fit: cover;
    margin-top: 4rem;
  }
`;

export const TodoList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  margin-top: 4rem;
  width: 100%;
  max-width: 46rem;
`;
