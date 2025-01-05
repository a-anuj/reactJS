import { createRoot } from 'react-dom/client'
import './index.css'

const root = createRoot(document.getElementById("root"))

function Header(){
  return (
  <header className='header'>
        <img className='nav-logo' src="/src/assets/images/React.js_logo-512.webp" alt="React logo" />
        <nav>
          <ul className='nav-list'>
            <li className='nav-list-item'>Pricing</li>
            <li className='nav-list-item'>About</li>
            <li className='nav-list-item'>Contact</li>
          </ul>
        </nav>
  </header>
  )
}

function MainContent(){
  return (
    <>
    <h1>Reasons Im exited to learn React</h1>
    <ol>
      <li>Component-based architecture: React's modular approach allows you to build reusable components, making development more efficient and maintainable.</li>
  
      <li>Fast rendering with Virtual DOM: React optimizes updates to the actual DOM, ensuring smooth and fast user interfaces.</li>
    </ol>
    </>
  )
}

function Footer(){
  return (
  <>
  <div className='div-footer'>
    <footer className='footer'>
      <small>©️ 2024 React Development. All rights reserved.</small>
    </footer>
  </div>
    
  </>
  )
}

function Page(){
  return(
    <>
      <Header/>
      <MainContent/>
      <Footer/>
    
    </>
    
  )
}

root.render(
  <Page/>
)