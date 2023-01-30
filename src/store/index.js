import {createStore, applyMiddleware, combineReducers} from "redux";
import todosReducer from './reducers/todos';
import filerReducer from './reducers/todosFilter';
import {logger} from "redux-logger/src";
import thunk from "redux-thunk";

const rootReducer = combineReducers({
    todos: todosReducer,
    filter: filerReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk, logger))

export default store
