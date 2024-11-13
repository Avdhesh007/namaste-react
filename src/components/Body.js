import resData from "../MockData/data.json";
import { SWIGGY_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variable - Super powerfull variable.
  // It can hold any type of data, including arrays, objects, etc.
  // It's a way to keep track of changes in our application state.
  // const [restaurantList, setRestaurantList] = React.useState(resData);
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await data.json();
      console.log(json);
      // optional chaining
      setListOfRestaurants(
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants
      );
    } catch (error) {
      console.error("Error fetching data:", error.message);
      // if did not get data from api then use local data instead.
      const json = resData;
      console.log(json);
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      // optional chaining
      setListOfRestaurants(restaurants);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // React hook - A function that lets you "react" to state changes.
  // It's a way to make your components more reusable and efficient.

  if (listOfRestaurants.length < 0) {
    return <Shimmer />;
  }

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
