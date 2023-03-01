import { useGlobalContext } from "./contexts/TodoContext"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const { todos } = useGlobalContext()

  return (
    <div>
      <label className="list-header">
        <span style={{width: "20px"}}>ID</span>
        <span style={{width: "10rem"}}>Title</span>
        <span style={{width: "15rem"}}>Description</span>
        <span style={{width: "50px"}}>Status</span>
      </label>
      <ul style={{padding: "0px"}}>
        {todos.map(todo => <TodoItem key={todo.id} {...todo} />)}
      </ul>
    </div>
  )
}
export default TodoList