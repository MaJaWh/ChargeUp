import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "../styles/header.css";

function Header() {
  const navigate = useNavigate();

  const handleClick = () => {
    sessionStorage.setItem("token", null);
    navigate("/Login");
  };

  return (
    <div className="header__outer">
      <Link to="/prefrences">Prefrences</Link>
      <Link to="/prefrences">Prefrences</Link>
      <Link to="/prefrences">Prefrences</Link>
      <Button onClick={handleClick}>Log Out</Button>
    </div>
  );
}
export default Header;
