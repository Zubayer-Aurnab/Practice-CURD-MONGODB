import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'




import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import PostUsers from './pages/PostUsers.jsx';
import DisplayUsers from './pages/DisplayUsers.jsx';
import UpdateUsers from './pages/UpdateUsers.jsx';



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <PostUsers />
      },
      {
        path: '/users',
        element: <DisplayUsers />,
        loader: () => fetch(`https://conceptual-session-01-k701thx7y-aurnabs-projects.vercel.app/users`)
      },
      {
        path: "/users/:id",
        element: <UpdateUsers />,
        loader: ({params}) => fetch(`https://conceptual-session-01-k701thx7y-aurnabs-projects.vercel.app/users/${params.id}`)
      }
    ]
  },
]);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
