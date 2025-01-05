import { createRoot } from 'react-dom/client'
import Header from './components/Header.jsx'
import MainContent from './components/MainContent.jsx'
import Footer from './components/Footer.jsx'
import './index.css'

const root = createRoot(document.getElementById("root"))

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