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
        setValue('');
    }

    return (
        <div className="w-auto">
            <form onSubmit={handleSubmit} className="space-x-5">
                <input type="text" name="todo" value={value} placeholder="Add todo" onChange={handleChange} className="border-gray-900 border-b text-3xl"></input>
                <button type="submit" className="border border-gray-900 text-2xl rounded p-1">Add!</button>
            </form>
        </div>
    );
}

export default TodoBox;