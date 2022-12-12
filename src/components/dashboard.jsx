import React from 'react';
import Header from '../components/Header';
import Footer from './Footer'
import Map from '../components/Map'
import '../styles/dashboard.css'


function Dashboard() {
    return(
        <div className='dashboard-wrapper'>
           <Header />
            <Map />      
            <Footer />
        </div>
    );
}

export default Dashboard