import { Atom } from "phosphor-react";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { AddTask } from "../AddTask";
import { HeaderContainer } from "./styles";

interface HeaderProps {
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  handleAddTask: (e: FormEvent) => void;
}

export const Header = ({ task, setTask, handleAddTask }: HeaderProps) => {
  return (
    <HeaderContainer>
      <div>
        <Atom size={32} />
        <h1>Lista de tarefas</h1>
      </div>
      <AddTask task={task} setTask={setTask} handleAddTask={handleAddTask} />
    </HeaderContainer>
  );
};
