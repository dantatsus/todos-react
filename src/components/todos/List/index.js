import React, { useState } from 'react';

function List({ todos }) {
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

  return (
    <div id='list_container' className='list-group'>
      <ul>
        {todos.map((todo, i) => {
          const id = `checkbox${i}`;
          const isCompleted = completedTodos.has(i);
          return (
            <li key={i} className={`list-group-item ${isCompleted ? 'completed' : ''}`}>
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
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
