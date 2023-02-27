import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import './index.css'
import axios from 'axios'
import { Provider } from 'react-redux'
import store from './store'

axios.defaults.baseURL = "https://api.themoviedb.org/3/movie"
// axios.defaults.baseURL = "https://api.themoviedb.org/3"

ReactDOM.createRoot(document.getElementById('root')).render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>
)
