import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Provider } from 'react-redux';
import {router} from './routes/router';
import { RouterProvider } from 'react-router-dom';
import store from './store/store.js'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
      <RouterProvider router={router}/>
  </Provider>
);


