import { CDN_URL } from "../utils/constants";

const ItemList = ({ items }) => {
  return (
    <div>
      {items.map((item) => (
        <div
          key={item.card.info.id}
          className="border-b-2 border-gray-200 text-left flex"
        >
          <div className="w-10/12">
            <div className=" py-2">
              <span> {item.card.info.name} </span>
              <span>
                {" "}
                -₹
                {(item?.card?.info?.price ||
                  item?.card?.info?.defaultPrice ||
                  item?.card?.info?.finalPrice) / 100}
              </span>
            </div>
            <p className="text-sm text-gray-400 px-2 mx-2">
              {item.card.info.description}
            </p>
          </div>
          <div className="w-2/12 p-4 relative inline-block">
            <img src={CDN_URL + item.card.info.imageId} className="w-30" />
            <button className="absolute text-xs bottom-2 right-2 bg-gray-600 hover:bg-gray-700 text-white font-medium py-1 px-2 rounded">
              Add +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
