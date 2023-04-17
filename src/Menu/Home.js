import React, { useContext, useState } from 'react'
import { todosContext } from './TodoList/TodosContext'
import '../css/todos.css'
export default function Home() {

  const { todos, setTodos } = useContext(todosContext)
  const [todoA, setTodoA] = useState(null)
  return (
    <>
      <h1>TodoList</h1>
      <div className='add-todo'>
        <input type='text' value={todoA} onKeyDown={changeKey} onChange={changeHandler} />
        <button onClick={addTodo}>add</button>
      </div>
      {todos.map(todo => (
        <div className='todo' key={todo.name}>
          <p>{todo.name}</p>
          <div className='boxes' >

            <input type='checkbox' checked={todo.checked} onChange={() => todoCheckedChangeHandler(todo)} />
            <button onClick={() => deleteTodo(todo.id)}>delete</button>

          </div>
        </div>
      ))}
    </>
  )

  function changeKey(e) {
    if (e.key === 'Enter') addTodo()
  }

  function changeHandler(e) {
    setTodoA(e.target.value)
  }

  function todoCheckedChangeHandler(todo) {

    let idx = todos.indexOf(todo)

    const update = { ...todo, checked: !todo.checked }

    setTodos([
      ...todos.slice(0, idx),
      update,
      ...todos.slice(idx + 1)
    ])

  }

  function addTodo() {
    let id;
    if (todos.length === 0) {
      id = 1
    } else {
      id = todos[todos.length - 1].id + 1
    }

    setTodos([...todos, {
      name: todoA,
      id: id,
      checked: false
    }])
    setTodoA('')
    console.log(todos);
  }

  function deleteTodo(todo) {
    const id = todo

    const newTodo = todos.filter(td => td.id !== id)

    setTodos(newTodo)
  }
}
