import { ADD_TODO, SET_TODO_INPUT } from "./constains";

const initState = {
    todo: [],
    inputTodo: '',
}
function reducer(state, action) {
    switch (action.type) {
        case SET_TODO_INPUT:
            return { ...state, inputTodo: action.payload }

        case ADD_TODO:
            return { ...state, todo: [...state.todo, action.payload] }
        default:
            throw new Error('invalid action')
    }
}
export { initState }
export default reducer