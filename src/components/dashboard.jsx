import React from 'react';
import Header from '../components/Header';
import Footer from './Footer'
import Map from '../components/Map'


function Dashboard() {
    return(
        <div>
            <Header/>
            <Map/>
            <Footer/>
        </div>
    );
}

export default Dashboard