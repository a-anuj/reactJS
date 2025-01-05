export default function Header(){
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