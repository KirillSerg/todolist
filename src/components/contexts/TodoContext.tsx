import { createContext, useContext } from "react"
import { Todo } from "../types";

export type TodoContext = {
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
}

export const MyTodoContext = createContext<TodoContext>({
  todos: [],
  setTodos: () => {},
})
export const useGlobalContext = () => useContext(MyTodoContext)