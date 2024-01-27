import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_DATA_URL } from '../utils/constants'
import RestaurantRecipe from './RestaurantRecipe'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
  const [currentRestaurantData, setCurrentRestaurantData] = useState(null)
  const [resInfo, setResInfo] = useState(null)
  const [menuInfo, setMenuInfo] = useState([])

  const { resId } = useParams()

  useEffect(() => {
    fetchMenu()
  }, [])

  const fetchMenu = async () => {
    const data = await fetch(RESTAURANT_DATA_URL + resId)
    const json = await data.json()
    console.log(json)
    setCurrentRestaurantData(json)
    setResInfo(json?.data?.cards[0]?.card?.card?.info)
    setMenuInfo(
      json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        card =>
          card.card.card['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
      )
    )
  }

  return currentRestaurantData === null ? (
    <Shimmer />
  ) : (
    <div className='res-menu-page'>
      <div className='res-menu-res-info'>
        <div className='res-menu-res-info-left'>
            <h2 className='res-menu-res-info-header'>{resInfo.name}</h2>
            <p>{resInfo.cuisines?.join(', ')}</p>
            <p>{resInfo.areaName}, {resInfo.city}</p>
            <p>{resInfo.feeDetails.message}</p>
        </div>
        <div className='res-menu-res-info-right'>
            <p>&#11088; {"   " + resInfo.avgRating}</p>
            <p className='rating-string'>{resInfo.totalRatingsString}</p>
        </div>
      </div>

      <div>
        {menuInfo.map(card => {
            return <RestaurantRecipe recipeInfo={card} />
        })}
      </div>
      {/* <ul>
        {menuInfo.map(card => (
          <li key={card?.card?.card?.title}>
            <h3>{card?.card?.card?.title}</h3>
            <ul>
              {card?.card?.card?.itemCards?.map(itemCard => {
                return (
                  <li key={itemCard?.card?.info?.id}>
                    {itemCard?.card?.info?.name} -
                    {itemCard?.card?.info.price / 100}
                  </li>
                )
              })}
            </ul>
          </li>
        ))}
      </ul> */}
    </div>
  )
}

export default RestaurantMenu
