import './App.css';
import TodoListForm from './components/molecules/TodoListForm';
import TodoList from './components/organisms/TodoList';


function App() {
  return (
    <div className='todoWrapper'>
      <TodoListForm/>
      <TodoList/>
    </div>
  );
}

export default App;
