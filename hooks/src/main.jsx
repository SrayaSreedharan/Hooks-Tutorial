import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import Usestate from './pages/Usestate.jsx'
import UseReducer from './pages/UseReducer.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* <App /> */}
    {/* <Usestate/> */}
    <UseReducer/>
  </StrictMode>,
)
