import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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
  const [hasLoggedIn, setHasLoggedIn] = useState(false)

  const handleLogInLogOut = () => {
    setHasLoggedIn(!hasLoggedIn)
  }

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
        <img className='rounded-full' src={foodAppLogo} />
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
          <li className='px-6'>Cart</li>
          <button className={'mx-4 px-4 border-solid border-2 rounded border-green-700'} onClick={() => handleLogInLogOut()}>
            {hasLoggedIn ? 'LogOut' : 'Login'}
          </button>
        </ul>
      </div>
    </div>
  )
}

export default Header
