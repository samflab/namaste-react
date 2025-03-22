import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faStarHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { faStar as faStarOutline } from "@fortawesome/free-regular-svg-icons";
const useStarRating = (rating, id) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 1; i <= totalStars; i++) {
    if (i <= rating) {
      stars.push(<FontAwesomeIcon icon={faStar} />);
    } else if (i - 0.5 <= rating) {
      stars.push(<FontAwesomeIcon icon={faStarHalfStroke} />);
    } else {
      stars.push(<FontAwesomeIcon icon={faStarOutline} />);
    }
  }

  return (
    <span className="rating-star" key={id}>
      {stars}
    </span>
  );
};

export default useStarRating;
