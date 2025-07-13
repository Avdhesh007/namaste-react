import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  const [showItem, setShowItem] = useState(false);
  const handleClick = () => {
    setShowItem(!showItem);
  };
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      {/** accordion Header */}
      <div
        className="flex justify-between cursor-pointer"
        onClick={handleClick}
      >
        <span className="font-bold text-lg">
          {props.data.title} ({props.data.itemCards.length})
        </span>
        <span className="text-2xl text-gray-700 hover:text-blue-600">🔽</span>
      </div>
      <div>
        {/** accordion Body */}
        {showItem && <ItemList items={props.data.itemCards} />}
      </div>
    </div>
  );
};

export default RestaurantCategory;
