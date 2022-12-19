import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import '../styles/header.css'
import useToken from '../customhooks/useToken';

function Header() {

    const {removeToken} = useToken()

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault()
        removeToken();
        navigate('/login')
    }


    return(
        <div className='header__outer'>
            <div className='header__prefrences'>
                <Link to="/prefrences" className='header__link'>Account</Link>
            </div>
            <div className='header__logout'>
                <button onClick={handleClick} className="header__button">Log Out</button>
            </div>
        </div>
    )
}
export default Header;
