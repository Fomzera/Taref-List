import { Plus } from "phosphor-react";
import { Dispatch, FormEvent, SetStateAction } from "react";
import { Form } from "./styles";

interface AddTaskProps {
  task: string;
  setTask: Dispatch<SetStateAction<string>>;
  handleAddTask: (e: FormEvent) => void;
}

export const AddTask = ({ task, setTask, handleAddTask }: AddTaskProps) => {
  return (
    <Form onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Adicione uma nova tarefa"
        value={task}
        onChange={(e) => {
          setTask(e.target.value);
        }}
      />
      <button disabled={!task} type="submit">
        <Plus size={20} />
      </button>
    </Form>
  );
};
