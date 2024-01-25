import { useState } from 'react'
import { resData } from '../utils/mockData'
import RestaurantCard from './RestaurantCard'

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
  const [restaurantData, setRestaurantData] = useState(resData);
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
