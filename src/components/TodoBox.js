import { useState } from "react";
import axios from 'axios';

const TodoBox = props => {
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/create', {
            todo: {value}
        }).then(ok => {
            console.log(ok);
        }).catch((err) => {
            console.log(err);
        });
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" value={value} placeholder="Add todo" onChange={handleChange}></input>
            <button type="submit">Add!</button>
        </form>
    );
}

export default TodoBox;