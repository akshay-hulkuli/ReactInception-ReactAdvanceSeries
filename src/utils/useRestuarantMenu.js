import { useEffect, useState } from 'react'
import { RESTAURANT_DATA_URL } from './constants.js'

const useRestuarantMenu = resId => {
  const [currentRestaurantData, setCurrentRestaurantData] = useState(null)
  const [resInfo, setResInfo] = useState(null)
  const [menuInfo, setMenuInfo] = useState([])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = async () => {
    const data = await fetch(RESTAURANT_DATA_URL + resId)
    const json = await data.json()
    setCurrentRestaurantData(json)
    setResInfo(json?.data?.cards?.find(c => c.card?.card["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.Restaurant")?.card?.card?.info)
    setMenuInfo(
      json?.data?.cards?.find(c => c.groupedCard)?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
        card =>
          card.card.card['@type'] ===
          'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory'
      )
    )
    console.log(resInfo)
  }

  return { currentRestaurantData, resInfo, menuInfo }
}

export default useRestuarantMenu
