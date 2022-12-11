import { Link } from 'react-router-dom'
import '../styles/header.css'

function Header() {
    return(
        <div className='header__outer'>
            <Link to="/prefrences">Prefrences</Link>
            <Link to="/prefrences">Prefrences</Link>
            <Link to="/prefrences">Prefrences</Link>
        </div>
    )
}
export default Header;