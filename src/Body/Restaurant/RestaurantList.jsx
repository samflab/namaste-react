import RestaurantCard from "./RestaurantCard";
import "../styles/restaurant.scss";
import { useEffect, useState } from "react";
import ListingShimmer from "../Shimmer/ListingShimmer";
import { swiggyApiBody } from "../../constants/apiBody";
import { apiProxy, imageApi, restaurantCardApi } from "../../constants/api";
import useOnlineStatusCheck from "../../utils/useOnlineStatusCheck";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
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
      <div className="restaurant-container">
        <input
          className="search-box"
          placeholder="Find restaurants"
          onChange={(event) => {
            setSearchText(event.target.value);
          }}
          value={searchText}
        />
        <button
          className="search-btn"
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
          className="top-rating-btn"
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
        <div className="card-container">
          {filteredRestaurant.map((restaurant) => (
            <RestaurantCard
              imgLink={`${imageApi}
              ${restaurant.info.cloudinaryImageId}`}
              name={restaurant.info.name}
              id={restaurant.info.id}
              cuisine={restaurant.info.cuisines}
              rating={restaurant.info.avgRating}
              time={restaurant.info.sla.slaString}
              cost={restaurant.info.costForTwo}
            />
          ))}
        </div>
      </div>
    )
  ) : (
    <h2 className="restaurant-container">
      You are offline, check internet connection
    </h2>
  );
};

export default RestaurantList;
