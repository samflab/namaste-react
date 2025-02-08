import { apiProxy, restaurantMenuApi } from "../constants/api";
import { swiggyApiBody2 } from "../constants/apiBody";
import { useState, useEffect } from "react";

const useRestaurantMenu = (restaurantId) => {
  const [menu, setMenu] = useState([]);
  const fetchSingleRestaurantMenu = async () => {
    const url = `${apiProxy}/${restaurantMenuApi}=${restaurantId}`;
    try {
      const response = await fetch(url, swiggyApiBody2).then((response) => {
        return response.json();
      });

      setMenu(response.data.cards);
    } catch (error) {
      console.error("Error fetching restaurant menu: ", error);
    }
  };

  useEffect(() => {
    fetchSingleRestaurantMenu();
  }, []);

  return menu;
};

export default useRestaurantMenu;
