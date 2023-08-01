import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createBrowserRouter, RouterProvider} from 'react-router-dom';
import ErrorP from './pages/ErrorP';
import TonAventure from './pages/TonAventure';
import PlusDInfo from './pages/PlusDInfo';
import StylePB from './pages/StylePB';


const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <ErrorP />,
  },
  {
    path:'/styles',
    element:<StylePB />,
    errorElement: <ErrorP/>
  },
  {
    path:'/plus-d-infos',
    element:<PlusDInfo />,
    errorElement: <ErrorP/>
  },
  {
    path:'/ton-aventure',
    element:<TonAventure/>,
    errorElement: <ErrorP/>
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
