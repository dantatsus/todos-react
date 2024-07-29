import React, { useState } from 'react';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function List({ todos, setTodos }) {
  const [completedTodos, setCompletedTodos] = useState(new Set());

  const toggleComplete = (index) => {
    const newCompletedTodos = new Set(completedTodos);
    if (newCompletedTodos.has(index)) {
      newCompletedTodos.delete(index);
    } else {
      newCompletedTodos.add(index);
    }
    setCompletedTodos(newCompletedTodos);
  };

  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
    const newCompletedTodos = new Set(completedTodos);
    newCompletedTodos.delete(index);
    setCompletedTodos(newCompletedTodos);
  };

  return (
    <div id='list_container' className='list-group'>
      <ul>
        {todos.map((todo, i) => {
          const id = `checkbox${i}`;
          const isCompleted = completedTodos.has(i);
          return (
            <li key={i} className={`list-group-item ${isCompleted ? 'completed' : ''} d-flex justify-content-between align-items-center`}>
              <div>
                <input
                  className="form-check-input me-1"
                  type="checkbox"
                  id={id}
                  onChange={() => toggleComplete(i)}
                  checked={isCompleted}
                />
                <label className="form-check-label" htmlFor={id}>
                  {todo}
                </label>
              </div>
              <IconButton aria-label="delete" size="large" onClick={() => deleteTodo(i)}>
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