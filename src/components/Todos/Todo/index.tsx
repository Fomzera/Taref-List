import { Trash, Check } from "phosphor-react";
import { ITask } from "../../../@types/styled";
import { ButtonCheck, DeleteButton, Span, TodoItem } from "./styles";

interface TodoProps {
  todo: ITask;
  handleDeleteTask: (todoId: string) => void;
  handleComletedTodo: (todoId: string) => void;
}

export const Todo = ({
  todo,
  handleDeleteTask,
  handleComletedTodo,
}: TodoProps) => {
  return (
    <TodoItem>
      <ButtonCheck onClick={() => handleComletedTodo(todo.id)}>
        {todo.isCompleted ? <Check /> : <div />}
      </ButtonCheck>
      {todo.isCompleted ? (
        <Span variant="done">{todo.task}</Span>
      ) : (
        <Span>{todo.task}</Span>
      )}
      <DeleteButton onClick={() => handleDeleteTask(todo.id)}>
        <Trash size={24} />
      </DeleteButton>
    </TodoItem>
  );
};
