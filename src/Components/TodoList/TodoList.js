import TodoItem from "../TodoItem/TodoItem"
import "./TodoList.css"

const TodoList = ({todos, onComplete, onDeleteItem}) => {
  return (
    <div className=" ms-3 me-4">
        {
        todos.map((todo, index)=>(
            <TodoItem key={`todo-${index}`} todo={todo} onComplete={onComplete} onDeleteItem={onDeleteItem} />
        ))
        }
    </div>
  )
}

export default TodoList