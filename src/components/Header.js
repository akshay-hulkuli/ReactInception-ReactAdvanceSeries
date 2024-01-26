import { useState } from 'react';
import foodAppLogo from '../assets/foodAppLogo.jpg'

const Header = () => {
  /*
    If we use a javascript variable instead of useState, it will be toggled onClick but the UI won't be rendered.
    Hence it is necessory to use react useState hook which ensures UI rerendering upon its set function is invoked. 

    one more thing to notice, hasLoggedIn is a const variable how is it assigned with a new value after doing set operation.
    After set operation react is rerendering the component, it is the new instance of the hasLoggedIn variable created.

    Whenever react renders the UI due to set operation done on any of the state variable.
    It persists the values present in the other useStates, and if any javascript variables defined the code will be re initialised.
    Hence in a react application we tend to store data in state variable instead of javascript plain variables.
  */
  const [hasLoggedIn, setHasLoggedIn] = useState(false);

  const handleLogInLogOut = () => {
    setHasLoggedIn(!hasLoggedIn);
  }


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
            <button className='login' onClick={()=> handleLogInLogOut()}>{hasLoggedIn ? "LogOut" : "Login"}</button>
          </ul>
        </div>
      </div>
    )
}

export default Header;