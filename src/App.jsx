import { useEffect, useState } from "react"
import "./styles.css"
import TodoForm from './TodoForm.jsx'
import TodoList from "./TodoList.jsx"

/* Set the name of the component to 'App' */
export default function App() {

  /* State Variables */
  // Variables in react are immutable, so you need to use a function to set their properties
  const [todos, setTodos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS")
    if(localValue == null){
      return []
    }

    return JSON.parse(localValue)
  })

  useEffect(() => {
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos])

  function addTodo(title) {
    setTodos((currentTodos) => {
      return [
          ...currentTodos,
          { id: crypto.randomUUID(), title, completed: false }
      ]
      })
  }

    /* Function that deals with the checkboxes on the todo list (Allows them to be checked) */
    function toggleTodo(id, completed){
        // Get the particular todo using a map anonomous function and set the completed attribute based on the input
        setTodos(currentTodos => {
        return currentTodos.map(todo => {
            if (todo.id === id){
            return { ...todo, completed}
            }
            return todo;
        })
        })
    }

  function deleteTodo(id) {
    setTodos(currentTodos => {
      return currentTodos.filter(todo => todo.id !== id)
    })
  }

  // Return the component to be used by main.jsx
  return (
  <>
  <TodoForm onSubmit={addTodo}/>
  <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
  </>
  )
}