import foodAppLogo from '../assets/foodAppLogo.jpg'

const Header = () => {
    return (
      <div className='header'>
        <div className='logo-container'>
          <img className='logo' src={foodAppLogo} />
        </div>
        <div className='nav-container'>
          <ul>
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    )
}

export default Header;