const {createStore} = require('redux')

const initialState = {
    counts: 0,
    lastUpdate: null
}

// actions
const ACTION_INCREMENT = 'inc'
const ACTION_DECREMENT = 'dec'
const ACTION_SET = 'set'

const increment = () => ({type: ACTION_INCREMENT})
const decrement = () => ({type: ACTION_DECREMENT})

const set = (payload) => ({type: ACTION_SET, payload})

const rootReducer = (state = initialState, {type, payload}) => {

    switch (type) {
        case ACTION_INCREMENT: return {...state, counts: state.counts + 1}
        case ACTION_DECREMENT: return {...state, counts: state.counts - 1}
        case ACTION_SET: return {...state, counts: payload}
        default: return state
    }
}

const store = createStore(rootReducer)

console.log(1, store.getState())

store.subscribe(() => console.log('subscription fired',store.getState()))

store.dispatch(increment())
store.dispatch(increment())
console.log(2, store.getState())
store.dispatch(decrement())
store.dispatch(set(42))

console.log(3, store.getState())
