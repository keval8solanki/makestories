import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import { createStore } from 'redux'
import { Provider } from 'react-redux'
import root_reducer from './reducers/root_reducer'
const store = createStore(root_reducer)

ReactDOM.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
  document.getElementById('root')
);