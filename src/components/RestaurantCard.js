import { cloudinaryCDN } from '../utils/constants'

const RestaurantCard = props => {
  const { restuarantData } = props
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restuarantData?.info
  return (
    <div className='w-64 h-96 m-6 border-solid border-2 rounded-lg border-gray-700 shadow-xl'>
      <img className='h-52 w-64 res-logo' src={cloudinaryCDN + cloudinaryImageId} />
      <h3 className='m-2'>{name}</h3>
      <div className='flex flex-col justify-between h-24 mx-2'>
        <h5 className='res-cuisine'>{cuisines.join(', ')}</h5>
        <div className='flex justify-between'>
          <h4>Rating {avgRating} star</h4>
          <h4>{sla.deliveryTime} min</h4>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
