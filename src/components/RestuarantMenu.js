import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { RESTAURANT_DATA_URL } from '../utils/constants'
import useRestuarantMenu from '../utils/useRestuarantMenu'
import RestaurantRecipe from './RestaurantRecipe'
import Shimmer from './Shimmer'

const RestaurantMenu = () => {
  const { resId } = useParams()
  const { currentRestaurantData, resInfo, menuInfo } = useRestuarantMenu(resId)

  const [showBool, setShowBool] = useState([])

  useEffect(() => {
    let tempArr = []
    menuInfo.forEach(m => tempArr.push(false))
    setShowBool([...tempArr])
  }, [menuInfo])

  const makeCurAccordianShowAndOthersNot = index => {
    let tempArr = showBool
    let bool = !showBool[index]
    tempArr = tempArr.map((b, i) => (i === index ? bool : bool ? false : b))
    setShowBool([...tempArr])
  }

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
        {menuInfo.map((card, index) => {
          return (
            /*
              This is a controlled component as this is controlled from the parent.
              We are controlling whether show items or not
            */
            <RestaurantRecipe
              key={card?.card?.card?.title}
              recipeInfo={card}
              index={index}
              showAccordian={showBool?.[index] ? showBool?.[index] : false}
              makeCurAccordianShowAndOthersNot={makeCurAccordianShowAndOthersNot}
            />
          )
        })}
      </div>
    </div>
  )
}

export default RestaurantMenu
