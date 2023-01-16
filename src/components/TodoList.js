import React, {useEffect, useState} from 'react';
import List from "./List";
import Form from "./Form";
import Counter from "./Counter";
import useTodos from "../hooks/useTodos";

function TodoList(props) {
    // const [todos, setTodos] = useState([])
    //
    // useEffect(() => {
    //     fetch('https://jsonplaceholder.typicode.com/todos')
    //         .then(resp => resp.json())
    //         .then(data => setTodos(data))
    // }, []);
    //
    //
    //
    // const deleteTodoItem = (id) => {
    //     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    //         method: 'DELETE'
    //     })
    //     const newTodos = todos.filter(todo => todo.id !== id)
    //     setTodos(newTodos)
    // }
    //
    // const addTodoItem = (todo) => {
    //     todo = {...todo, completed: false}
    //
    //     fetch('https://jsonplaceholder.typicode.com/todos', {
    //         method: 'POST',
    //         body: JSON.stringify(todo),
    //         headers: {'Content-Type': 'application/json'}
    //     })
    //         .then(resp => resp.json())
    //         .then(data => setTodos([...todos, data]))
    // }
    //
    // const toggleTodoItem = (id) => {
    //     let newItem = todos.find((todo) => todo.id === id)
    //
    //     newItem = {...newItem, completed: !newItem.completed}
    //
    //     const newTodos = todos.map(todo => todo.id === id ? newItem : todo)
    //     setTodos(newTodos)
    //
    //     fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
    //         method: 'PUT',
    //         body: JSON.stringify(newItem),
    //         headers: {'Content-Type': 'application/json'}
    //     })
    // }
    const {todos, toggleTodoItem, deleteTodoItem, addTodoItem} = useTodos()

    return (
    <>
        <List todos={todos} onDeleteItem={deleteTodoItem} onToggleItem={toggleTodoItem}/>
        <Form onSubmitForm={addTodoItem}/>
    </>
    );
}

export default TodoList;
