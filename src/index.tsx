import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import store from '../src/redux/store'
import './index.css'
import App from './components/App/App'

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <Route path="/">
          <App />
        </Route>
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
)
