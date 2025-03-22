import { useParams } from "react-router-dom";
import { imageApi } from "../../constants/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faStopwatch,
  faCirclePlus,
  faCaretDown,
} from "@fortawesome/free-solid-svg-icons";
import DetailsShimmer from "../Shimmer/DetailsShimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import useStarRating from "../../utils/useStarRating";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";

const RestaurantMenu = () => {
  const restaurantId = useParams().resId;

  const menu = useRestaurantMenu(restaurantId);
  const [showIndex, setShowIndex] = useState(0);

  const categoryList =
    menu[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.filter(
      (card) =>
        card?.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return menu?.length === 0 ? (
    <DetailsShimmer />
  ) : (
    <div className="px-32 py-8">
      <div className="flex items-start justify-between">
        <div>
          <div className="text-4xl">{menu[2]?.card?.card?.info?.name}</div>
          <div className="text-zinc-600 text-sm space-x-2 capitalize my-4">
            {menu[2]?.card?.card?.info?.cuisines.join(" | ")}
          </div>
        </div>

        <div>
          <div>
            {useStarRating(menu[2]?.card?.card?.info?.avgRating, menu[2]?.card?.card?.info?.id)}
            <span className="font-semibold ml-1 text-md">
              {menu[2]?.card?.card?.info?.avgRating}
            </span>
          </div>
          <div className="text-zinc-600 text-sm space-x-2 capitalize my-4">
            {menu[2]?.card?.card?.info?.totalRatingsString}
          </div>
        </div>
      </div>

      <div className="text-zinc-600 text-sm space-x-2 capitalize my-2">
        {menu[2]?.card?.card?.info?.labels[1].message}
      </div>
      <div>
        <div className="text-lg font-semibold">Order Online</div>
        <div className="text-sm lowercase mb-2">
          {menu[2]?.card?.card?.info?.sla.slaString ? (
            <div className="flex flex-row gap-1 items-center text-zinc-600">
              <FontAwesomeIcon icon={faStopwatch} />
              {menu[2]?.card?.card?.info?.sla.slaString}
            </div>
          ) : null}
        </div>

        <div>
          {categoryList?.map((category, index) => {
            return (
              <RestaurantCategory
                data={category}
                key={index}
                showItems={index === showIndex ? true : false}
                setShowIndex={() => setShowIndex(index)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default RestaurantMenu;
