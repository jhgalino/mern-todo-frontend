import { useState, useEffect } from "react";
import ToDoInput from "./ToDoInput";
import axios from 'axios';
import '../css/TodoList.css'

const TodoList = props => {
    const [todos, setTodos] = useState([]);

    const listItems = todos.map(todo => {
        return <li key={todo._id}>
                <ToDoInput val={todo.text} id={todo._id}/>
            </li>
    })

    useEffect(() => {
        axios.get('http://localhost:5000/api/todos').then(ok => {
                setTodos(ok.data.reverse());
            }).catch(err => {
                console.log(err);
            });
    });

    return(
        <ul id="no-bullets">
            {listItems}
        </ul>
    );
}

export default TodoList;