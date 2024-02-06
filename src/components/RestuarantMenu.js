import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_DATA_URL } from '../utils/constants'
import useRestuarantMenu from '../utils/useRestuarantMenu'
import RestaurantRecipe from './RestaurantRecipe'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
  const { resId } = useParams()
  const { currentRestaurantData, resInfo, menuInfo } = useRestuarantMenu(resId)

  return currentRestaurantData === null ? (
    <Shimmer />
  ) : (
    <div className='res-menu-page'>
      <div className='res-menu-res-info'>
        <div className='res-menu-res-info-left'>
          <h2 className='res-menu-res-info-header'>{resInfo.name}</h2>
          <p>{resInfo.cuisines?.join(', ')}</p>
          <p>
            {resInfo.areaName}, {resInfo.city}
          </p>
          <p>{resInfo.feeDetails.message}</p>
        </div>
        <div className='res-menu-res-info-right'>
          <p>&#11088; {'   ' + resInfo.avgRating}</p>
          <p className='rating-string'>{resInfo.totalRatingsString}</p>
        </div>
      </div>

      <div className='res-menu-res-data'>
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
