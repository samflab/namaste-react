import { imageApi } from "../../constants/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { useDispatch } from "react-redux";
import { addItem } from "../../utils/cartSlice";
const FoodItem = (props) => {
  const { menu } = props;
  const dispath = useDispatch();
  const handleAddToCart = () => {
    dispath(addItem(menu));
  };
  return (
    <div className="flex align-middle justify-between">
      <div>
        <div className="my-10 px-5">
          <div className="flex gap-20">
            <div className="h-20 w-20">
              <img
                src={`${imageApi}${menu.imageId}`}
                alt={menu.name}
                className="h-[100%] w-[100%] object-scale-down"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm text-gray-500">{menu.category}</span>
              <span className="text-lg text-stone-900 font-semibold">
                {menu.name}
              </span>
              <span className="text-md text-orange-500">
                ₹{menu.price / 100 || menu.defaultPrice / 100}
              </span>
              <span className="text-sm text-stone-900">{menu.description}</span>
            </div>
          </div>
        </div>
      </div>

      <button
        onClick={handleAddToCart}
        className="self-center bg-white border border-1 border-orange-500 text-orange-500 px-6 py-2 rounded-md"
      >
        ADD
        <FontAwesomeIcon icon={faPlusCircle} className="ml-2" />
      </button>
    </div>
  );
};

export default FoodItem;
