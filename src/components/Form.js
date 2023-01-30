import React, {useState} from 'react';
import {createTodo, deleteTodo, toggleTodo} from "../store/actions/todos";
import {connect} from "react-redux";

function Form({onSubmitForm}) {
    const [todo, setTodo] = useState({title: ''});

    const onChangeHandler = (e) => {
        const {value, name} = e.target
        setTodo({
            ...todo,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(todo.title)
    }


    return (
        <form onSubmit={onSubmit}>
            <input type='text' value={todo.title} name='title' onChange={onChangeHandler}/>
            <button>Send</button>
        </form>
    );
}

const mapDispatchToProps = {
    onSubmitForm: createTodo,
}

// const mapDispatchToProps = (dispatch) => {
//     return {
//         onDeleteItem: () => console.log('Hello from delete'),
//         onToggleItem: (payload) => dispatch(toggleTodo(payload))
//     }
// }


export default connect(null, mapDispatchToProps)(Form)
