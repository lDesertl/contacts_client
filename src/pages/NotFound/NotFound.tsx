import { useNavigate } from "react-router-dom";
import "./NotFound.scss";
const NotFound = () => {
  const navigate = useNavigate();

  const handleRedirect = (path: string) => {
    navigate(path, { replace: true });
  };

  return (
    <div className="not_found">
      <div className="not_found__text">
        <div>Упс! Кажеся, вы не туда попали</div>
        <button
          className="not_found__button"
          onClick={() => handleRedirect("/homepage")}
        >
          На главную
        </button>
      </div>
    </div>
  );
};

export default NotFound;
