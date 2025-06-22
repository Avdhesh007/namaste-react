import resData from "../MockData/data.json";
import { SWIGGY_API } from "../utils/constants";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const Body = () => {
  // State variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  const fetchData = async () => {
    try {
      const data = await fetch(SWIGGY_API);
      if (!data.ok) {
        throw new Error("Failed to fetch data");
      }
      const json = await data.json();
      console.log(json);

      // If data fetched successfully from API, use it to update the state
      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
    } catch (error) {
      console.error("Error fetching data:", error.message);

      // Use local data if API fetch fails
      const restaurants =
        resData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];
      setListOfRestaurants(restaurants);
    } finally {
      setLoading(false); // Once the data is fetched (or failed), set loading to false
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Show Shimmer while loading
  if (loading) {
    return <Shimmer />;
  }

  // Show restaurant list if data is available
  if (!listOfRestaurants || listOfRestaurants.length === 0) {
    return <div>No Restaurants Found</div>; // Fallback UI if no restaurants are available
  }

  // Normal JavaScript variable for rendering
  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            setListOfRestaurants((prevList) =>
              prevList.filter((res) => res.info.avgRating > 4.6)
            );
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
