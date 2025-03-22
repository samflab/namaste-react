import { useDispatch, useSelector } from "react-redux";
import { imageApi } from "../constants/api";
import { removeItem } from "../utils/cartSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();
  const handleEmptyCart = () => {
    dispatch(removeItem());
  };

  return (
    <div className="px-32 py-8">
      {cartItems.length ? (
        <div className="flex justify-between">
          <h1 className="text-3xl font-semibold mb-4 text-stone-800">
            Your Cart ({cartItems.length})
          </h1>

          <button
            onClick={handleEmptyCart}
            className="relative border-b-2 border-transparent hover:border-stone-800 transition duration-200 text-stone-800"
          >
            Empty Cart
          </button>
        </div>
      ) : null}

      {cartItems.length ? (
        <div>
          {cartItems.map((item, index) => (
            <div className="flex align-middle justify-between border-b border-gray-300">
              <div>
                <div className="my-10 px-5">
                  <div className="flex gap-20">
                    <div className="h-20 w-20">
                      <img
                        src={`${imageApi}${item.imageId}`}
                        alt={item.name}
                        className="h-[100%] w-[100%] object-scale-down"
                      />
                    </div>

                    <div className="flex flex-col">
                      <span className="text-sm text-gray-500">
                        {item.category}
                      </span>
                      <span className="text-lg text-stone-900 font-semibold">
                        {item.name}
                      </span>
                      <span className="text-md text-orange-500">
                        {"₹"}
                        {item.defaultPrice / 100 || item.price / 100}
                      </span>
                      <span className="text-sm text-stone-900">
                        {item.description}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}

          <div className="my-4 font-semibold text-lg">
            Subtotal: {"₹"}
            {cartItems.reduce((acc, curr) => {
              if (curr.defaultPrice) {
                acc += curr.defaultPrice;
              } else {
                acc += curr.price;
              }

              return acc;
            }, 0) / 100}
          </div>
        </div>
      ) : (
        <div className="h-screen flex flex-col items-center justify-center">
          <h1 className="text-lg font-semibold">Your cart is empty</h1>
          <div>Add something to make me happy !!!</div>

          <Link to="/">
            <button className="bg-orange-500 px-6 py-2 rounded-md text-stone-50 mt-2">
              Continue Ordering
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Cart;
