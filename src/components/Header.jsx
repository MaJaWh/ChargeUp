import { useNavigate } from 'react-router-dom';
import '../styles/header.css'
import useToken from '../customhooks/useToken';

function Header() {

    const {removeToken} = useToken()

    const navigate = useNavigate();

    const handleClick = (event) => {
        event.preventDefault()
        removeToken();
        navigate('/')
    }

    const handleUserAccount = (event) => {
        event.preventDefault()
        navigate('/userAccount')
    }


    return(
        <div className='header__outer'>
            <div className='header__account'>
                <h2>ChargeUp</h2>
            </div>
            <div className='header__logout'>
                <button onClick={handleUserAccount} className='header__btn'>Account</button>
                <button onClick={handleClick} className="header__btn">Log Out</button>
            </div>
        </div>
    )
}
export default Header;
