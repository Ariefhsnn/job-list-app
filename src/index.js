import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Index } from './pages/job-list';
import { Detail } from './pages/job-list/[id]';
import { Login } from './pages/auth/login';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />
  }, 
  {
    path: '/auth/login',
    element: <Login />
  },
  {
    path: '/list',
    element: <Index />
  },
  {
    path: '/list/:id',
    element: <Detail />
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
