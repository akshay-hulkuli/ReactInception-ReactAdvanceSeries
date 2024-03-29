import { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import useOnlineStatus from '../utils/useOnlineStatus'
import RestaurantCard, {withPromtedLable} from './RestaurantCard'
import Shimmer from './Shimmer'
import UserContext from '../utils/UserContext'

const Body = () => {
  /*
    React hook is a javascript function written by react.

    React has something known as Reconciliation also known as React fibre. This is resposible for faster UI reload.
    Dom is tree representing things to be displayed on the browser.
    Dom is a heavy object and DOM manipulation is a costly operation.

    React maintains the representation of actual DOM in javascript known as virtual DOM.(Nested React elements)(Javascript object).

    Diff algorithm
    This algorithm finds the difference between 2 virtual DOMs.

    In React 16 a new algorithm to update the DOM came out. That is known as Reconciliation.
    Reconciliation or React Fibre is the new algorithm to find the diffrence between 2 virtual DOM.

    With this React does efficient DOM manipulation, Hence faster UI.
  */
  const [restaurantData, setRestaurantData] = useState([])
  const [restaurandDataUnderDisplay, setRestaurandDataUnderDisplay] = useState(
    []
  )
  const [searchText, setSearchText] = useState('')
  const onlineStatus = useOnlineStatus()

  useEffect(() => {
    fetchData()
  }, [])

  const data = useContext(UserContext);
  console.log(data);

  /*
    CORS is the standard mechanism used to share resource between 2 entries present across differenet origins.
    CORS stands for Cross Origin Resource Sharing.
    Let us assume we have 2 entities A and B present in 2 origins/servers origin1 and origin2.
    Now A wants to fetch some data from the B.
    Here is how it works ->
      1. A sends a `Preflight` call to B.
      2. B sends a `OPTIONS` call to A.
          This includes additional HTTP headers like Accept-Control-Allow-Origin
      3. At the end A will make actual REST call.
  */
  const fetchData = async () => {
    const data = await fetch(
      'https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.923779&lng=77.571315&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING'
    )
    const json = await data.json()
    // console.log(json)
    const requiredSwiggyCard = json.data.cards.find(
      card => card?.card?.card?.id === 'restaurant_grid_listing'
    )?.card?.card?.gridElements?.infoWithStyle?.restaurants
    if (requiredSwiggyCard && requiredSwiggyCard?.length > 0) {
      // console.log(requiredSwiggyCard);
      setRestaurantData(requiredSwiggyCard)
      setRestaurandDataUnderDisplay(requiredSwiggyCard)
    }
  }

  const handleSearchTextChange = e => {
    setSearchText(e.target.value)
  }

  const handleSearch = () => {
    const tempResArr = restaurantData.filter(res =>
      res.info.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase())
    )
    if (searchText === '') {
      setRestaurandDataUnderDisplay([...restaurantData])
    } else {
      setRestaurandDataUnderDisplay([...tempResArr])
    }
  }

  const RestaurantCardPromoted = withPromtedLable(RestaurantCard);

  /*
    Condtional rendering
  */

  return restaurantData.length === 0 ? (
    <Shimmer />
  ) : onlineStatus ? (
    <div className='flex flex-col items-end'>
      <div className='search mx-6 mt-6'>
        <input
          className='border-solid border-2 rounded-lg border-gray-300 px-2 py-1 w-52'
          type='text'
          data-testid='searchInput'
          placeholder='type something to search'
          value={searchText}
          onChange={e => {
            handleSearchTextChange(e)
          }}
        />
        <button className='bg-orange-500 border-solid border-2 rounded-lg border-gray-700 mx-6 w-20' onClick={() => handleSearch()}>
          Search
        </button>
        <input 
          className='border-solid border-2 rounded-lg border-black'
          type='text'
          value= {data?.loggedInUser}
          onChange={(e) => {data.setUserName(e.target.value)}}
        />
      </div>

      <div className='flex flex-wrap'>
        {restaurandDataUnderDisplay.map(res => (
          <Link key={res.info.id} className='link-style' to={'/restaurant/' + res.info.id}>
            {res?.info?.promoted ? <RestaurantCardPromoted key={res.info.id} restuarantData={res}/> : <RestaurantCard key={res.info.id} restuarantData={res} />}
          </Link>
        ))}
      </div>
    </div>
  ) : (
    <h3>You are offline check internet</h3>
  )
}

export default Body
