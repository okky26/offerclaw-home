import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { HashRouter as Router } from 'react-router-dom'
import './index.css'
import { Provider } from 'react-redux'
import reduxStore from './reduxStore/reduxStore'

ReactDOM.createRoot(document.getElementById('root')).render(
    <Router>
      <Provider store={reduxStore}>
        <App />
      </Provider>
    </Router>
)
