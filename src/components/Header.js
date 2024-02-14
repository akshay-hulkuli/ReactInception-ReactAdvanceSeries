import { useEffect, useState, useContext } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
// import foodAppLogo from '../assets/foodAppLogo.jpg'
import appStore from '../utils/appStore'
import UserContext from '../utils/UserContext'

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
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

  const handleLogInLogOut = () => {
    setHasLoggedIn(!hasLoggedIn)
  }

  const {loggedInUser} = useContext(UserContext);

  // We are subscribing to the store using a selector
  const cartItems = useSelector((store) => store.cart.items);

  /*
    A useEffect takes 2 arguments. 1. Callback function and 2. dependecy Array.

    When the second argument is not passed the useEffect will be triggered each time the component rerenders.

    When we provide a empty array as the dependency array the useEffect will be triggered only once during the initial rendering.

    If we provide any state in the array, useEffect will be triggered when that useState changes.

  */

  useEffect(() => {
    console.log('useEffect is called')
  }, [])

  return (
    <div className='flex justify-between items-center border-solid border-2 border-black rounded mx-1 my-2 shadow-lg bg-zinc-800 text-white text-lg py-2'>
      <div className='w-16 ml-2'>
        <img className='rounded-full' src={'https://img.freepik.com/free-vector/delivery-logo-template_23-2147880262.jpg?w=826&t=st=1707887805~exp=1707888405~hmac=ef755b44bd951b44509588d5a7638ff8a8da98714178c3a3e8737c86e518025a'} />
        {/* <img className='rounded-full' src={foodAppLogo}/> */}
      </div>
      <div className=''>
        <ul className='flex'>
          <li className='px-6'>
            <Link to='/'>Home</Link>
          </li>
          <li className='px-6'>
            <Link to='/about'>About us</Link>
          </li>
          <li className='px-6'>
            <Link to='/contact'>Contact us</Link>
          </li>
          <li className='px-6'>
            <Link to='/grocery'>Grocery</Link>
          </li>
          <li className='px-6'><Link to='/cart'>Cart {"(" + cartItems.length + ")"}</Link></li>
          <button className={'mx-4 px-4 border-solid border-2 rounded border-green-700'} onClick={() => handleLogInLogOut()}>
            {hasLoggedIn ? 'LogOut' : 'Login'}
          </button>
          <li className='px-6'>{loggedInUser}</li>
        </ul>
      </div>
    </div>
  )
}

export default Header
