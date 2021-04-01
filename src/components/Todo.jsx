import React, {useState} from 'react'
import {RiCloseCircleLine, TiEdit} from "react-icons/all";
import TodoForm from "./TodoForm";



const Todo = ({todos, completeTodo, removeTodo, updateTodo}) => {

    const [edit, setEdit] = useState({
        id: null,
        value: ''
    })

    const submitUpdate = value => {
        updateTodo(edit.id, value)
        setEdit({
            id: null,
            value: ''
        })
    }

    if (edit.id) {
        return <TodoForm edit={edit} onSubmit={submitUpdate} />
    }




    return todos.map((todo, index) => (
        <div className={todo.isComplete ? 'todoRow complete' : 'todoRow'}
             key={index}>

            <div key={todo.id} onClick={() => completeTodo(todo.id)}>
                {todo.text}
            </div>
            <div className={'icons'}>
                <RiCloseCircleLine onClick={() => removeTodo(todo.id)}
                className={'deleteIcon'} />
                <TiEdit onClick={() => setEdit({id: todo.id, value: todo.text})}
                        className={'editIcon'} />
            </div>

        </div>
    ))
}
export default Todo
