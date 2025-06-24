import { useState, useEffect } from "react";
import { SWIGGY_API_RESTAURANT } from "../utils/constants";
import { useParams } from "react-router";

const RestaurantMenu = () => {
  const [getRestaurants, setRestaurants] = useState([null]);
  const { resId } = useParams();
  // useEffect(() => {
  //   fetchMenu();
  // }, []);

  // if (getRestaurants == null) return <Shimmer />;

  // const fetchMenu = async () => {
  //   const data = await fetch(SWIGGY_API_RESTAURANT);
  //   const json = await data.json;
  //   setRestaurants(json.data);
  //   console.log(getRestaurants);
  // };

  // const { id, name, city, cuisines, costForTwoMessage } =
  //   getRestaurants?.cards[2]?.card?.card?.info;

  return (
    <div className="menu">
      {/* <h1>{"name : " + name}</h1>
      <h2>{"res-id : " + id}</h2>
      <h2>{"city : " + city}</h2>
      <h2>{"cuisines : " + cuisines.join(",")}</h2>
      <h2>{"costForTwo : " + costForTwoMessage}</h2> */}

      <h1>{"name : "}</h1>
      <h2>{"res-id : " + resId}</h2>
      <h2>{"city : "}</h2>
      <h2>{"cuisines : "}</h2>
      <h2>{"costForTwo : "}</h2>
    </div>
  );
};

export default RestaurantMenu;
