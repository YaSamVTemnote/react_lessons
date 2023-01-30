import React from 'react';
import {connect} from "react-redux";
import {setTodosFilter} from "../store/actions/todosFiler";

function Filters({setFilter}) {
    return (
        <div>
            <button onClick={() =>setFilter('all')}>All</button>
            <button onClick={() =>setFilter('done')} >Done</button>
            <button onClick={() =>setFilter('todo')} >TODO</button>
        </div>
    );
}

const mapDispatchToProps = {
    setFilter: setTodosFilter
}

export default connect(null, mapDispatchToProps)(Filters)
