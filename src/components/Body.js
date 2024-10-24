import resData from "../MockData/data.json";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {
  // State variable - Super powerfull variable.
  // It can hold any type of data, including arrays, objects, etc.
  // It's a way to keep track of changes in our application state.
  // const [restaurantList, setRestaurantList] = React.useState(resData);
  const [listOfRestaurants, setListOfRestaurants] = useState(resData);

  // React hook - A function that lets you "react" to state changes.
  // It's a way to make your components more reusable and efficient.

  // Normal javascript variable
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            // Filter logic here
            setListOfRestaurants(
              listOfRestaurants.filter((res) => res.info.avgRating > 4.6)
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
