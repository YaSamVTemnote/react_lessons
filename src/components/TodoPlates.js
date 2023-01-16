import React from 'react';
import useTodos from "../hooks/useTodos";

function TodoPlates(props) {
    const {todos} = useTodos()
    return (
        <div>
            {todos.map(item => <div key={item.id} >{item.title}</div>)}
        </div>
    );
}

export default TodoPlates;
