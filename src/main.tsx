import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import ToDoContext from './store/ToDoContext.tsx'
import { BrowserRouter } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <ToDoContext>
    <App />
    </ToDoContext>
    </BrowserRouter>
  </React.StrictMode>,
)
