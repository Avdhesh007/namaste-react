import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import {
  LOCAL_PROXY,
  SWIGGY_API_SELECTED_RESTAURANT,
} from "../utils/constants";
import { useParams } from "react-router";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const [restaurantData, setRestaurantData] = useState(null);
  const { resId } = useParams();

  const fetchMenu = async () => {
    try {
      const response = await fetch(LOCAL_PROXY, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          targetUrl: SWIGGY_API_SELECTED_RESTAURANT(resId),
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to fetch data");
      }

      const json = await response.json();
      setRestaurantData(json.data);
      console.log("Fetched Data:", json.data);
    } catch (error) {
      console.error("Error fetching menu:", error);
    }
  };

  useEffect(() => {
    fetchMenu();
  }, [resId]); // include resId in dependencies

  if (!restaurantData) return <Shimmer />;

  // Safe Destructuring (guarding against undefined)
  const restaurantInfo = restaurantData?.cards?.[2]?.card?.card?.info || {};

  const { id, name, city, cuisines = [], costForTwoMessage } = restaurantInfo;

  const categories =
    restaurantData?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <h2>{`Cuisines: ${cuisines.join(", ") || "-"}`}</h2>
      <h2>{`Cost For Two: ${costForTwoMessage || "-"}`}</h2>

      {/** Accordion */}

      {categories.map((category) => (
        <RestaurantCategory
          key={category.card?.card?.categroyId}
          data={category?.card?.card}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
