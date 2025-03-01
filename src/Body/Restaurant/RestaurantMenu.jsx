import { useParams } from "react-router-dom";
import { imageApi } from "../../constants/api";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStopwatch, faCirclePlus } from "@fortawesome/free-solid-svg-icons";
import DetailsShimmer from "../Shimmer/DetailsShimmer";
import useRestaurantMenu from "../../utils/useRestaurantMenu";
import useStarRating from "../../utils/useStarRating";

const RestaurantMenu = () => {
  const restaurantId = useParams().resId;

  const menu = useRestaurantMenu(restaurantId);

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
            {useStarRating(menu[2]?.card?.card?.info?.avgRating)}
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
        {menu?.map((menuCard, index) => {
          const menuItemArray = [];
          menuCard?.groupedCard?.cardGroupMap?.REGULAR?.cards?.map((card) =>
            card?.card?.card?.itemCards?.map((itemCard) => {
              menuItemArray.push({
                itemName: itemCard?.card?.info?.name,
                category: itemCard?.card?.info?.category,
                description: itemCard?.card?.info?.description,
                imageId: itemCard?.card?.info?.imageId,
                price: itemCard?.card?.info?.price,
                defaultPrice: itemCard?.card?.info?.defaultPrice,
              });
            })
          );
          return (
            <div key={index}>
              {menuItemArray.map((singleMenuItem) => {
                return (
                  <div
                    className="flex gap-8 basis-full mb-8"
                    key={singleMenuItem?.card?.info?.id}
                  >
                    <div>
                      <img
                        src={`${imageApi}${singleMenuItem.imageId}`}
                        className="object-cover w-[150px] h-[100px] rounded-md"
                      ></img>
                    </div>
                    <div className="basis-[80rem]">
                      <div className="text-zinc-600 text-xs">
                        {" "}
                        {singleMenuItem?.category}
                      </div>
                      <div className="text-lg font-semibold my-2">
                        {singleMenuItem.itemName}
                      </div>
                      <div className="text-orange-500">
                        {" "}
                        &#8377;
                        {singleMenuItem.price
                          ? singleMenuItem.price / 100
                          : singleMenuItem.defaultPrice / 100}
                      </div>
                      <div className="text-md font-medium text-zinc-600">
                        {singleMenuItem.description}
                      </div>
                    </div>
                    <div>
                      <button className="bg-transparent border border-solid border-orange-500 outline-none text-orange-500 rounded-md py-2 px-6">
                        <FontAwesomeIcon icon={faCirclePlus} /> ADD
                      </button>
                    </div>
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default RestaurantMenu;
