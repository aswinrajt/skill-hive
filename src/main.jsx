import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './index.css'
import Header from '../src/Components/Header.jsx'
import Contextapi from './Context/Contextapi.jsx'
// import { Provider } from 'react-redux'
// import eventStore from './Redux/store.js'




createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Header />
      {/* <Provider store={eventStore}> */}
        <Contextapi>
          <App />
        </Contextapi>
      {/* </Provider> */}
    </BrowserRouter>
  </StrictMode>
)
