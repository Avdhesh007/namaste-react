import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const items = useSelector((store) => store.cart.items);
  const dispatch = useDispatch();
  const handleClearCart = () => dispatch(clearCart());

  return (
    <div className="m-4 p-4">
      <h1 className="font-bold text-2xl text-center">Cart</h1>
      {items.length < 1 && (
        <h1 className="text-center font-bold text-red-400">
          Cart is empty, add Items
        </h1>
      )}
      {items.length > 0 && (
        <div>
          <div className="w-4/12"></div>
          <div className=" text-center">
            <button
              className="bg-red-500 m-2 p-2 text-black font-bold rounded-xl cursor-pointer"
              onClick={handleClearCart}
            >
              Clear Cart
            </button>
          </div>

          <div className="w-6/12 m-auto border-1 rounded-xl">
            <ItemList items={items}></ItemList>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
