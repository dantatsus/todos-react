import React from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { updateItem, deleteItem } from '../../../api';

function List({ todos, updateTodo, deleteTodo }) {
  const toggleComplete = async (todo) => {
    const updatedTodo = { ...todo, completed: !todo.completed };

    try {
      const response = await updateItem(todo.id, updatedTodo);
      updateTodo(response.data);
    } catch (error) {
      console.error("There was an error updating the item!", error);
    }
  };

  const handleDelete = async (todo) => {
    try {
      await deleteItem(todo.id);
      deleteTodo(todo.id);
    } catch (error) {
      console.error("There was an error deleting the item!", error);
    }
  };

  console.log(todos)

  return (
    <div id='list_container' className='list-group'>
      <ul>
        {todos.map((todo, i) => {
          const id = `checkbox${i}`;
          return (
            <li key={todo.id} className={`list-group-item ${todo.completed ? 'completed' : ''} d-flex justify-content-between align-items-center`}>
              <div>
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  id={id}
                  onChange={() => toggleComplete(todo)}
                  checked={todo.completed}
                />
                <label className="form-check-label" htmlFor={id}>
                  {todo.description}
                </label>
              </div>
              <IconButton aria-label="delete" size="large" onClick={() => handleDelete(todo)} color='secondary'>
                <DeleteIcon />
              </IconButton>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;