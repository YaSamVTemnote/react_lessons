import React from 'react';

function ListItem({todo, onDeleteItem, onToggleItem}) {

    const onDeleteTodo = (e) => {
        e.stopPropagation()
        onDeleteItem(todo.id)
    }

    const onToggle = () => {
        onToggleItem(todo.id)
    }

    return (
        <li onClick={onToggle}>
            {todo.title} - {'' + todo.completed}
            <button onClick={onDeleteTodo}>X</button>
        </li>
    );
}

export default ListItem;
