import { ITask } from "../../@types/styled";
import { ScoreContainer } from "./styles";

interface ScoreProps {
  todos: ITask[];
}

export const Score = ({ todos }: ScoreProps) => {
  const concluded = [...todos].filter((todo) => todo.isCompleted).length;

  return (
    <ScoreContainer>
      <p>
        Tarefas criadas <span>{todos.length}</span>
      </p>
      <p>
        Concluídas
        <span>{concluded}</span>
      </p>
    </ScoreContainer>
  );
};
