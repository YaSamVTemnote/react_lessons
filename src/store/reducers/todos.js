import {ACTION_TOGGLE_TODO, ACTION_CREATE_TODO, ACTION_DELETE_TODO, ACTION_SET_TODOS} from '../actions/todos'

const initialState = {
    todos: [],
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_DELETE_TODO:
            return {
                ...state,
                todos: state.todos.filter(todo => todo.id !== payload)
            }
        case ACTION_TOGGLE_TODO:
            return {
                todos: state.todos.map(item => item.id === payload.id
                ? payload
                : item)
            }
        case ACTION_CREATE_TODO:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    payload
                ]
            }
        case ACTION_SET_TODOS:
            return {todos: payload}
        default: return state
    }
}

export default rootReducer
