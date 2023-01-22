const API_URL = 'https://jsonplaceholder.typicode.com/todos'

export const getTodos = () => {
    return request()
}

export const deleteTodo = (id) => {
    return fetch(`${API_URL}/${id}`, {
        method: 'DELETE'
    })
        .then(resp => resp.json())
}

export const createTodo = (todo) => {
    return  fetch(API_URL, {
        method: 'POST',
        body: JSON.stringify(todo),
        headers: {'Content-Type': 'application/json'}
    })
        .then(resp => resp.json())
}

export const updateTodo = (todo) => {
    return  fetch(`${API_URL}/${todo.id}`, {
        method: 'PUT',
        body: JSON.stringify(todo),
        headers: {'Content-Type': 'application/json'}
    })
        .then(resp => resp.json())
}

const request = (config = {}, id = '') =>{
    config = {
        method: 'GET',
        ...config,
        headers: {'Content-Type': 'application/json', ...config.headers}
    }
    return fetch(`${API_URL}/${id}`, config).then(resp => resp.json())
}
