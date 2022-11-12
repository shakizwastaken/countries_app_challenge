import { useNavigate } from "react-router";
import "./borderBtn.css";

const BorderBtn = ({ name }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(`/name/${name}`);
  };

  return (
    <div
      className="border-country-btn item radius shadow no-select"
      onClick={handleClick}
    >
      {name}
    </div>
  );
};

export default BorderBtn;
