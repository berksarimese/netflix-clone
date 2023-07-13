import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter as Router } from 'react-router-dom';
import { createStore } from '@reduxjs/toolkit';
import rootReducer from './store';
import { applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';


const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
const store = createStore(rootReducer, applyMiddleware(thunk));

root.render(
  // <React.StrictMode>
    <Provider store = {store}>
      <Router>
          <App />
      </Router>
    </Provider>
  // </React.StrictMode>
);


