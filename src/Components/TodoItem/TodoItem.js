import "./TodoItem.css"

const TodoItem = ({todo, onComplete, onDeleteItem}) => {

    const getStyle = () =>{
        return{
            textDecoration: todo.completed ? 'line-through' : "none",
            margin: "0px 20px 1px 20px",
            backgroundColor: "white"
        }
    }


  return (
    <div style={getStyle()} className="d-flex justify-content-between p-2 align-items-center fw-bold fs-6 text-uppercase">
        <div>
            <input type="checkbox" className="mx-2 form-check-input " checked={todo.completed} 
            onChange={() => onComplete(todo.id)}/>
            {todo.task}
        </div>
        <button className=" btn btn-danger mx-2"  onClick={() => onDeleteItem(todo.id)}>Eliminar</button>
    </div>
  )
}

export default TodoItem