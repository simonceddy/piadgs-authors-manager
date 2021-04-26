import React from 'react';
import ReactDOM from 'react-dom';
import './shared/styles/index.css';
import './shared/styles/tailwind.css';
import { Provider } from 'react-redux';
import axios from 'axios';
import App from './App';
import reportWebVitals from './reportWebVitals';
import store from './store/index';

axios.defaults.baseURL = 'http://127.0.0.1:3030';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
