import { useState } from 'react';
import './App.css';
import TodoForm from './Components/TodoForm/TodoForm';
import TodoList from './Components/TodoList/TodoList';


function App() {
  const [todos, setTodos] = useState([])

  const onComplete = (id) =>{
    setTodos(    todos.map((todo) =>{
      return todo.id === Number(id) ? {...todo, completed: !todo.completed} : {...todo}
    }))
  }

  const onDeleteItem = (id) =>{
    setTodos(
      [...todos].filter(todo => todo.id !== id)
    )
  }

  const addTodo = (newTodo) =>{
    console.log(`newTodo ${newTodo}`)
    let newItem = {
      "id": +new Date(),
      "task": newTodo,
      "completed": false
    }
    setTodos([...todos, newItem])
  }

  return (
    <div className='container recuadro'>
      <div className="container1  w-100 ">
        <h3 className='text-center  text-uppercase lista-de-tareas'>LISTA DE TAREAS</h3>
        <TodoForm addTodo={addTodo} />
        <TodoList todos={todos} onComplete={onComplete} onDeleteItem={onDeleteItem}/>
      </div>
    </div>

  );
}

export default App;
