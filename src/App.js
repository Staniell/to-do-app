import { queryHelpers } from '@testing-library/react';
import './styles/App.css';
import Tasks from './components/tasks';
import Add from './helpers/Add';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <Tasks/>
        
        <Add/>

      </header>
    </div>
  );
}

export default App;
