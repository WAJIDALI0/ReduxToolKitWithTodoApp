import { Provider } from 'react-redux';
import './App.css';
import AddTodo from './components/AddTodo';
import Todo from './components/Todo';
import { store } from './app/store';

function App() {
  return (
    <Provider store={store}>
      <div className="container">
        <h1 className="name">Todo App</h1>
        <AddTodo />
        <Todo />
      </div>
    </Provider>
  );
}

export default App;
