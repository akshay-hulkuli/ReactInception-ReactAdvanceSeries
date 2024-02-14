import { useState } from 'react'
import Item from './Item'

const RestaurantRecipe = props => {
  const { recipeInfo, makeCurAccordianShowAndOthersNot , showAccordian, index } = props

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
          data-testid={'accordian-button -' + recipeInfo?.card?.card?.title}
          className='border-none bg-white text-3xl mt-[-5px]'
          onClick={() => {
            makeCurAccordianShowAndOthersNot(index);
          }}
        >
          &#8597;{' '}
        </button>
      </div>
      <div >
        {showAccordian && recipeInfo?.card?.card?.itemCards?.map(item =>
          <Item item = {item} key={item?.card?.info?.id} isAddButtoNeeded= {true}/>)}
      </div>
    </div>
  )
}

export default RestaurantRecipe
