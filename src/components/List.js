import React from 'react';
import ListItem from "./ListItem";
import {connect} from "react-redux";
import {deleteTodo, toggleTodo} from "../store/actions/todos";

function List({todos, onDeleteItem, onToggleItem}) {
    return (
        <ul>
            {todos.map(todo => <ListItem key={todo.id} todo={todo} onDeleteItem={onDeleteItem} onToggleItem={onToggleItem} />)}
        </ul>
    );
}

function mapStateToProps({todos, filter}) {
    let items = todos.todos

    if(filter.value !== 'all') {
        items = items.filter(item => {
            return (filter.value === 'todo' && !item.isDone)
            || (filter.value === 'done' && item.isDone)
        })
    }

    return {
        todos: items,
    }
}

const mapDispatchToProps = {
    onDeleteItem: deleteTodo,
    onToggleItem: toggleTodo
}


export default connect(mapStateToProps, mapDispatchToProps)(List)
