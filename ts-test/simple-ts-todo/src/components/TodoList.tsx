import React from 'react';
import {ITodoItem} from "../entities/ITodoItem";
import TodoItem from "./TodoItem";

interface IProps {
    todos: ITodoItem[];
    setTodos:  React.Dispatch<React.SetStateAction<ITodoItem[]>>
}

const TodoList: React.FC<IProps> = ({todos, setTodos}) => {

    const onDoneTodo = (id: number): void => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, isDone: !todo.isDone} : todo))
    }

    const onDeleteTodo = (id: number): void => {
        setTodos(todos.filter(todo => todo.id !== id))
    }

    const onUpdateTodo = (id: number, title: string): void => {
        setTodos(todos.map(todo => todo.id === id ? {...todo, title} : todo))
    }

    return (
        <div>
            {todos.map(todo => <TodoItem todo={todo} key={todo.id} onDoneTodo={onDoneTodo} onDeleteTodo={onDeleteTodo} onUpdateTodo={onUpdateTodo}/>)}
        </div>
    );
};

export default TodoList;
