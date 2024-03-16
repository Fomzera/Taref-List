import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { defaultTheme } from "./styles/themes/default";

import { Header } from "./components/Header";
import { Score } from "./components/Score";
import { Todos } from "./components/Todos";

import { FormEvent, useEffect, useState } from "react";
import { ITask } from "./@types/styled";

export function App() {
  const [task, setTask] = useState("");
  const [todos, setTodo] = useState<ITask[]>([]);

  const loadTasks = () => {
    const saved = localStorage.getItem("todo");
    if (saved) {
      setTodo(JSON.parse(saved));
    }
  };

  useEffect(() => {
    loadTasks();
  }, []);

  const setTaskAndSave = (newTodo: ITask[]) => {
    localStorage.setItem("todo", JSON.stringify(newTodo));
    setTodo(newTodo);
  };

  const handleAddTask = (e: FormEvent) => {
    e.preventDefault();

    const newTask = {
      id: crypto.randomUUID(),
      task: task,
      isCompleted: false,
    };

    setTaskAndSave([...todos, newTask]);
    setTask("");
  };

  const handleDeleteTask = (todoId: string) => {
    const newTodo = [...todos].filter((todo) => todo.id !== todoId);
    setTaskAndSave(newTodo);
  };

  const handleComletedTodo = (todoId: string) => {
    const newTodo = [...todos].map((todo) => {
      if (todo.id === todoId) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted,
        };
      }
      return todo;
    });
    setTaskAndSave(newTodo);
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Header task={task} setTask={setTask} handleAddTask={handleAddTask} />
      <Score todos={todos} />
      <Todos
        todos={todos}
        handleDeleteTask={handleDeleteTask}
        handleComletedTodo={handleComletedTodo}
      />
      <GlobalStyle />
    </ThemeProvider>
  );
}
