import React, {useEffect, useState} from 'react';
import List from "./List";
import Form from "./Form";

const todos = [
    {id: 1, title: 'Task 1', isDone: false},
    {id: 2, title: 'Task 2', isDone: true},
    {id: 3, title: 'Task 3', isDone: false},
]

function TodoList(props) {
    const [todos, setTodos] = useState([
        {id: 1, title: 'Task 1', isDone: false},
        {id: 2, title: 'Task 2', isDone: true},
        {id: 3, title: 'Task 3', isDone: false},
    ])

    const [count, setCount] = useState(0);
    const [secondCount, setSecondCount] = useState(0);

    useEffect(() => {
        console.log('Current count', count)
        console.log('Second count', secondCount)
    }, [count, secondCount]);


    const deleteTodoItem = (id) => {
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const addTodoItem = (todo) => {
        todo = {...todo, id: Date.now(), isDone: false}
        setTodos([...todos, todo])
    }

    const toggleTodoItem = (id) => {
        const newTodos = todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo)
        setTodos(newTodos)
    }

    return (
    <>
        <List todos={todos} onDeleteItem={deleteTodoItem} onToggleItem={toggleTodoItem}/>
        <Form onSubmitForm={addTodoItem}/>
        <button onClick={() => setCount(count + 1)}>{count}</button>
        <button onClick={() => setSecondCount(secondCount + 1)}>{secondCount}</button>
    </>
    );
}

export default TodoList;
