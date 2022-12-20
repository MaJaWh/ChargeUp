import React from 'react';
import Header from '../components/Header';
import Footer from './Footer'
import Map from '../components/Map'
import '../styles/dashboard.css'


function Dashboard() {
    return(
        <div className='dashboard-outer'>
            <div className='dashboard__background-image'>
                <div className='dashboard-wrapper'>
                    <h1 className='main-title'>ChargeUp</h1>
                        <Header />
                        <Map />      
                        <Footer className='dashboard__footer'/>
                </div>
            </div>
        </div>
    );
}

export default Dashboard