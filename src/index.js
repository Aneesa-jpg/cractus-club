import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import {Provider} from 'react-redux';
import './index.css';
import App from './App';
import store from './redux/store'


//The <Provider /> makes the Redux store available to any nested components that have been wrapped in the connect() function. Since any React component in a React Redux app can be connected, most applications will render a <Provider> at the top level, with the entire app's component tree inside of it.
ReactDOM.render(
  <Provider store={store}>    
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


