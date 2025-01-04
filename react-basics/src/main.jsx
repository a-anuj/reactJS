import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

const root = createRoot(document.getElementById("root"))

const testElement = 
<div>
  <h1>Hello from react world!!</h1>
  <a href="https://www.google.com">Sample Link</a>
</div>

root.render(testElement)
