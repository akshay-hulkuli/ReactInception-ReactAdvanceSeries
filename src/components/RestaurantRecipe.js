import { useState } from 'react'
import vegIcon from '../assets/veg-icon.png'
import nonVegIcon from '../assets/non-veg-icon.png'
import { cloudinaryCDN } from '../utils/constants'

const RestaurantRecipe = props => {
  const [isAccordianOpen, setIsAccordianOpen] = useState(true)
  const { recipeInfo } = props
  console.log(recipeInfo)
  return (
    <div className='mb-[20px] bg-white'>
      <div className='flex py-[20px] mx-16 justify-between items-center'>
        <h2 className='font-bold'>
          {props?.recipeInfo?.card?.card?.title +
            ' (' +
            props?.recipeInfo?.card?.card?.itemCards?.length +
            ')'}
        </h2>
        <button
          className='border-none bg-white text-3xl mt-[-5px]'
          onClick={() => {
            setIsAccordianOpen(!isAccordianOpen)
          }}
        >
          &#8597;{' '}
        </button>
      </div>
      <div className={isAccordianOpen ? '' : 'hidden'}>
        {recipeInfo?.card?.card?.itemCards?.map(item => {
          return (
            <div key={item?.card?.info?.id} className='recipe-item'>
              <div className='recipe-content recipe-border'>
                <div className='recipe-content-left'>
                  <img
                    className='recipe-type-icon'
                    src={
                      item?.card?.info?.itemAttribute?.vegClassifier ===
                      'NONVEG'
                        ? nonVegIcon
                        : vegIcon
                    }
                  />

                  <span className='recipe-header'>
                    {item?.card?.info?.name}
                  </span>
                  <span className='recipe-rate'>{'$ '+item?.card?.info?.price / 100}</span>
                  <span className='recipe-description'>{item?.card?.info?.description}</span>
                </div>
                <div className='recipe-content-right'>
                  <img className='recipe-img' src={cloudinaryCDN + item?.card?.info?.imageId}/>
                  <button className='recipe-add-button'>ADD</button>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default RestaurantRecipe
