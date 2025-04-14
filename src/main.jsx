import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './components/App.jsx' // Adjust the path if App.jsx is in a subfolder like 'components'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
