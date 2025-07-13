import { useContext } from "react";
import { CDN_URL } from "../utils/constants";
import UserContext from "../utils/UserContext";

const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData;
  const { loggedInUser } = useContext(UserContext);
  return (
    <div className=" block max-w-sm m-1 bg-gray-200 border-black hover:bg-gray-300 size-50 h-100 border-2">
      <img
        className="res-logo rounded-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div>
        <h3 className="font-bold text-lg">{name}</h3>
        <span className="block max-w-md truncate overflow-hidden text-ellipsis whitespace-nowrap">
          {cuisines.join(", ")}
        </span>
        <h4>{avgRating}</h4>
        <h4>{sla.slaString}</h4>
        <h4>{costForTwo}</h4>
        <h4>User:- {loggedInUser}</h4>
      </div>
    </div>
  );
};

// Higher Order Component.
// input - RestaurantCard ==>> RestaurantCardPromoted

export const withPromotedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
