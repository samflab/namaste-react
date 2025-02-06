import { useRouteError } from "react-router-dom";
import "./styles/error.scss";
const ErrorPage = () => {
  const error = useRouteError();
  console.log(error);
  return (
    <div className="error-msg-container">
      <div className="error-msg">{error.status} - error</div>
      <div className="error-msg">{error.statusText}</div>
      <div className="msg">Your search was ventured beyond the foodiverse</div>
    </div>
  );
};

export default ErrorPage;
