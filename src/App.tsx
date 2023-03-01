import { useState } from 'react';
import { Todo } from './components/types';
import { MyTodoContext } from './components/contexts/TodoContext';
import CreateForm from './components/CreateForm';
import TodoList from './components/TodoList';
import './App.css';

const App: React.FC = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  return (
    <MyTodoContext.Provider value={{ todos, setTodos }}>
      <div className="App">
        <CreateForm />
        <TodoList />
      </div>
    </MyTodoContext.Provider>
  );
}

export default App;
