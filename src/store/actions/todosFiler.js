export const ACTION_SET_TODOS_FILTER = 'ACTION_SET_TODOS_FILTER'

export const setTodosFilter = (payload) => {
    return {
        type: ACTION_SET_TODOS_FILTER,
        payload
    }
}
