import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"))

const testElement = 
<div>
  <img src="/src/assets/images/React.js_logo-512.webp" width="40px" alt="" />
  <h1>Fun Facts about React</h1>
  <ul>
    <li>Was released in 2013</li>
    <li>Was originally created by Jordan Walke</li>
    <li>Has well over 100k stars on github</li>
    <li>It is maintained by meta</li>
    <li>Power thousands of enterprise apps</li>
  </ul>
</div>

root.render(testElement)
