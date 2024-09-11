import {createContext, useContext} from 'react'

const TodoContext = createContext({
    todos : [
        {
            id: 32435,
            todo: "msg",
            checked: false,
        }
    ],
    addTodo: (todo) =>{},
    updateTodo: (id,todo)=>{},
    deleteTodo: (id)=>{},
    toggleTodo: (id)=>{}
})

export const TodoContextProvider = TodoContext.Provider
export function useTodo(){
    return useContext(TodoContext)
}