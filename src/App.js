import './styles/App.css';
import Tasks from './components/Tasks';
import Add from './components/Add';
import store from './app/store';
import { Provider } from 'react-redux';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>To Do List</h1>
        <Provider store={store}>
          <Tasks/>
          <Add/>
        </Provider>
      </header>
    </div>
  );
}

export default App;
