import { imageApi } from "../../constants/api";

const RestaurantCard = (props) => {
  const { cloudinaryImageId, id, name, cuisines, avgRating, sla, costForTwo } =
    props?.restaurant;
  return (
    <div className="h-80 flex-wrap p-2">
      <div className="size-[17rem]">
        <img
          src={`${imageApi}${cloudinaryImageId}`}
          className="w-full h-full object-cover rounded-md"
        ></img>
      </div>
      <div className="flex flex-col gap-2 mt-4 justify-between h-32">
        <div className="truncate w-64 text-lg font-bold text-zinc-900">
          {name}
        </div>
        <div className="truncate w-64 text-sm text-zinc-800 font-medium ">
          {cuisines?.join(", ")}
        </div>
        {avgRating && (
          <div className="text-sm font-medium bg-green-700 text-stone-50 p-1 w-14 rounded-md">
            {avgRating} ⭐
          </div>
        )}

        <div className="time-and-cost text-sm text-zinc-800">
          <span className="time">{sla.slaString}</span> away |{" "}
          <span className="cost">{costForTwo}</span>
        </div>
      </div>
    </div>
  );
};

export const withVegLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="bg-green-600 px-1 py-2 absolute translate-x-[8px] translate-y-[8px] rounded-md text-stone-50">
          Veg
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
