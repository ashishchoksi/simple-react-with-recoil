import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {Provider} from 'react-redux';
import {store} from './redux/store/store.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* Provider is sort of context api that make store availble to entire application. 
        so, no need for prop driling.
    */}
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
)
