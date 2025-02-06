import RestaurantCard from "./RestaurantCard";
import "../styles/restaurant.scss";
import { useEffect, useState } from "react";
import ListingShimmer from "../Shimmer/ListingShimmer";
import { swiggyApiBody } from "../../constants/apiBody";
import { apiProxy, restaurantCardApi } from "../../constants/api";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");

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

  return filteredRestaurant.length === 0 ? (
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
            imgLink={
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
              restaurant.info.cloudinaryImageId
            }
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
  );
};

export default RestaurantList;
