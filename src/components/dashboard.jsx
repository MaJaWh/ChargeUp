import {React, useState} from 'react';
import Header from '../components/Header';
import Footer from './Footer'
import Map from '../components/Map'
import '../styles/dashboard.css'
import Search from './SearchForm';


function Dashboard() {
    const [chargeSites, setchargeSites] = useState([]);
    return(
        <div className='dashboard-wrapper'>
            <div className='main-title'>ChargeUp</div>
           <Header />
            <Map chargeSites={chargeSites} />      
            <Footer className='dashboard__footer'/>
            <Search setchargeSites={setchargeSites}/>
        </div>
    );
}

export default Dashboard