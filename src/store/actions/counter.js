// actions
export const ACTION_INCREMENT = 'ACTION_INCREMENT'
export const ACTION_DECREMENT = 'ACTION_DECREMENT'
export const ACTION_SET = 'ACTION_SET'

export const increment = () => ({type: ACTION_INCREMENT})
export const decrement = () => ({type: ACTION_DECREMENT})

export const set = (payload) => ({type: ACTION_SET, payload})
