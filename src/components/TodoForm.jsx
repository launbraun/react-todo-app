import React, {useState, useEffect, useRef} from 'react'

const TodoForm = (props) => {

    const [input, setInput] = useState(props.edit ? props.edit.value : '')

    const inputRef = useRef(null)

    useEffect(() => {
        inputRef.current.focus()
    })


    const handleChange = e => {
        setInput(e.target.value)
    }
    const handleSubmit = e => {
        e.preventDefault()

        props.onSubmit({
            id: Math.floor(Math.random() * 10000),
            text: input
        })
        setInput('')

    }

    return (
        <form className={'todoForm'} onSubmit={handleSubmit}>
            {props.edit
                ? (
                    <>
                        <input type="text"
                               placeholder={'Измените задание'}
                               name={'text'}
                               value={input}
                               className={'todoInput'}
                               ref={inputRef}
                               onChange={handleChange}/>
                        <button className={'todoButton'}>Изменить</button>
                    </>
                )
                : (
                    <>
                        <input type="text"
                               placeholder={'Добавьте задание в список дел'}
                               name={'text'}
                               value={input}
                               className={'todoInput'}
                               ref={inputRef}
                               onChange={handleChange}/>
                        <button className={'todoButton'}>Добавить задание</button>
                    </>)}

        </form>
    )

}

export default TodoForm
