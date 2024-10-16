import { CDN_URL } from "../utils/constants";

const styleCard = {
  backgroundColor: "#f0f0f0",
};
const RestaurantCard = (props) => {
  const { resData } = props;
  const { cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo } =
    resData;
  return (
    <div className="res-card" style={styleCard}>
      <img
        className="res-logo"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />

      <h3>{name}</h3>
      <h6>{cuisines.join(",")}</h6>
      <h4>{avgRating}</h4>
      <h4>{sla.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export default RestaurantCard;
