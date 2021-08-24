import { useState, useEffect } from "react";
import axios from 'axios';

// requires a value, setvalue, submit function, and id
const ToDoInput = props => {
    const [value, setValue] = useState("");
    const handleChange = e => {
        setValue(e.target.value);
    }

    useEffect(() => {
        setValue(props.val)
    }, []);

    const handleSubmit = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/update', {
            id: props.id,
            newText: {value}
        }).then(ok => {
            console.log(ok);
        }).catch(e => {
            console.log(e);
        });
    }

    const handleDelete = e => {
        e.preventDefault();
        axios.post('http://localhost:5000/api/delete', {
            id: props.id
        }).then(ok => {
            console.log(ok);
        }).catch(e => {
            console.error(e);
        });
    }

    return(
        <form onSubmit={handleSubmit}>
            <input type="text" name="todo" value={value} onChange={handleChange}></input>
            <button type="button" onClick={handleDelete}>Delete</button>
        </form>
    )
}

ToDoInput.defaultProps = {
    
}

export default ToDoInput;