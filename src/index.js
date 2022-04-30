import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ReduxStore from './Components/Redux/ReduxStore';
import { Provider } from "react-redux";

ReactDOM.render(
  <Provider store={ReduxStore}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

