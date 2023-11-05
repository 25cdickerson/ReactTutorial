/* eslint-disable react/prop-types */

/* Create a TodoItem component  */
// Get the passed variables ( completed (boolean), id (int), title (string), toggleTodo (function), deleteTodo (function))
export default function TodoItem({ completed, id, title, toggleTodo, deleteTodo}){
    return (
        <>
        <li key={id}>
            <label>
              <input type="checkbox" checked = {completed}
              onChange= {e => toggleTodo(id, e.target.checked)} />
              {title}
            </label>
            <button className="btn btn-danger" onClick = {() => deleteTodo(id)}>Delete</button>
          </li>
          </>
          )
}