import React, {useState} from 'react'
import "./App.css"
import Form from "./components/Form";
import TodoList from "./components/TodoList";

const App = () => {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

  return (
    <div>
      <h1>ToDo Lista</h1>
   <Form inputText={inputText} setInputText={setInputText} todos={todos} setTodos={setTodos}/>
   <TodoList todos={todos} setTodos={setTodos} />
   </div>
  );
};

export default App;