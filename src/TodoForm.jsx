import { useState } from "react"
import "./styles.css"

// eslint-disable-next-line react/prop-types
export default function TodoForm({ onSubmit }) {
    /* State Variables */
    // Variables in react are immutable, so you need to use a function to set their properties
    const [newItem, setNewItem] = useState("")

    /* Function to handle the submittion of the form */
    function handleSubmit(e){
        // If this method is called, the default action of the event will not be triggered.
        e.preventDefault();

        // Handle setting the checkboxes after entering
        if (newItem === ""){
            return
        }

        onSubmit(newItem);

        // Reset the form
        setNewItem("")
    }

    return (
        <>
        <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
        <label htmlFor="item">New Item</label>
        <input 
            value={newItem} 
            onChange={
            e => setNewItem(e.target.value) 
            }
            type="text" id ="item" />
        </div>
        <button className="btn">Add</button>
    </form>
        </>
    )
}