import "../styles/restaurant.scss";
import { Link } from "react-router-dom";

const RestaurantCard = (props) => {
  const { imgLink, id, name, cuisine, rating, time, cost } = props;
  return (
    <Link to={`/restaurant-menu/${id}`} style={{ textDecoration: "none" }}>
      <div className="restaurant-card">
        <div className="img-container">
          <img src={imgLink}></img>
        </div>
        <div className="restaurant-details">
          <div className="restaurant-name">{name}</div>
          <div className="cuisine">{cuisine.join(", ")}</div>
          <div className="rating">{rating} ⭐</div>
          <div className="time-and-cost">
            <span className="time">{time}</span> away |{" "}
            <span className="cost">{cost}</span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default RestaurantCard;
