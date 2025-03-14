import RestaurantCard, { withVegLabel } from "./RestaurantCard";
import { useEffect, useState } from "react";
import ListingShimmer from "../Shimmer/ListingShimmer";
import { swiggyApiBody } from "../../constants/apiBody";
import { apiProxy, restaurantCardApi } from "../../constants/api";
import useOnlineStatusCheck from "../../utils/useOnlineStatusCheck";
import { Link } from "react-router-dom";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const WithVegLabel = withVegLabel(RestaurantCard);
  const checkOnline = useOnlineStatusCheck();

  const fetchRestaurantCards = async () => {
    const url = `${apiProxy}/${restaurantCardApi}`;
    try {
      const response = await fetch(url, swiggyApiBody).then((response) => {
        return response.json();
      });
      setRestaurantList(
        response?.data?.success?.cards[0]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
      );
      setFilteredRestaurant(
        response?.data?.success?.cards[0]?.card?.card?.gridElements
          ?.infoWithStyle?.restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurant cards:", error);
    }
  };

  useEffect(() => {
    fetchRestaurantCards();
  }, []);

  return checkOnline ? (
    filteredRestaurant.length === 0 ? (
      <ListingShimmer />
    ) : (
      <div className="px-32 py-4">
        <input
          className="h-10 w-60 rounded-md border border-solid border-zinc-400 outline-none py-3 px-2"
          placeholder="Find restaurants"
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          value={searchText}
        />
        <button
          className="border-none px-8 py-2  bg-orange-500 mx-4 rounded-md text-stone-50 "
          onClick={() =>
            setFilteredRestaurant(
              restaurantList.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              )
            )
          }
        >
          Search
        </button>
        <button
          className="mb-4 border-none px-8 py-2 rounded-md bg-orange-500 text-stone-50"
          onClick={() =>
            setFilteredRestaurant(
              restaurantList.filter(
                (restaurant) => restaurant.info.rating.value > 4
              )
            )
          }
        >
          Top Rated Restaurants
        </button>
        <div className="flex flex-wrap gap-4">
          {filteredRestaurant.map((restaurant, index) => (
            <Link
              to={`/restaurant-menu/${restaurant?.info?.id}`}
              className="no-underline h-[28rem] border border-zinc-400 rounded-md"
              key={index}
            >
              {restaurant?.info?.veg ? (
                <WithVegLabel restaurant={restaurant.info} />
              ) : (
                <RestaurantCard restaurant={restaurant.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    )
  ) : (
    <h2 className="px-32 py-8">You are offline, check internet connection</h2>
  );
};

export default RestaurantList;
