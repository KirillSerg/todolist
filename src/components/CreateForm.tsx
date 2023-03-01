import { useState } from "react";
import { useGlobalContext } from "./contexts/TodoContext";

const CreateForm: React.FC = () => {
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [isEmptyTitle, setIsEmptyTitle] = useState<boolean>(false);
  const [isEmptyDescription, setIsEmptyDescription] = useState<boolean>(false);

  const { todos, setTodos } = useGlobalContext()

  const handlerInputTitle = (e:React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value)
    setIsEmptyTitle(false)
  }

  const handlerInputDescription = (e:React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value)
    setIsEmptyDescription(false)
  }

  const handlerCreateTodo = () => {
    if (title && description) {
      setTodos(todos.concat([{
        id: todos.length + 1,
        title,
        description,
        status: false,
      }]))

      setIsEmptyTitle(false)
      setIsEmptyDescription(false)
      setTitle("")
      setDescription("")
    } else if (!title) {
      setIsEmptyTitle(true)
      setIsEmptyDescription(false)
    } else if (!description) {
      setIsEmptyDescription(true)
      setIsEmptyTitle(false)
    }
  }

  return (
    <div className="creat-form">
      <div>
        <label style={{display: "block"}}>Title:</label>
        <input
          style={{ borderColor: isEmptyTitle ? "red" : "none" }}
          type="text" value={title}
          onChange={handlerInputTitle}
        />
        {isEmptyTitle && <label style={{ color: "red", display: "block" }}>This field is empty!</label>}
      </div>
      
      <div>
        <label style={{display: "block"}}>Description:</label>
        <input
          style={{ borderColor: isEmptyTitle ? "red" : "none" }}
          type="text" value={description}
          onChange={handlerInputDescription}
        />
        {isEmptyDescription && <label style={{ color: "red", display: "block" }}>This field is empty!</label>}
      </div>
      <div>
        <button onClick={handlerCreateTodo}>Create</button>
      </div>
    </div>
  )
}
export default CreateForm;