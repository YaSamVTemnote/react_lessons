import {useEffect, useState} from "react";
import {createTodo, deleteTodo, getTodos, updateTodo} from "../api";

export default function useTodos() {
    const [todos, setTodos] = useState([])

    useEffect(() => {
        getTodos()
            .then(data => setTodos(data))
    }, []);



    const deleteTodoItem = (id) => {
        deleteTodo(id)
        const newTodos = todos.filter(todo => todo.id !== id)
        setTodos(newTodos)
    }

    const addTodoItem = (todo) => {
        todo = {...todo, completed: false}

        createTodo(todo)
            .then(data => setTodos([...todos, data]))
    }

    const toggleTodoItem = (id) => {
        let newItem = todos.find((todo) => todo.id === id)

        newItem = {...newItem, completed: !newItem.completed}

        const newTodos = todos.map(todo => todo.id === id ? newItem : todo)
        setTodos(newTodos)

        updateTodo(newItem)
    }
    return {
        todos, addTodoItem, deleteTodoItem, toggleTodoItem
    }
}
