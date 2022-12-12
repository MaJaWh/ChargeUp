import React from 'react';
import Header from '../components/Header';
import Footer from './Footer'
import Map from '../components/Map'
import '../styles/dashboard.css'


function Dashboard() {
    return(
        <div className='dashboard-wrapper'>
            <div className='main-title'>ChargeUp</div>
           <Header />
            <Map />      
            <Footer />
        </div>
    );
}

export default Dashboard