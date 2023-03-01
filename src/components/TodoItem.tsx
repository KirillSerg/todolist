import { useGlobalContext } from "./contexts/TodoContext"
import { Todo } from "./types"

const TodoItem = ({ id, title, description, status }: Todo) => {

  const { todos, setTodos } = useGlobalContext()

  const handlerChangeStatus = () => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, status: !status} : todo))
  }

  return (
    <li className="task-item">
      <label style={{display:"flex", gap:"3rem"}}>
        <span style={{width: "20px"}}>{id+"."}</span>
        <div
          style={{
            display: "inline-block",
            width: "10rem",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}>
          {title}
        </div>
        <div
          style={{
            display: "inline-block",
            width: "15rem",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}>
          {description}
        </div>
        <input style={{width: "50px"}} type="checkbox" checked={status} onChange={handlerChangeStatus} />
      </label>
    </li>
  )
}
export default TodoItem