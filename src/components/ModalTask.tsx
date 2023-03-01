import { useGlobalContext } from "./contexts/TodoContext";
import { Todo } from "./types";

interface ModalProps {
  activForm: boolean;
  setActivForm: React.Dispatch<React.SetStateAction<boolean>>;
  carentTodo: Todo;
}

const ModalTask: React.FC<ModalProps> = ({activForm, setActivForm, carentTodo}) => {
  const { todos, setTodos } = useGlobalContext()

  const handlerChangeStatus = () => {
    setTodos(todos.map(todo => todo.id === carentTodo.id ? {...todo, status: !carentTodo.status} : todo))
  }

  return (
    <div
    className={activForm ? "modal__bg activ" : "modal__bg"}
    onClick={() => setActivForm(false)}
    >
      <div
        className={activForm ? "modal__conteiner activ" : "modal__conteiner"}
        onClick={(e) => e.stopPropagation()}
      >
        <h1 style={{textAlign: "center"}}>{carentTodo.title}</h1>
        <h4>Description:</h4>
        <div style={{paddingLeft: "1rem", wordBreak: "break-all"}}>{carentTodo.description}</div>
        <div style={{marginTop: "1.5rem"}}>
          <label>Status:</label>
          <input style={{width: "50px", display: "inline"}} type="checkbox" checked={carentTodo.status} onChange={handlerChangeStatus} />
        </div>
          <button
            style={{marginTop: "1rem"}}
            type="submit"
            onClick={() => setActivForm(false)}
          >
            Close
          </button>
      </div>
    </div>
  )
}
export default ModalTask