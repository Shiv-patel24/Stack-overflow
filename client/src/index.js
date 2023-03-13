import React from 'react';
import ReactDOM from 'react-dom/client'; //'react-dom/client' react-dom
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
// import {createStore, applyMiddleware, compose} from 'redux'
import {legacy_createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import Reducers from './reducers'

const store =legacy_createStore(Reducers, compose(applyMiddleware(thunk)) )

// const root = ReactDOM.createRoot(document.getElementById('root'));
// // ReactDOM.render(
//   root.render(
//   <Provider store={store}>
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
//   </Provider>
//   // document.getElementById('root')
// );

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Provider>
);


