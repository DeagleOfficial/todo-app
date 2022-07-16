import './App.css';
import TasksList from './components/TasksList';

const App = () => {
  return (
    <div className="App container-fluid">
      <h4>To-Do List</h4>

      <TasksList />
    </div>
  );
}

export default App;
