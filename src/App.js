import { useRef } from "react";
import { actions, useStore } from "./store";



function App() {
  const [state, dispath] = useStore()
  const { todo, inputTodo } = state
  const inputRef = useRef()
  const handleTodo = () => {
    dispath(actions.addTodo(inputTodo))
    inputRef.current.focus()
    dispath(actions.setTodoInput(''))
  }
  return (
    <div className='App'>
      <input ref={inputRef} placeholder="Enter todo..." value={inputTodo} onChange={(e) => { dispath(actions.setTodoInput(e.target.value)) }} />
      <button onClick={handleTodo}>ADD</button>
      <ul>
        {todo.map((todo, index) => (<li key={index}>{todo}</li>))}
      </ul>
    </div>

  );
}

export default App;
