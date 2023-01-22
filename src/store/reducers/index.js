import {ACTION_DECREMENT, ACTION_INCREMENT, ACTION_SET} from "../actions/counter";

const initialState = {
    counts: 0,
    updatedAt: null
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_INCREMENT: return {...state, counts: state.counts + 1, updatedAt: Date.now()}
        case ACTION_DECREMENT: return {...state, counts: state.counts - 1, updatedAt: Date.now()}
        case ACTION_SET: return {...state, counts: payload, updatedAt: Date.now()}
        default: return state
    }
}

export default rootReducer
