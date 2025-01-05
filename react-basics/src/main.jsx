import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById("root"))

function Page(){
  return(
    <div>
      <header>
        <img src="/src/assets/images/React.js_logo-512.webp" alt="React logo" width="50px" />
      </header>
      <h1>Reasons Im exited to learn React</h1>
      <ol>
        <li>Component-based architecture: React's modular approach allows you to build reusable components, making development more efficient and maintainable.</li>
    
        <li>Fast rendering with Virtual DOM: React optimizes updates to the actual DOM, ensuring smooth and fast user interfaces.</li>
      </ol>
    <footer>
      <small>©️ 2024 React Development. All rights reserved.</small>
    </footer>
    </div>
    
  )
}

root.render(
  <Page/>
)