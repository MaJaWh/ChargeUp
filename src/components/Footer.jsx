import '../styles/footer.css'


function Footer({setOpenSearchBar}) {

        const togglehandler = () => {
            setOpenSearchBar(current => !current)
        }

    return(
        <div className='footer__outer'>
            <button className='footer__button' onClick={togglehandler}>Search Form</button>
            <button className='footer__button'>List</button>
            <button className='footer__button'>Reviews</button>
        </div>
    )
}
export default Footer;