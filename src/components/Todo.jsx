import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removetodo } from '../features/todo/todoSlice';

const Todo = () => {
  const [removingId, setRemovingId] = useState(null);
  const dispatch = useDispatch();
  const todos = useSelector((state) => state.todo.todo);

  const handleRemove = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      dispatch(removetodo(id));
      setRemovingId(null);
    }, 500); // Delay to show animation
  };

  return (
    <ul className="todo-list">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className={`todo-item ${
            removingId === todo.id ? 'fadeOut' : ''
          }`}
        >
          <span>{todo.text}</span>
          <button onClick={() => handleRemove(todo.id)}>Remove</button>
        </li>
      ))}
    </ul>
  );
};

export default Todo;
