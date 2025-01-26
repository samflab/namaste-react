import RestaurantCard from "./RestaurantCard";
import "../styles/restaurant.scss";
import { useEffect, useState } from "react";
import Shimmer from "../Shimmer";
import { swiggyApiBody } from "../../constants/apiBody";

const RestaurantList = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  
  const fetchRestaurantCards = async () => {
    const url =
      "https://www.swiggy.com/api/seo/getListing?lat=28.63270&lng=77.21980&apiV2=true";

    try {
      const response = await fetch(
        `https://thingproxy.freeboard.io/fetch/${url}`,
        swiggyApiBody
      ).then((response) => {
        return response.json();
      });

      setRestaurantList(
        response.data.success.cards[1].card.card.gridElements.infoWithStyle
          .restaurants
      );
      setFilteredRestaurant(
        response.data.success.cards[1].card.card.gridElements.infoWithStyle
          .restaurants
      );
    } catch (error) {
      console.error("Error fetching restaurant cards:", error);
    }
  };

  useEffect(() => {
    fetchRestaurantCards();
  }, []);

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
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
              "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto" +
              restaurant.info.mediaFiles[0].url
            }
            name={restaurant.info.name}
            cuisine={restaurant.info.cuisines}
            rating={restaurant.info.rating.value}
            time={restaurant.info.locationInfo.distanceString}
            cost={restaurant.info.costForTwo}
          />
        ))}
      </div>
    </div>
  );
};

export default RestaurantList;
