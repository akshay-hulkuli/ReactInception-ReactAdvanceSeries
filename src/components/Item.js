import { useDispatch } from "react-redux";
import vegIcon from '../assets/veg-icon.png'
import nonVegIcon from '../assets/non-veg-icon.png'
import { cloudinaryCDN } from '../utils/constants'
import { addItem } from '../utils/cartSlice'

const Item = ({ item, isAddButtoNeeded }) => {

    const dispatch = useDispatch();
    // console.log(recipeInfo)
  
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }
  return (
    <div key={item?.card?.info?.id} className='recipe-item'>
      <div className='recipe-content recipe-border'>
        <div className='recipe-content-left'>
          <img
            className='recipe-type-icon'
            src={
              item?.card?.info?.itemAttribute?.vegClassifier === 'NONVEG'
                ? nonVegIcon
                : vegIcon
            }
          />

          <span className='recipe-header'>{item?.card?.info?.name}</span>
          <span className='recipe-rate'>
            {'$ ' + item?.card?.info?.price / 100}
          </span>
          <span className='recipe-description'>
            {item?.card?.info?.description}
          </span>
        </div>
        <div className='recipe-content-right'>
          <img
            className='recipe-img'
            src={cloudinaryCDN + item?.card?.info?.imageId}
          />
          {isAddButtoNeeded && (
            <button
              className='recipe-add-button'
              onClick={() => handleAddItem(item)}
            >
              ADD
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

export default Item
