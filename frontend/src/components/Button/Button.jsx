import { useNavigate } from "react-router-dom";

const Button = ({ label, target }) => {
  const navigate = useNavigate();
  return (
    <>
      <button
        type="button"
        className="btn btn-secondary btn-lg border-0 rounded-pill px-4 py-3"
        onClick={() => navigate(`/${target}`)}
      >
        {label}
      </button>
    </>
  );
};

export default Button;
