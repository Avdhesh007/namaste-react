import ItemList from "./ItemList";

const RestaurantCategory = (props) => {
  return (
    <div className="w-6/12 mx-auto my-4 bg-gray-50 shadow-lg p-4 ">
      {/** accordion Header */}
      <div className="flex justify-between">
        <span className="font-bold text-lg">
          {props.data.title} ({props.data.itemCards.length})
        </span>
        <span class="text-2xl text-gray-700 hover:text-blue-600 cursor-pointer">
          🔽
        </span>
      </div>
      <div>
        {/** accordion Body */}
        <ItemList items={props.data.itemCards} />
      </div>
    </div>
  );
};

export default RestaurantCategory;
