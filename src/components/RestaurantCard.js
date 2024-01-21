import { cloudinaryCDN } from '../utils/constants'

const RestaurantCard = props => {
  const { restuarantData } = props
  const { cloudinaryImageId, name, cuisines, avgRating, sla } =
    restuarantData?.info
  return (
    <div className='res-card'>
      <img className='res-logo' src={cloudinaryCDN + cloudinaryImageId} />
      <h3 className='res-header'>{name}</h3>
      <div className='res-data'>
        <h5 className='res-cuisine'>{cuisines.join(', ')}</h5>
        <div className='res-details'>
          <h4>Rating {avgRating} star</h4>
          <h4>{sla.deliveryTime} min</h4>
        </div>
      </div>
    </div>
  )
}

export default RestaurantCard
