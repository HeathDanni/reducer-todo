import React, { useState, useReducer } from 'react';
import { initialState, Reducer, TODO_ITEM } from '../reducers/Reducer';


const TodoList = () => {
    const [todo, setTodo] = useState("");
    const [todoList, setTodoList] = useState([]);
    const [state, dispatch] = useReducer(Reducer, initialState);

    const handleChange = (e) => {
        setTodo(e.target.value);
        console.log(todo);
    };

    const onSubmit = (e) => {
        dispatch({type: TODO_ITEM, payload: todo});
        setTodoList([...todoList, state]);
        setTodo("");
    };

    console.log(todoList);

    return (
        <div>
            <label>
                Enter new todo item: 
                <input onChange={handleChange}
                value={todo}>
                </input>
            </label>
            <button 
            type="submit" 
            onClick = {onSubmit}
            >Add Todo</button>
            <div>
                <div>
                    {todoList.map((el) => <p>{el.item}</p>)}
                </div>
            </div>
        </div>
    )
};

export default TodoList;