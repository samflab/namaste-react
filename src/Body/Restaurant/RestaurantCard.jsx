import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { imgLink, id, name, cuisine, rating, time, cost } = props;
  return (
    <Link
      to={`/restaurant-menu/${id}`}
      className="no-underline h-[28rem] border border-zinc-400 rounded-md"
    >
      <div className="h-80 flex-wrap p-2">
        <div className="size-72">
          <img
            src={`${imgLink.replace(/\s+/g, "").trim()}`}
            className="w-full h-full object-cover rounded-md"
          ></img>
        </div>
        <div className="flex flex-col gap-2 mt-4 justify-between h-32">
          <div className="truncate w-64 text-lg font-bold text-zinc-900">
            {name}
          </div>
          <div className="truncate w-64 text-sm text-zinc-800 font-medium ">
            {cuisine.join(", ")}
          </div>
          {rating && (
            <div className="text-sm font-medium bg-green-700 text-stone-50 p-1 w-14 rounded-md">
              {rating} ⭐
            </div>
          )}

          <div className="time-and-cost text-sm text-zinc-800">
            <span className="time">{time}</span> away |{" "}
            <span className="cost">{cost}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
