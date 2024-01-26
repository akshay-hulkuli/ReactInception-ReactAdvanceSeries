import { useState, useEffect } from 'react'
import RestaurantCard from './RestaurantCard'
import Shimmer from './Shimmer'

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

  useEffect(() => {
    fetchData()
  }, [])

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
      setRestaurantData(requiredSwiggyCard)
    }
  }

  if (restaurantData.length === 0) {
    return <Shimmer />
  }

  return (
    <div className='body-main'>
      <div className='search'>
        Search
        <button
          className='filter-btn'
          onClick={() => {
            setRestaurantData(
              restaurantData.filter(res => res.info.avgRating > 4.3)
            )
          }}
        >
          Top Rated Restaurant
        </button>
      </div>

      <div className='res-container'>
        {restaurantData.map(res => (
          <RestaurantCard key={res.info.id} restuarantData={res} />
        ))}
      </div>
    </div>
  )
}

export default Body
