import React, { useState, useReducer } from 'react';

const TodoList = () => {
    const [todo, setTodo] = useState("");

    const handleChange = (e) => {
        setTodo(e.target.value);
        console.log(todo);
    };

    return (
        <div>
            <label>
                Enter new todo item: 
                <input onChange={handleChange}></input>
            </label>
            <button type="submit">Add Todo</button>
        </div>
    )
};

export default TodoList;