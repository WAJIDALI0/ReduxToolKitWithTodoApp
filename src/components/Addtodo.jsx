import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addtodo } from '../features/todo/todoSlice';

const AddTodo = () => {
  const [input, setInput] = useState('');
  const dispatch = useDispatch();

  const handleAddTodo = (e) => {
    e.preventDefault();
    if (input.trim() !== '') {
      dispatch(addtodo(input));
      setInput('');
    }
  };

  return (
    <form onSubmit={handleAddTodo} className="todo-form">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Add a new todo..."
      />
      <button type="submit">Add</button>
    </form>
  );
};

export default AddTodo;
