import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { useBoolean, BooleanContextProvider } from "./context/MiContextoProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BooleanContextProvider>
      <App />
    </BooleanContextProvider>

  </React.StrictMode>,
)
