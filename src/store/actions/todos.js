export const ACTION_CREATE_TODO = 'ACTION_CREATE_TODO'

const TODOS_URL = 'https://63d6296ee60d57436973f8d6.mockapi.io/todos/'

export const createTodo = (title) => {
    return (dispatch) => {
        console.log('hello from thunk')
        fetch(TODOS_URL, {
            method: 'POST',
            body: JSON.stringify({title, isDone: false}),
            headers: {
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => dispatch({
                type: ACTION_CREATE_TODO,
                payload: data
            }))
    }
}

export const ACTION_SET_TODOS = 'ACTION_SET_TODOS'

export const fetchTodos = () => (dispatch) => {
    fetch(TODOS_URL)
        .then(resp => resp.json())
        .then(data => dispatch({
            type: ACTION_SET_TODOS,
            payload: data
        }))
}

export const ACTION_DELETE_TODO = 'ACTION_DELETE_TODO'

export const deleteTodo = (id) => {
    return (dispatch) => {
        fetch(TODOS_URL + id, {
            method: 'DELETE'
        })

        dispatch({
            type: ACTION_DELETE_TODO,
            payload: id
        })
    }
}

export const ACTION_TOGGLE_TODO = 'ACTION_TOGGLE_TODO'

export const toggleTodo = (id) => {
    return (dispatch, getState) => {
        const {todos} = getState()
        const item = todos.todos.find(item => item.id === id)

        const newItem = {...item, isDone: !item.isDone}

        fetch(TODOS_URL + id, {
            method: 'PUT',
            body: JSON.stringify(newItem)
        })

        dispatch({
            type: ACTION_TOGGLE_TODO,
            payload: newItem
        })
    }
}
