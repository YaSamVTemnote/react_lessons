import React, {useState} from 'react';

function Form({onSubmitForm}) {
    const [todo, setTodo] = useState({title: '', author: ''});

    const onChangeHandler = (e) => {
        const {value, name} = e.target
        setTodo({
            ...todo,
            [name]: value
        })
    }

    const onSubmit = (e) => {
        e.preventDefault()
        onSubmitForm(todo)
    }


    return (
        <form onSubmit={onSubmit}>
            <input type='text' value={todo.title} name='title' onChange={onChangeHandler}/>
            <input type='text' value={todo.author} name='author' onChange={onChangeHandler}/>
            <button>Send</button>
        </form>
    );
}

export default Form;
