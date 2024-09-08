import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import Intro from './pages/Intro';
import ClassComponent1 from './pages/class-components/ClassComponent1';
import ErrorPage from './components/common/ErrorPage';
import FunctionalComponent from './pages/functional-components/FunctionalComponent';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: '/',
        element:<Intro/>
      },
      {
        path: 'class-components',
        element: <ClassComponent1 />
      },
      {
        path: 'functional-components',
        element: <FunctionalComponent />
      },
      {
        path: '*', // Catch-all route for 404 errors
        element: <ErrorPage />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
