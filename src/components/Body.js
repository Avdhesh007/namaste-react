import resData from "../MockData/data.json";
import { LOCAL_PROXY, SWIGGY_API_HOMEPAGE } from "../utils/constants";
import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

const Body = () => {
  // State variables
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [loading, setLoading] = useState(true); // Track loading state

  const RestaurantCardWithPromoted = withPromotedLabel(RestaurantCard);

  const fetchData = async () => {
    try {
      const data = await fetch(LOCAL_PROXY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ targetUrl: SWIGGY_API_HOMEPAGE }),
      });
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
          className="bg-gray-200 border-black text-black border-2 hover:bg-gray-300 rounded-lg"
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
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
          >
            {restaurant.info.id % 2 == 0 ? (
              <RestaurantCardWithPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
