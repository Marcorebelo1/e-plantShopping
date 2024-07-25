// src/main.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import App from './App'; // Import the App component
import store from './store'; // Import the configured Redux store

ReactDOM.render(
  <Provider store={store}> {/* Provide the Redux store to the App */}
    <App />
  </Provider>,
  document.getElementById('root') // Ensure this matches the id of your root element in index.html
);
