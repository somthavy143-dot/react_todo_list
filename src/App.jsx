import React, { useState } from "react";
import { X } from "lucide-react";

function App() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");
  const addTodo = () => {
    if(text.trim()) {
    setTodos([...todos,{id:Date.now(),name:text,completed:false}]);
    setText(""); }
  };
  const deleteTodo = (id) => {
    const todo = todos.filter ((t)=>t.id !== id)
    setTodos(todo)
  };

  const toggleCompleted = (id) => {
    setTodos ((prevTodo)=>
      prevTodo.map((todo)=>
       todo.id===id ? {...todo,completed:!todo.completed}: todo
      )
  )
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-r from-white to-yellow-300 ">
      <div className="p-16 bg-white rounded-2xl shadow-2xl">
        <h1 className="text-3xl font-bold">REACT TO DO LIST ✅</h1>
        <div className="flex mt-5 mb-3">
          <input
            type="text"
            value={text}
            placeholder="Todo..."
            onChange={(e)=>setText(e.target.value)}
            className="px-3 py-2 border border-pink-300 rounded-l-2xl focus:outline-none
          focus:ring-1 ring-pink-600"
          />
          <button 
          onClick={addTodo}
          className="px-6 py-2 bg-pink-300 text-white rounded-r-2xl border border-pink-300">
            Add
          </button>
        </div>
        <ul className="mb-4">
          {todos.length > 0 ? (
            todos.map((t) => (
              <li className="flex justify-between items-center border-b border-pink-300 transform hover:scale-105 duration-300 cursor-pointer">
                <div className="flex gap-5">
                  <input type="checkbox" value={t.completed} onChange={()=>toggleCompleted(t.id)} />
                  <p className={t.completed ? ' line-through':''}>{t.name}</p>
                </div>
                <button onClick={()=>deleteTodo(t.id)} className="py-2 px-3 bg-pink-300 rounded-md text-black">
                  <X className = 'w-4 h-4' />
                </button>
              </li>
            ))
          ) : (
            <p className="text-pink-300">No Task!</p>
          )}
        </ul>
      </div>
    </div>
  );
}

export default App;
