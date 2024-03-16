import { TasksContainer, TodoList } from "./styles";
import Vazio from "../../assets/Vazio.svg";
import { ITask } from "../../@types/styled";
import { Todo } from "./Todo";

interface TasksProps {
  todos: ITask[];
  handleDeleteTask: (todoId: string) => void;
  handleComletedTodo: (todoId: string) => void;
}

export const Todos = ({
  todos,
  handleDeleteTask,
  handleComletedTodo,
}: TasksProps) => {
  return (
    <TasksContainer>
      {todos.length > 0 ? (
        <TodoList>
          {todos.map((todo) => (
            <Todo
              key={todo.id}
              todo={todo}
              handleDeleteTask={handleDeleteTask}
              handleComletedTodo={handleComletedTodo}
            />
          ))}
        </TodoList>
      ) : (
        <img src={Vazio} alt="/" />
      )}
    </TasksContainer>
  );
};
