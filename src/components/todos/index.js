import React, { useState, useEffect } from 'react'
import Form from './Form'
import List from './List'
import { getAllItems } from '../../api'

function Todos() {
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        loadItems();
    }, []);

    const loadItems = async () => {
        try {
            const response = await getAllItems();
            setTodos(response.data);
        } catch (error) {
            console.error("There was an error fetching the items!", error);
        }
    };

    const addTodo = (newTodo) => {
        setTodos(prevTodos => [...prevTodos, newTodo]);
    };

    const updateTodo = (updatedTodo) => {
        setTodos(prevTodos => prevTodos.map(todo => 
            todo.id === updatedTodo.id ? updatedTodo : todo
        ));
    };

    const deleteTodo = (id) => {
        setTodos(prevTodos => prevTodos.filter(todo => todo.id !== id));
    };

    return (
        <div>
            <h1 id='title'> todos.</h1>
            <Form addTodo={addTodo} />
            <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        </div>
    )
}

export default Todos