import React from 'react'
import ReactDOM from 'react-dom/client'
// import {RouterProvider, createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
// import Rootlayout from './routes/RootLayout.jsx'
import './index.css'
// import NewPost from './routes/NewPost.jsx'

// const router=createBrowserRouter([
//   { path: '/', element: <Rootlayout />, children: [
//     { path: '/', element: <App />},
//     { path:'/create-post', element: <NewPost />},
//   ],
// }, 
// ]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  {/* <RouterProvider router={router}  /> */}
  <App />
  </React.StrictMode>,
)
