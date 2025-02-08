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
    <div className="restaurant-menu-wrapper">
      <div className="restaurant-details-wrapper">
        <div className="restaurant-name">{menu[2]?.card?.card?.info?.name}</div>
        <div>
          <div>
            {useStarRating(menu[2]?.card?.card?.info?.avgRating)}
            <span className="rating-number">
              {menu[2]?.card?.card?.info?.avgRating}
            </span>
          </div>
          <div className="total-review">
            {menu[2]?.card?.card?.info?.totalRatingsString}
          </div>
        </div>
      </div>
      <div className="restaurant-cuisine">
        {menu[2]?.card?.card?.info?.cuisines.join(" | ")}
      </div>
      <div className="restaurant-address">
        {menu[2]?.card?.card?.info?.labels[1].message}
      </div>
      <div>
        <div className="order-online">Order Online</div>
        <div className="estimated-time">
          {menu[2]?.card?.card?.info?.sla.slaString ? (
            <>
              <FontAwesomeIcon icon={faStopwatch} />
              {menu[2]?.card?.card?.info?.sla.slaString}
            </>
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
                    className="food-item-container"
                    key={singleMenuItem?.card?.info?.id}
                  >
                    <div className="food-img-container">
                      <img src={`${imageApi}${singleMenuItem.imageId}`}></img>
                    </div>
                    <div className="food-item-info">
                      <div className="food-label">
                        {" "}
                        {singleMenuItem?.category}
                      </div>
                      <div className="food-name">{singleMenuItem.itemName}</div>
                      <div className="food-price">
                        {" "}
                        &#8377;
                        {singleMenuItem.price
                          ? singleMenuItem.price / 100
                          : singleMenuItem.defaultPrice / 100}
                      </div>
                      <div className="food-description">
                        {singleMenuItem.description}
                      </div>
                    </div>
                    <div className="add-to-cart-btn">
                      <button>
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
