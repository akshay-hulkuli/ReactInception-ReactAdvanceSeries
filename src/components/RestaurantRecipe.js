const RestaurantRecipe = (props) => {  
    return (
        <div className="res-recipe-accordian">
            <h2>{props?.recipeInfo?.card?.card?.title + " (" + props?.recipeInfo?.card?.card?.itemCards?.length+ ")"}</h2>
            <h2>&#8597;     </h2>
        </div>
    )
}

export default RestaurantRecipe;