import { ADD_TODO, SET_TODO_INPUT } from "./constains"

export const setTodoInput = (payload) => {
    return { type: SET_TODO_INPUT, payload }
}
export const addTodo = (payload) => {
    return { type: ADD_TODO, payload }
}