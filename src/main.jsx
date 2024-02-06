import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Info from '../src/components/Info.jsx'



export default function Main(){
  return (
<BrowserRouter>
    <Routes>

      <Route path="/" element = {<App />}  />

      <Route path="/coffee/:id" element={<Info/>} />



    </Routes>
    </BrowserRouter>
   
    
  )
}


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Main />
  </React.StrictMode>,
)
