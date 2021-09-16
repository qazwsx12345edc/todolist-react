import './App.css';
import TodoList from './components/TodoList'

const data = []

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <TodoList data={data} />
      </header>
    </div>
  );
}

export default App;
