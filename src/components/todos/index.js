import {useState, useEffect} from 'react'
import Form from './Form'
import List from './List'

function Todos() {
    const [todos, setTodos ] = useState([]);

    useEffect(() => {
        console.log(todos)
    }, [todos])
  return (
    <div>
      <h1 id='title'> todos.</h1>
      <Form addTodos={setTodos} todos={todos} />
      <List todos={todos} />
    </div>
  )
}

export default Todos
