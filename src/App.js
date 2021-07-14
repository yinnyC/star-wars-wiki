import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';
import './App.css';
import StarWars from './StarWars/StarWars'
const store = createStore(rootReducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <header className="App-header">
          <h1>Yin Chang - FEW2.3</h1>
        </header>
        <StarWars />
      </div>
    </Provider>
  );
}

export default App;
