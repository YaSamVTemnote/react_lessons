import {ACTION_SET_TODOS_FILTER} from "../actions/todosFiler";


const initialState = {
    value: 'all',
}

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ACTION_SET_TODOS_FILTER:
            return {value: payload}
        default: return state
    }
}

export default rootReducer
