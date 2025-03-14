import { imageApi } from "../../constants/api";
const FoodItem = (props) => {
  const { menu } = props;
  return (
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
          <span className="text-lg text-stone-900 font-semibold">{menu.name}</span>
          <span className="text-md text-orange-500">₹{menu.price}</span>
          <span className="text-sm text-stone-900">{menu.description}</span>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
