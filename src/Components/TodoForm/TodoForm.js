import { useState } from "react"
import "./TodoForm.css"

const TodoForm = ({addTodo}) => {
  const [userInput, setUserInput] = useState('')

  const handleOnChange = (e) =>{
    setUserInput(e.target.value)
  }

  const handleSubmit = (e) =>{
    e.preventDefault()
    if(userInput.trim() !== ''){
      addTodo(userInput)
      setUserInput('')
    }
  }


  return (
    <div style={{margin: 20}} >
      <form onSubmit={handleSubmit} className="row justify-content-between ms-3 me-4 bg-white p-1">
        <input type="text" value={userInput} onChange={handleOnChange} className="col-6 col-sm-8 col-md-9 border-0 text-place" placeholder="TAREA"/>
        <button className="col-4 col-sm-3 col-md-2 btn btn-success border-white py-2 mx-2">Agregar</button>
      </form>
    </div>
  )
}

export default TodoForm