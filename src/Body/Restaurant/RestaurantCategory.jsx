import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import FoodItem from "./FoodItem";

const RestaurantCategory = (props) => {
  const { data, showItems, setShowIndex } = props;
  return (
    <div>
      <div
        onClick={setShowIndex}
        className="flex justify-between my-2 py-5 border-b border-gray-300 cursor-pointer "
      >
        <span>
          {data?.card?.card?.title} ({data?.card.card?.itemCards.length})
        </span>

        {showItems ? (
          <span>
            <FontAwesomeIcon icon={faCaretUp} />
          </span>
        ) : (
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        )}
      </div>

      {showItems ? (
        <div>
          {data?.card?.card?.itemCards?.map((card) => {
            return (
              <FoodItem menu={card?.card?.info} key={card?.card?.info?.id} />
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default RestaurantCategory;
