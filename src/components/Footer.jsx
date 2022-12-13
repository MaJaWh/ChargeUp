import '../styles/footer.css'
import { Link } from 'react-router-dom';


function Footer() {
    return(
        <div className='footer__outer'>
            <Link to="/searchform">Search Form</Link>
            <button className='footer__button'>List</button>
            <button className='footer__button'>Reviews</button>
        </div>
    )
}
export default Footer;