import { useState } from 'react';
import { useGlobalContext } from "./contexts/TodoContext"
import ModalTask from "./ModalTask"
import { Todo } from "./types"

const TodoItem: React.FC<Todo> = ({ id, title, description, status }) => {
  const [activForm, setActivForm] = useState<boolean>(false)

  const { todos, setTodos } = useGlobalContext()

  const handlerChangeStatus = () => {
    setTodos(todos.map(todo => todo.id === id ? {...todo, status: !status} : todo))
  }

  return (
    <>
    <li className="task-item">
      <div onClick={() => setActivForm(true)} style={{display:"flex", gap:"3rem"}}>
        <span style={{width: "20px"}}>{id+"."}</span>
        <div
          style={{
            display: "inline-block",
            width: "10rem",
            height: "22px",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}>
          {title}
        </div>
        <label
          style={{
            display: "inline-block",
            width: "15rem",
            height: "22px",
            overflow: "hidden",
            textOverflow: "ellipsis"
          }}>
          {description}
        </label>
      </div>
      <input style={{width: "50px", marginLeft:"3rem"}} type="checkbox" checked={status} onChange={handlerChangeStatus} />
    </li>
    <ModalTask activForm={activForm} setActivForm={setActivForm} carentTodo={{ id, title, description, status } } />
    </>
  )
}
export default TodoItem