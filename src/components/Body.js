import resData from "../MockData/data.json";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  let listOfRestaurants = resData;
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            listOfRestaurants = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.6
            );
            console.log(listOfRestaurants);
          }}
        >
          Top Rated Restaurant
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
