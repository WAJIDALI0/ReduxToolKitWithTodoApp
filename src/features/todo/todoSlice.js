import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todo: [
    {
      id: 1,
      text: "Learn Redux Toolkit",
    },
  ],
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addtodo: (state, action) => {
      const newTodo = {
        id: nanoid(),
        text: action.payload,
      };
      state.todo.push(newTodo);
    },
    removetodo: (state, action) => {
      state.todo = state.todo.filter((todo) => todo.id !== action.payload);
    },
  },
});

export const { addtodo, removetodo } = todoSlice.actions;
export default todoSlice.reducer;
