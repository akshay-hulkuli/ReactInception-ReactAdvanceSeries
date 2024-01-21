import { resData } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
      <div className='body-main'>
        <div className='search'>Search</div>
        <div className='res-container'>
          {resData.map(res => (
            <RestaurantCard key={res.info.id} restuarantData={res} />
          ))}
        </div>
      </div>
    )
}

export default Body;