import resData from "../MockData/data.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  return (
    <div className="body">
      <div className="search"> Search</div>
      <div className="res-container">
        {resData.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
